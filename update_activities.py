"""
Weekly SF-Kids activity refresh.
Asks Claude to generate fresh, seasonally-relevant SF activity data,
then patches the card HTML in results.html and index.html.
"""

import anthropic
import json
import re
from datetime import datetime

client = anthropic.Anthropic()

today = datetime.now()
month_name = today.strftime("%B")
year = today.year

prompt = f"""
Today is {today.strftime("%B %d, %Y")}.

Generate a JSON array of 12 kids activities happening in San Francisco, CA this week or this month.
Make them feel real and current for {month_name} {year} — use actual SF neighborhoods, real-sounding
provider names, realistic prices, and age ranges between 0–13.

Mix of categories: Sports, Arts, Outdoors, Music, Science, Swimming, Camps, Theater, Movement, Sensory Play.
Include at least 2 that are "special_needs_friendly": true.
Include at least 3 that are "schedule": "weekend" (happening this Sat/Sun).

Return ONLY a JSON array, no explanation. Each object must have exactly these keys:
- emoji (single emoji for the activity)
- gradient_from (CSS hex color, light)
- gradient_to (CSS hex color, slightly darker)
- age_range (e.g. "Ages 4–10")
- category (display label, e.g. "Arts & Crafts")
- data_cat (slug for filtering: sports/arts/outdoors/music/science/swimming/camps/theater/movement/sensory)
- title (activity name)
- provider (organization name)
- neighborhood (SF neighborhood)
- duration (e.g. "2 hrs")
- price (e.g. "$45" or "Free")
- price_unit (e.g. "/ session" or "/ week" — empty string if Free)
- rating (e.g. "4.9")
- review_count (number as integer)
- schedule (weekend or weekday)
- special_needs_friendly (true or false)
"""

response = client.messages.create(
    model="claude-sonnet-4-6",
    max_tokens=4096,
    messages=[{"role": "user", "content": prompt}]
)

raw = response.content[0].text.strip()

# Strip markdown code fences if present
raw = re.sub(r'^```json\s*', '', raw)
raw = re.sub(r'^```\s*', '', raw)
raw = re.sub(r'\s*```$', '', raw)

activities = json.loads(raw)


def build_card(a, extra_style=""):
    special = a.get("special_needs_friendly", False)
    special_badge = '<span class="card-special-badge">💛 Special Needs Friendly</span>' if special else ''
    special_data = 'data-special="true"' if special else ''
    price_html = a["price"] if a["price"] == "Free" else f'{a["price"]} <span>{a["price_unit"]}</span>'
    return f'''        <a href="activity.html" class="card" data-cat="{a["data_cat"]}" data-schedule="{a["schedule"]}" {special_data}>
          <div class="card-img" style="background:linear-gradient(135deg,{a["gradient_from"]},{a["gradient_to"]})">{a["emoji"]}</div>
          <div class="card-img-badge">{a["age_range"]}</div>
          <div class="card-img-save">🤍</div>
          <div class="card-body">
            <span class="card-cat">{a["category"]}</span>
            <span class="card-title">{a["title"]}</span>
            <span class="card-provider">{a["provider"]}</span>
            <div class="card-meta">
              <span class="card-tag">📍 {a["neighborhood"]}</span>
              <span class="card-tag">⏱ {a["duration"]}</span>
            </div>
            {special_badge}
          </div>
          <div class="card-footer">
            <div class="card-price">{price_html}</div>
            <div class="card-rating">⭐ {a["rating"]} <span style="color:var(--muted);font-weight:400">({a["review_count"]})</span></div>
          </div>
        </a>'''


cards_html = "\n\n".join(build_card(a) for a in activities)

# Wrap with the update timestamp comment
updated_block = f'''        <!-- Activities last refreshed: {today.strftime("%B %d, %Y")} -->
{cards_html}'''


def patch_file(filepath, new_cards_block):
    with open(filepath, "r") as f:
        content = f.read()

    # Replace everything between the cards-grid div and the /cards-grid-end marker
    pattern = r'(id="cards-grid"[^>]*>)(.*?)(      </div>\s*\n      <!-- /cards-grid-end -->)'
    replacement = r'\1\n' + new_cards_block + r'\n\3'
    new_content = re.sub(pattern, replacement, content, flags=re.DOTALL)

    if new_content == content:
        print(f"WARNING: Pattern not found in {filepath} — no changes made.")
    else:
        with open(filepath, "w") as f:
            f.write(new_content)
        print(f"Updated {filepath}")


patch_file("results.html", updated_block)

# Also update the "This Weekend in SF" section on index.html with the 6 weekend cards
weekend_cards = [a for a in activities if a["schedule"] == "weekend"][:6]
if weekend_cards:
    weekend_html = "\n\n".join(build_card(a) for a in weekend_cards)
    weekend_block = f'''    <!-- This Weekend cards last refreshed: {today.strftime("%B %d, %Y")} -->
{weekend_html}'''

    with open("index.html", "r") as f:
        idx = f.read()

    # Replace the card grid inside the "This Weekend" section
    pattern = r'(<!-- ── This Weekend cards ──.*?-->.*?<div class="cards-grid">)(.*?)(  </div>\s*\n\s*<!-- ── How it works)'
    replacement = r'\1\n' + weekend_block + r'\n  \3'
    new_idx = re.sub(pattern, replacement, idx, flags=re.DOTALL)

    if new_idx != idx:
        with open("index.html", "w") as f:
            f.write(new_idx)
        print("Updated index.html This Weekend section")
    else:
        print("index.html This Weekend pattern not found — skipping (results.html still updated)")

print(f"Done — {len(activities)} activities generated for {month_name} {year}")
