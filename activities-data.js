/* Shared activity data — referenced by activity.html, booking.html, confirmation.html */
const ACTIVITIES_DATA = {

  'soccer': {
    id: 'soccer', emoji: '⚽', emoji2: '🏃', emoji3: '🥅',
    gFrom: '#DBEAFE', gTo: '#93C5FD',
    title: 'Presidio Youth Soccer Camp', provider: 'Soccer Stars SF',
    providerEmoji: '🏫', providerDesc: 'Youth soccer programs across San Francisco neighborhoods · Certified coaches · All skill levels welcome',
    cat: 'Sports', age: 'Ages 6–12', price: '$45', priceUnit: '/ session per child',
    duration: '2 hours', neighborhood: 'Presidio, SF', rating: '4.9', reviewCount: 128, bookings: '400+',
    schedule: 'Saturdays & Sundays', featured: true, special: false,
    slots: ['9:00 AM','11:00 AM','1:00 PM','3:00 PM'], fullSlot: 2,
    desc: [
      'Join the most popular youth soccer program in San Francisco! Certified coaches run skill-building sessions at the Presidio fields every weekend. Kids are grouped by skill level — from total beginner to budding player — so everyone gets the right challenge.',
      'Sessions include drills, small-sided games, and a cool-down stretch. All coaches are US Soccer certified and background-checked. Cleats recommended but not required.'
    ],
    included: ['Certified coach (1:8 ratio)','All training equipment and pinnies','Skill assessment and group placement','Post-session progress card','Water break included'],
    bring: ['Water bottle','Athletic clothes','Cleats or sneakers','Sunscreen'],
    reviews: [
      { name: 'Sarah M. · Mom of an 8-year-old', date: 'March 2026', stars: 5, text: 'My son has been asking to come back every weekend. The coaches are patient and keep kids engaged. Worth every penny!' },
      { name: 'David K. · Dad of a 6-year-old', date: 'February 2026', stars: 5, text: 'Best organized soccer program in the city. Easy booking, great Presidio location, and amazing staff.' },
      { name: 'Priya L. · Mom of twins, ages 9', date: 'January 2026', stars: 4, text: 'Really great program. Both my kids loved it. Would love more weekday afternoon slots.' }
    ]
  },

  'nature-walk': {
    id: 'nature-walk', emoji: '🌿', emoji2: '🦋', emoji3: '🌳',
    gFrom: '#D1FAE5', gTo: '#6EE7B7',
    title: 'Golden Gate Park Nature Walk', provider: 'SF Parks & Rec',
    providerEmoji: '🌳', providerDesc: 'SF Recreation & Parks has served the city since 1871 · Free and low-cost programs for all families',
    cat: 'Outdoors', age: 'Ages 4–10', price: 'Free', priceUnit: '',
    duration: '2 hours', neighborhood: 'Golden Gate Park, SF', rating: '4.9', reviewCount: 211, bookings: '1,200+',
    schedule: 'Every Saturday', featured: true, special: true,
    slots: ['9:00 AM','11:00 AM','2:00 PM'], fullSlot: -1,
    desc: [
      'Explore the wonders of Golden Gate Park with our guided family nature walks! SF Parks & Rec naturalists lead kids through native plants, birds, insects, and ecosystems right in the heart of the city.',
      'Walks are gentle and stroller/wheelchair friendly. Special needs accommodations available. Guides adapt the experience to each group\'s age and energy level.'
    ],
    included: ['Certified naturalist guide','Nature activity booklet','Magnifying glasses and bug viewers','Accessible paved paths','Completely free — always'],
    bring: ['Water bottle','Comfortable shoes','Light jacket','Curiosity!'],
    reviews: [
      { name: 'Marcus T. · Dad of a 5-year-old', date: 'April 2026', stars: 5, text: 'Our daughter talked about the butterflies for weeks. The guide was incredible and it\'s free! We come back almost every month.' },
      { name: 'Keiko R. · Mom of a 7-year-old', date: 'March 2026', stars: 5, text: 'My son who struggles in traditional settings thrived on this walk. So inclusive and patient. Highly recommend for all kids.' },
      { name: 'Tom & Lisa B. · Parents of 3', date: 'February 2026', stars: 5, text: 'Brought ages 4, 7, and 10 — all three engaged the whole time. Pitched perfectly for mixed ages.' }
    ]
  },

  'science-lab': {
    id: 'science-lab', emoji: '🔬', emoji2: '🧪', emoji3: '⚗️',
    gFrom: '#EDE9FE', gTo: '#C4B5FD',
    title: 'Exploratorium Kids Science Lab', provider: 'The Exploratorium',
    providerEmoji: '🔬', providerDesc: 'World-renowned science museum on the SF waterfront · Education programs since 1969',
    cat: 'Science', age: 'Ages 5–13', price: '$35', priceUnit: '/ child',
    duration: '2.5 hours', neighborhood: 'Embarcadero, SF', rating: '4.9', reviewCount: 347, bookings: '2,000+',
    schedule: 'Daily', featured: false, special: false,
    slots: ['10:00 AM','1:00 PM','3:00 PM'], fullSlot: -1,
    desc: [
      'Step into one of the world\'s greatest science museums for a hands-on kids lab experience! Educators lead structured sessions where kids experiment and make real scientific discoveries. Every session has a different theme — light, physics, biology, and more.',
      'Small groups of 8 ensure every child gets hands-on time. No prior science knowledge needed. Museum exhibit access included before and after the session.'
    ],
    included: ['Guided lab with Exploratorium educator (1:6)','All science materials and equipment','Take-home experiment card','Museum exhibit access included','Every session has a unique theme'],
    bring: ['Water bottle','Closed-toe shoes (required for lab)','Questions and curiosity!'],
    reviews: [
      { name: 'Aisha N. · Mom of a 9-year-old', date: 'April 2026', stars: 5, text: 'My daughter came home wanting to be a scientist. The educators make complex concepts completely accessible for kids.' },
      { name: 'James W. · Dad of a 6-year-old', date: 'March 2026', stars: 5, text: 'Best $35 spent on a kids activity in SF. Lab session plus full museum access — incredible value.' },
      { name: 'Sofia M. · Mom of a 12-year-old', date: 'February 2026', stars: 4, text: 'My son loved it. Would love even more advanced options for the 12-13 age range — he wanted more challenge.' }
    ]
  },

  'arts-crafts': {
    id: 'arts-crafts', emoji: '🎨', emoji2: '✂️', emoji3: '🖌️',
    gFrom: '#FEF9C3', gTo: '#FDE047',
    title: 'Mission Arts & Crafts Studio', provider: 'Little Makers Studio',
    providerEmoji: '🎨', providerDesc: 'Neighborhood art studio for kids · Open studio sessions, mini maker playgroups · Warm, welcoming creative space',
    cat: 'Arts & Crafts', age: 'Ages 3–8', price: '$25', priceUnit: '/ session',
    duration: '90 min', neighborhood: 'The Mission, SF', rating: '4.8', reviewCount: 94, bookings: '500+',
    schedule: 'Weekends', featured: false, special: false,
    slots: ['10:00 AM','12:00 PM','2:00 PM'], fullSlot: -1,
    desc: [
      'A creative sanctuary for little makers in the heart of the Mission! Each session is themed — collage, watercolors, clay, or mixed-media. Our studio is mess-friendly and stress-free.',
      'No artistic experience needed. Sessions are guided but open-ended — we set the theme, kids take it wherever their imagination goes. Every child takes their creation home.'
    ],
    included: ['All art supplies and materials','Themed project each session','Smocks provided','Take-home finished artwork','Experienced children\'s art educators'],
    bring: ['Clothes that can get messy','Enthusiasm to create!'],
    reviews: [
      { name: 'Rachel P. · Mom of a 4-year-old', date: 'April 2026', stars: 5, text: 'My daughter absolutely loves it here. No pressure, just pure joy. We come back every other weekend.' },
      { name: 'Omar A. · Dad of a 6-year-old', date: 'March 2026', stars: 5, text: 'My shy son was immediately comfortable here. He\'s been asking to go back since we left.' },
      { name: 'Nadia K. · Mom of twins, ages 5', date: 'January 2026', stars: 4, text: 'Both kids had a wonderful time. Would love slightly longer sessions — 90 min goes by so fast!' }
    ]
  },

  'swim-tots': {
    id: 'swim-tots', emoji: '🏊', emoji2: '🌊', emoji3: '🤽',
    gFrom: '#CFFAFE', gTo: '#67E8F9',
    title: 'Marina Swim Lessons for Tots', provider: 'SF Aquatics Program',
    providerEmoji: '🏊', providerDesc: 'City-operated aquatics program · Certified Red Cross instructors · Parent-child and independent tracks',
    cat: 'Swimming', age: 'Ages 0–6', price: '$40', priceUnit: '/ session',
    duration: '45 min', neighborhood: 'Marina, SF', rating: '4.7', reviewCount: 83, bookings: '300+',
    schedule: 'Weekdays', featured: false, special: false,
    slots: ['9:00 AM','10:00 AM','11:00 AM','4:00 PM'], fullSlot: 2,
    desc: [
      'Build water confidence and safety skills from the very start! Our Marina pool lessons introduce babies and toddlers to water in a warm, gentle, playful environment. Parent-child classes for ages 0–3; independent beginner classes for ages 3–6.',
      'Instructors follow the Red Cross Water Safety curriculum. Small group sizes ensure individual attention. Heated indoor pool — comfortable year-round.'
    ],
    included: ['Red Cross certified swim instructor','Pool flotation devices provided','Progress tracking after each session','Heated indoor pool','Parent observation area'],
    bring: ['Swim diaper (under 3)','Swimsuit','Towel','Change of clothes','Goggles (optional)'],
    reviews: [
      { name: 'Jen L. · Mom of a 2-year-old', date: 'April 2026', stars: 5, text: 'My son was terrified of water. After 4 sessions he was splashing and laughing. The instructor was amazing with his fear.' },
      { name: 'Carlos M. · Dad of a 4-year-old', date: 'March 2026', stars: 4, text: 'Great program. My daughter is starting to float on her own! Parking can be tricky in the Marina though.' },
      { name: 'Yuki T. · Mom of a 1-year-old', date: 'February 2026', stars: 5, text: 'Parent-and-me swim class was the best thing we\'ve done together. Warm pool, gentle instructor. Already booked next block.' }
    ]
  },

  'music-babies': {
    id: 'music-babies', emoji: '🎵', emoji2: '🎶', emoji3: '🥁',
    gFrom: '#FCE7F3', gTo: '#F9A8D4',
    title: 'Noe Valley Music for Babies', provider: 'Music Together SF',
    providerEmoji: '🎵', providerDesc: 'Award-winning music classes for babies & toddlers · Serving SF families since 2001 · Research-backed curriculum',
    cat: 'Music', age: 'Ages 0–3', price: '$20', priceUnit: '/ session',
    duration: '45 min', neighborhood: 'Noe Valley, SF', rating: '5.0', reviewCount: 62, bookings: '200+',
    schedule: 'Wednesdays & Saturdays', featured: false, special: true,
    slots: ['9:30 AM','11:00 AM'], fullSlot: -1,
    desc: [
      'Music in the first 3 years boosts language development, emotional regulation, and cognitive growth. Our Noe Valley studio brings this to life through singing, rhythm, movement, and instrument exploration in a sensory-friendly environment.',
      'Classes are gentle, low-stimulation, and follow a predictable structure — great for children with sensory sensitivities. Parents participate fully throughout. No musical experience needed!'
    ],
    included: ['Live music by early childhood specialist','Instrument exploration basket','Lap activities and movement songs','Sensory-friendly low-stimulation environment','Take-home song sheet each week'],
    bring: ['Cozy outfit for movement','Favorite soft toy if helpful for transitions'],
    reviews: [
      { name: 'Mei C. · Mom of a 10-month-old', date: 'April 2026', stars: 5, text: 'I was skeptical — music class for a baby? Converted after the first session. My daughter lights up the moment we walk in.' },
      { name: 'Dani R. · Mom of a 2-year-old with sensory needs', date: 'March 2026', stars: 5, text: 'Other music classes were too loud for my son. This one was calm, structured, warm. He participated more than ever in a group.' },
      { name: 'Ben & Tara S. · Parents of 18-month twins', date: 'January 2026', stars: 5, text: 'Highlight of our week. $20 is the best deal in SF for this quality of class.' }
    ]
  },

  'sensory-play': {
    id: 'sensory-play', emoji: '🧸', emoji2: '🎠', emoji3: '🌈',
    gFrom: '#FEF3C7', gTo: '#FCD34D',
    title: 'Baby Sensory Play Morning', provider: 'SF Rec & Parks Early Childhood',
    providerEmoji: '🧸', providerDesc: 'City-run early childhood programs for infants & toddlers · Free and low-cost · Neighborhood locations across SF',
    cat: 'Sensory Play', age: 'Ages 0–2', price: '$15', priceUnit: '/ session',
    duration: '60 min', neighborhood: 'Castro, SF', rating: '4.9', reviewCount: 44, bookings: '150+',
    schedule: 'Tuesdays & Thursdays', featured: false, special: true,
    slots: ['9:30 AM','11:00 AM'], fullSlot: -1,
    desc: [
      'Designed for infants and young toddlers, our sensory play mornings create a rich, safe environment for exploration through touch, sound, light, and movement. Each session features themed stations — water play, foam, rice bins, light tables, and more.',
      'Sessions are kept small (max 8 babies) to ensure a calm, unhurried environment. Ideal for children who may be overwhelmed by louder group settings. Parents stay and play throughout.'
    ],
    included: ['All sensory materials (non-toxic, baby-safe)','Themed play stations','Max 8 babies per session','Floor mats and cushions provided','Sanitized materials every session'],
    bring: ['Change of clothes (things will get messy!)','Favorite comfort object','Snack for after'],
    reviews: [
      { name: 'Fatima A. · Mom of a 7-month-old', date: 'April 2026', stars: 5, text: 'Calm, focused, safe — and my daughter was completely absorbed for the whole hour. Already booked the next 4 sessions.' },
      { name: 'Chris & Mia L. · Parents of a 14-month-old', date: 'March 2026', stars: 5, text: 'Our son has sensory sensitivities. This was perfect — small, structured, and the facilitator introduced new textures at exactly his pace.' },
      { name: 'Priya N. · Mom of a 2-year-old', date: 'February 2026', stars: 4, text: 'Great concept beautifully executed. The light table station was a huge hit. Will be back!' }
    ]
  },

  'theater': {
    id: 'theater', emoji: '🎭', emoji2: '🎬', emoji3: '🎤',
    gFrom: '#E0F2FE', gTo: '#7DD3FC',
    title: 'Young Performers Theatre Workshop', provider: 'YPT San Francisco',
    providerEmoji: '🎭', providerDesc: 'Award-winning youth theater company · Over 30 years developing young performers in SF',
    cat: 'Theater', age: 'Ages 7–13', price: '$30', priceUnit: '/ session',
    duration: '2 hours', neighborhood: 'Pacific Heights, SF', rating: '4.8', reviewCount: 57, bookings: '250+',
    schedule: 'Weekends', featured: false, special: false,
    slots: ['10:00 AM','1:00 PM'], fullSlot: -1,
    desc: [
      'Unlock your child\'s inner performer! YPT workshops combine acting, improv, voice, and movement in a supportive environment. Kids develop confidence, public speaking, and creative expression — not just stage skills.',
      'Led by professional theater educators, each session builds toward a short sharing performance. No prior experience needed. Age-grouped sessions ensure the right challenge and social connection.'
    ],
    included: ['2 professional theater educators per session','Script and scene work materials','Improv warm-up games','End-of-session parent sharing (10 min)','Monthly progress notes to parents'],
    bring: ['Comfortable clothes for movement','Water bottle','Willingness to be silly!'],
    reviews: [
      { name: 'Vanessa H. · Mom of a 10-year-old', date: 'April 2026', stars: 5, text: 'My introverted daughter found her voice here. After 3 months she was performing in front of strangers with complete confidence.' },
      { name: 'Michael T. · Dad of an 8-year-old', date: 'March 2026', stars: 5, text: 'Theater was never on our radar — now my son is a much better communicator. Side effect of great theater training.' },
      { name: 'Anna S. · Mom of a 12-year-old', date: 'February 2026', stars: 4, text: 'Excellent program. A year in and the growth is remarkable. Educators genuinely care about each kid.' }
    ]
  },

  'gym': {
    id: 'gym', emoji: '🤸', emoji2: '🏋️', emoji3: '⭕',
    gFrom: '#D1FAE5', gTo: '#34D399',
    title: 'Toddler Tumble & Play Gym', provider: 'Gymboree Play & Music',
    providerEmoji: '🤸', providerDesc: 'Trusted toddler development program · Research-based curriculum · SF Sunset location',
    cat: 'Movement', age: 'Ages 1–3', price: '$22', priceUnit: '/ session',
    duration: '60 min', neighborhood: 'Sunset, SF', rating: '4.7', reviewCount: 51, bookings: '180+',
    schedule: 'Weekends', featured: false, special: false,
    slots: ['9:00 AM','10:30 AM','12:00 PM'], fullSlot: -1,
    desc: [
      'Let those little legs loose! Gymboree\'s toddler gym sessions support gross motor development through climbing, crawling, jumping, rolling, and balancing. Equipment is sized perfectly for ages 1–3 — safe, padded, and endlessly fun.',
      'Each session follows a loose structure with free play, guided movement, bubbles, and a parachute finale. Parents participate throughout. A great way to burn energy, build body confidence, and meet local families.'
    ],
    included: ['Fully padded age-appropriate gym equipment','Structured and free-play balance','Bubble time and parachute activity','Clean, safe indoor space','Gymboree educator facilitated'],
    bring: ['Grippy socks (no shoes on gym floor)','Change of clothes','Water bottle'],
    reviews: [
      { name: 'Lisa M. · Mom of an 18-month-old', date: 'April 2026', stars: 5, text: 'This is our toddler\'s happy place. He would go every day if he could. The equipment is perfect for his size.' },
      { name: 'Derek P. · Dad of a 2-year-old', date: 'March 2026', stars: 4, text: 'Great for burning energy on a rainy SF Saturday. My daughter loves the bubbles and parachute at the end.' },
      { name: 'Hong W. · Mom of twins, 2 years', date: 'January 2026', stars: 5, text: 'Absolute chaos and absolute joy — exactly right for this age. Staff manage a room full of toddlers with impressive calm.' }
    ]
  },

  'art-inclusive': {
    id: 'art-inclusive', emoji: '🎨', emoji2: '🖼️', emoji3: '✏️',
    gFrom: '#F3E8FF', gTo: '#C4B5FD',
    title: 'Inclusive Art Studio — Adaptive Class', provider: 'Creativity Explored SF',
    providerEmoji: '🎨', providerDesc: 'Studio dedicated to artists with developmental disabilities · Inclusive programs for all kids since 2001',
    cat: 'Arts & Crafts', age: 'Ages 3–13', price: '$20', priceUnit: '/ session',
    duration: '90 min', neighborhood: 'The Mission, SF', rating: '5.0', reviewCount: 76, bookings: '300+',
    schedule: 'Weekends', featured: false, special: true,
    slots: ['10:00 AM','12:00 PM'], fullSlot: -1,
    desc: [
      'Art without limits. Creativity Explored\'s adaptive sessions welcome children of all abilities — including those with autism, Down syndrome, ADHD, sensory differences, and other developmental needs. Trained educators create a calm, flexible, fully accommodating environment.',
      'Sessions are structured but never rigid. Kids choose their medium, pace, and expression. Every child leaves with something they made themselves.'
    ],
    included: ['Trained adaptive art educators (1:4 ratio)','Full range of media (paint, clay, collage, drawing)','Sensory-friendly materials available','Child-led flexible structure','Take-home finished artwork every session'],
    bring: ['Comfortable clothes','Any sensory tools your child uses','A snack for after'],
    reviews: [
      { name: 'Sandra L. · Mom of a 7-year-old with autism', date: 'April 2026', stars: 5, text: 'I\'ve cried happy tears watching my son here. He communicates through art in ways he can\'t verbally. The educators understand him deeply.' },
      { name: 'Phil R. · Dad of a 9-year-old with ADHD', date: 'March 2026', stars: 5, text: 'No rushing, no redirecting. Just creating. My daughter thrives here. The staff are exceptional human beings.' },
      { name: 'Gina M. · Mom of a 5-year-old', date: 'February 2026', stars: 5, text: 'We came without a formal diagnosis — just wanted a gentler art class. Every child is met where they are.' }
    ]
  },

  'adaptive-swim': {
    id: 'adaptive-swim', emoji: '🏊', emoji2: '🌊', emoji3: '💙',
    gFrom: '#CFFAFE', gTo: '#67E8F9',
    title: 'Adaptive Swim Program', provider: 'Pomeroy Therapeutic Swim',
    providerEmoji: '🏊', providerDesc: 'SF\'s leading therapeutic aquatics provider · Warm water pool · Programs for children with physical and developmental differences',
    cat: 'Swimming', age: 'Ages 2–13', price: '$35', priceUnit: '/ session',
    duration: '45 min', neighborhood: 'Richmond, SF', rating: '4.9', reviewCount: 58, bookings: '200+',
    schedule: 'Weekdays', featured: false, special: true,
    slots: ['9:00 AM','10:00 AM','11:00 AM'], fullSlot: -1,
    desc: [
      'Water safety and swim confidence for every child — including those with physical disabilities, autism, sensory processing disorder, and Down syndrome. Our therapeutic aquatics instructors adapt instruction to each child\'s unique needs.',
      'Sessions take place in a warm private pool. Goals are set collaboratively with parents at the first session and tracked over time. Equipment and flotation aids always available.'
    ],
    included: ['Certified therapeutic aquatics instructor (1:1 or 1:2)','Warm water pool (90°F)','All adaptive flotation equipment','Written progress notes after each session','Parent goal-setting included'],
    bring: ['Swimsuit','Towel','Swim diaper if needed','Any medical notes for the instructor'],
    reviews: [
      { name: 'Maria G. · Mom of a 6-year-old with CP', date: 'April 2026', stars: 5, text: 'SF Therapeutic Aquatics changed our family\'s life. My daughter can now float independently. The instructor is a miracle worker.' },
      { name: 'Sam T. · Dad of an 8-year-old with autism', date: 'March 2026', stars: 5, text: 'My son had a severe water phobia. After 6 sessions he was putting his face in the water. Trust was built slowly, never pushed.' },
      { name: 'Jennifer K. · Mom of a 4-year-old', date: 'January 2026', stars: 5, text: 'The therapeutic approach works for any kid needing a gentler introduction to water. Highly recommend.' }
    ]
  },

  'sensory-dance': {
    id: 'sensory-dance', emoji: '🌟', emoji2: '💃', emoji3: '🎶',
    gFrom: '#FEF3C7', gTo: '#FCD34D',
    title: 'Sensory-Friendly Dance & Movement', provider: 'SF Ballet Adaptive Programs',
    providerEmoji: '🌟', providerDesc: 'San Francisco Ballet\'s sensory-friendly & adaptive dance programs · Welcoming children of all abilities',
    cat: 'Movement', age: 'Ages 4–12', price: '$25', priceUnit: '/ session',
    duration: '60 min', neighborhood: 'Hayes Valley, SF', rating: '4.9', reviewCount: 41, bookings: '160+',
    schedule: 'Weekends', featured: false, special: true,
    slots: ['10:00 AM','12:00 PM'], fullSlot: -1,
    desc: [
      'Dance and movement for every body and every sensory profile. Sessions are designed for children who may be overwhelmed by traditional dance classes — lower lighting, consistent structure, noise-reducing options, and a pace set by the children.',
      'No performance pressure, no uniforms, no mirrors. Just joyful movement and creative expression. Children with autism, sensory differences, anxiety, and physical disabilities are warmly welcomed.'
    ],
    included: ['Certified inclusive dance educator','Sensory-adapted studio (adjustable lighting)','Predictable class structure with visual schedule','Props and movement tools provided','Parent presence welcome throughout'],
    bring: ['Comfortable clothes','Non-slip socks or soft shoes','Water bottle','Preferred sensory items'],
    reviews: [
      { name: 'Rosa P. · Mom of a 7-year-old with SPD', date: 'April 2026', stars: 5, text: 'My daughter has never been able to participate in a group class before. Here, she dances. I cannot overstate what this means to our family.' },
      { name: 'Alex J. · Dad of a 5-year-old with autism', date: 'March 2026', stars: 5, text: 'The visual schedule on the wall made all the difference. My son knew what was coming and stayed regulated the whole class.' },
      { name: 'Terri B. · Mom of a 9-year-old', date: 'February 2026', stars: 4, text: 'We came for anxiety, not a formal diagnosis — and it\'s been wonderful. Works for any child who needs a low-pressure environment.' }
    ]
  },

  'gg-camp': {
    id: 'gg-camp', emoji: '⛺', emoji2: '🌲', emoji3: '🏕️',
    gFrom: '#D1FAE5', gTo: '#6EE7B7',
    title: 'Golden Gate Park Summer Day Camp', provider: 'SF Recreation & Parks',
    providerEmoji: '🌳', providerDesc: 'City-operated summer programming · Affordable camps across SF neighborhoods',
    cat: 'Camps', age: 'Ages 6–13', price: '$120', priceUnit: '/ week',
    duration: 'Full day (8am–5pm)', neighborhood: 'Golden Gate Park, SF', rating: '4.8', reviewCount: 203, bookings: '800+',
    schedule: 'Summer (June–August)', featured: false, special: false,
    slots: ['Week of June 16','Week of June 23','Week of July 7','Week of July 14'], fullSlot: -1,
    desc: [
      'Spend the summer in the most beautiful backyard in San Francisco! SF Rec & Parks\' Golden Gate Park Day Camp combines outdoor adventure, sports, arts, nature exploration, and field trips across the park\'s 1,000+ acres.',
      'Weeks are themed — ecology, team sports, creative arts, and more. 1:8 staff ratio. Extended care available 7:30am–6pm for an additional fee.'
    ],
    included: ['Full-day programming (8am–5pm)','All activity materials','Daily snack','Field trips within Golden Gate Park','Camp t-shirt on first day'],
    bring: ['Packed lunch','Water bottle','Sunscreen','Athletic shoes','Change of clothes'],
    reviews: [
      { name: 'Brenda T. · Mom of a 9-year-old', date: 'Summer 2025', stars: 5, text: 'Best summer camp in the city for the price. Came home exhausted and happy every single day.' },
      { name: 'Kevin A. · Dad of an 11-year-old', date: 'Summer 2025', stars: 5, text: 'Three summers here. Consistent quality, different themes each year. The Golden Gate Park setting can\'t be beat.' },
      { name: 'Julia N. · Mom of a 7-year-old', date: 'Summer 2025', stars: 4, text: 'Great value. Well organized drop-off and pick-up. My son\'s only complaint was that it ended.' }
    ]
  },

  'robotics-camp': {
    id: 'robotics-camp', emoji: '🤖', emoji2: '💻', emoji3: '⚙️',
    gFrom: '#EDE9FE', gTo: '#C4B5FD',
    title: 'Code & Robotics Summer Camp', provider: 'iD Tech Camps SF',
    providerEmoji: '🤖', providerDesc: 'Leading STEM camp provider · 300+ locations nationwide · Alumni at Google, Apple, NASA',
    cat: 'Camps · STEM', age: 'Ages 8–13', price: '$299', priceUnit: '/ week',
    duration: 'Full day (9am–4pm)', neighborhood: 'SoMa, SF', rating: '4.9', reviewCount: 178, bookings: '600+',
    schedule: 'Summer (June–August)', featured: false, special: false,
    slots: ['Week of June 16','Week of July 7','Week of July 21','Week of August 4'], fullSlot: 2,
    desc: [
      'Build real robots. Write real code. Leave with skills that matter. Campers choose a track (Scratch, Python, Minecraft modding, Roblox, or robotics) and go deep for a full week in small groups of 8.',
      'Campers complete a real project by Friday and present it to families. No prior coding experience required for beginner tracks; advanced tracks available for kids who\'ve already been coding.'
    ],
    included: ['Week-long project-based curriculum','All tech equipment (laptops, robotics kits)','Daily snack','Friday family showcase','Certificate and digital portfolio'],
    bring: ['Packed lunch','Water bottle','A notebook','Enthusiasm for tech!'],
    reviews: [
      { name: 'Amy Z. · Mom of a 10-year-old', date: 'Summer 2025', stars: 5, text: 'My daughter had never coded. By Friday she\'d built a working Python game. Instructors are passionate and great with kids.' },
      { name: 'Ryan K. · Dad of a 12-year-old', date: 'Summer 2025', stars: 5, text: 'Expensive but worth every dollar. My son wrote his first Python program. The Friday showcase was genuinely impressive.' },
      { name: 'Tina L. · Mom of a 9-year-old', date: 'Summer 2025', stars: 4, text: 'Great outcomes. Just make sure to pick the right track for your child\'s level — beginner vs. intermediate.' }
    ]
  },

  'art-camp': {
    id: 'art-camp', emoji: '🎨', emoji2: '🖌️', emoji3: '🏛️',
    gFrom: '#FEF9C3', gTo: '#FDE047',
    title: 'Young Artists Summer Studio', provider: 'SFMOMA Education',
    providerEmoji: '🏛️', providerDesc: 'Education arm of the San Francisco Museum of Modern Art · Art education for SF families since 1935',
    cat: 'Camps · Arts', age: 'Ages 5–12', price: '$185', priceUnit: '/ week',
    duration: 'Half day (9am–1pm)', neighborhood: 'SoMa, SF', rating: '4.9', reviewCount: 91, bookings: '350+',
    schedule: 'Summer (June–August)', featured: false, special: false,
    slots: ['Week of June 23','Week of July 7','Week of July 14','Week of August 11'], fullSlot: -1,
    desc: [
      'Create alongside masterpieces. SFMOMA\'s summer studio program gives young artists direct access to the museum\'s collection as inspiration. Each week is themed around an artist, movement, or technique — from Frida Kahlo to street art.',
      'Morning sessions combine gallery exploration and studio art-making. Taught by SFMOMA\'s award-winning education team.'
    ],
    included: ['Museum access with educator-led gallery tours','Professional-grade art materials','Morning snack','Portfolio folder for the week\'s work','End-of-week mini-exhibition for families'],
    bring: ['Clothes that can get painty','Packed lunch for after','Sketchbook if you have one'],
    reviews: [
      { name: 'Chloe B. · Mom of an 8-year-old', date: 'Summer 2025', stars: 5, text: 'Having a world-class museum as a classroom changes everything. My daughter made paintings I\'d honestly hang in my home.' },
      { name: 'Nathan P. · Dad of an 11-year-old', date: 'Summer 2025', stars: 5, text: 'This week gave my son vocabulary, technique, and total confidence in calling himself an artist.' },
      { name: 'Monica S. · Mom of a 6-year-old', date: 'Summer 2025', stars: 4, text: 'Beautifully run. Half day works perfectly for younger kids. We did two weeks this summer.' }
    ]
  },

  'sport-camp': {
    id: 'sport-camp', emoji: '⚽', emoji2: '🏀', emoji3: '🎾',
    gFrom: '#CFFAFE', gTo: '#67E8F9',
    title: 'Multi-Sport Summer Camp', provider: 'Soccer Stars SF',
    providerEmoji: '🏫', providerDesc: 'Youth sports programs across San Francisco neighborhoods · Certified coaches · All skill levels welcome',
    cat: 'Camps · Sports', age: 'Ages 6–12', price: '$250', priceUnit: '/ week',
    duration: 'Full day (8:30am–4:30pm)', neighborhood: 'Presidio, SF', rating: '4.8', reviewCount: 144, bookings: '500+',
    schedule: 'Summer (June–August)', featured: false, special: false,
    slots: ['Week of June 16','Week of June 30','Week of July 14','Week of July 28'], fullSlot: 1,
    desc: [
      'Six sports in one week. Bay Area Youth Athletics\' multi-sport camp rotates kids through soccer, basketball, flag football, tennis, ultimate frisbee, and track — giving them a taste of everything and a chance to discover what they love.',
      'Each sport is taught in 90-minute blocks by sport-specific coaches. Afternoons include team games and friendly competitions. Skill-grouped teams ensure every child is appropriately challenged.'
    ],
    included: ['All sports equipment','Six sport rotations across the week','Certified background-checked coaches','Daily snack','Camp t-shirt on day one'],
    bring: ['Athletic shoes (cleats optional)','Packed lunch','Water bottle','Sunscreen'],
    reviews: [
      { name: 'Jason M. · Dad of a 9-year-old', date: 'Summer 2025', stars: 5, text: 'My son didn\'t know which sport he liked. After this camp he\'s decided on basketball. Mission accomplished!' },
      { name: 'Grace L. · Mom of a 7-year-old', date: 'Summer 2025', stars: 5, text: 'The Presidio is a gorgeous setting and rotating sports kept my daughter fully engaged all week.' },
      { name: 'Victor N. · Dad of an 11-year-old', date: 'Summer 2025', stars: 4, text: 'Great camp. My son would have preferred more soccer time but the variety is the point for a multi-sport camp.' }
    ]
  }

};

// Capacity limits, organizer contacts, and provider URLs
const ACTIVITY_CAPACITY = {
  'soccer':         { capacity: 16, organizerEmail: 'info@soccerstars.com',               providerUrl: 'https://www.soccerstars.com/ca/sanfrancisco/' },
  'nature-walk':    { capacity: 24, organizerEmail: 'programs@sfrecpark.org',             providerUrl: 'https://sfrecpark.org' },
  'science-lab':    { capacity: 8,  organizerEmail: 'education@exploratorium.edu',        providerUrl: 'https://www.exploratorium.edu' },
  'arts-crafts':    { capacity: 12, organizerEmail: 'hello@little-makers-studio.com',     providerUrl: 'https://www.little-makers-studio.com' },
  'swim-tots':      { capacity: 6,  organizerEmail: 'aquatics@sfrecpark.org',             providerUrl: 'https://sfrecpark.org/aquatics' },
  'music-babies':   { capacity: 10, organizerEmail: 'info@musictogethersf.com',           providerUrl: 'https://www.musictogethersf.com' },
  'sensory-play':   { capacity: 8,  organizerEmail: 'earlychildhood@sfrecpark.org',       providerUrl: 'https://sfrecpark.org/1729/Early-Childhood-Programs' },
  'theater':        { capacity: 14, organizerEmail: 'info@ypt.org',                       providerUrl: 'https://www.ypt.org' },
  'gym':            { capacity: 12, organizerEmail: 'sf@gymboree.com',                    providerUrl: 'https://www.gymboree.com' },
  'art-inclusive':  { capacity: 8,  organizerEmail: 'education@creativityexplored.org',   providerUrl: 'https://www.creativityexplored.org' },
  'adaptive-swim':  { capacity: 4,  organizerEmail: 'info@prrcsf.org',                    providerUrl: 'https://www.prrcsf.org/therapeutic-swim' },
  'sensory-dance':  { capacity: 10, organizerEmail: 'education@sfballet.org',             providerUrl: 'https://www.sfballet.org/community/sensory-friendly-adaptive-programs/' },
  'gg-camp':        { capacity: 20, organizerEmail: 'camps@sfrecpark.org',                providerUrl: 'https://sfrecpark.org' },
  'robotics-camp':  { capacity: 8,  organizerEmail: 'sf@idtech.com',                      providerUrl: 'https://www.idtech.com' },
  'art-camp':       { capacity: 15, organizerEmail: 'education@sfmoma.org',               providerUrl: 'https://www.sfmoma.org/learn' },
  'sport-camp':     { capacity: 20, organizerEmail: 'info@soccerstars.com',               providerUrl: 'https://www.soccerstars.com/ca/sanfrancisco/' }
};

// Merge capacity + organizer into ACTIVITIES_DATA at load time
Object.keys(ACTIVITY_CAPACITY).forEach(id => {
  if (ACTIVITIES_DATA[id]) Object.assign(ACTIVITIES_DATA[id], ACTIVITY_CAPACITY[id]);
});
