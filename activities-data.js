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
    bring: ['Water bottle','Athletic clothes','Cleats or sneakers','Sunscreen']
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
    bring: ['Water bottle','Comfortable shoes','Light jacket','Curiosity!']
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
    bring: ['Water bottle','Closed-toe shoes (required for lab)','Questions and curiosity!']
  },

  'arts-crafts': {
    id: 'arts-crafts', emoji: '🎨', emoji2: '✂️', emoji3: '🖌️',
    gFrom: '#FEF9C3', gTo: '#FDE047',
    title: 'Kids Arts & Crafts Studio', provider: 'Maker Studio Kidz',
    providerEmoji: '🎨', providerDesc: 'SF arts and STEM studio for kids ages 2–14 · Open studio sessions, maker playgroups, and classes · San Francisco',
    cat: 'Arts & Crafts', age: 'Ages 2–14', price: '$25', priceUnit: '/ session',
    duration: '90 min', neighborhood: 'San Francisco', rating: '4.8', reviewCount: 0, bookings: '',
    schedule: 'Weekends', featured: false, special: false,
    slots: ['10:00 AM','12:00 PM','2:00 PM'], fullSlot: -1,
    desc: [
      'A creative space built for little makers. Maker Studio Kidz offers arts, crafts, and STEM sessions for kids ages 2–14. Each session is themed — collage, watercolors, clay, or mixed-media — in a mess-friendly, stress-free environment.',
      'No artistic experience needed. Sessions are guided but open-ended — instructors set the theme and kids take it wherever their imagination goes. Every child takes their creation home.'
    ],
    included: ['All art supplies and materials','Themed project each session','Smocks provided','Take-home finished artwork','Experienced children\'s art educators'],
    bring: ['Clothes that can get messy','Enthusiasm to create']
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
    bring: ['Swim diaper (under 3)','Swimsuit','Towel','Change of clothes','Goggles (optional)']
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
    bring: ['Cozy outfit for movement','Favorite soft toy if helpful for transitions']
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
    bring: ['Change of clothes (things will get messy!)','Favorite comfort object','Snack for after']
  },

  'theater': {
    id: 'theater', emoji: '🎭', emoji2: '🎬', emoji3: '🎤',
    gFrom: '#E0F2FE', gTo: '#7DD3FC',
    title: 'Young Performers Theatre Workshop', provider: 'Young Performers Theatre',
    providerEmoji: '🎭', providerDesc: 'Award-winning nonprofit youth theater company at Fort Mason Center · Over 30 years developing young performers in SF',
    cat: 'Theater', age: 'Ages 7–13', price: '$30', priceUnit: '/ session',
    duration: '2 hours', neighborhood: 'Pacific Heights, SF', rating: '4.8', reviewCount: 57, bookings: '250+',
    schedule: 'Weekends', featured: false, special: false,
    slots: ['10:00 AM','1:00 PM'], fullSlot: -1,
    desc: [
      'Unlock your child\'s inner performer! YPT workshops combine acting, improv, voice, and movement in a supportive environment. Kids develop confidence, public speaking, and creative expression — not just stage skills.',
      'Led by professional theater educators, each session builds toward a short sharing performance. No prior experience needed. Age-grouped sessions ensure the right challenge and social connection.'
    ],
    included: ['2 professional theater educators per session','Script and scene work materials','Improv warm-up games','End-of-session parent sharing (10 min)','Monthly progress notes to parents'],
    bring: ['Comfortable clothes for movement','Water bottle','Willingness to be silly!']
  },

  'gym': {
    id: 'gym', emoji: '🤸', emoji2: '🏋️', emoji3: '⭕',
    gFrom: '#D1FAE5', gTo: '#34D399',
    title: 'Toddler Gym & Movement Play', provider: 'SF Recreation & Park Dept.',
    providerEmoji: '🤸', providerDesc: 'City-run toddler movement classes at recreation centers across SF · Low-cost and sliding-scale · sfrecpark.org',
    cat: 'Movement', age: 'Ages 1–5', price: '$10', priceUnit: '/ session',
    duration: '60 min', neighborhood: 'Multiple locations, SF', rating: '4.7', reviewCount: 0, bookings: '',
    schedule: 'Weekdays & Weekends (varies by location)', featured: false, special: false,
    slots: ['Morning sessions','Weekend sessions — check sfrecpark.org for schedule'], fullSlot: -1,
    desc: [
      'Let those little legs loose. SF Recreation & Park runs toddler movement and gym play classes at recreation centers across the city — low-cost, city-run, and widely available.',
      'Sessions support gross motor development through climbing, crawling, jumping, rolling, and balancing on age-appropriate equipment. Parent participation encouraged. A great way to burn energy and meet local families.'
    ],
    included: ['Age-appropriate padded gym equipment','Structured and free-play balance','Parent participation throughout','Indoor heated space'],
    bring: ['Grippy socks or bare feet','Change of clothes','Water bottle']
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
    bring: ['Comfortable clothes','Any sensory tools your child uses','A snack for after']
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
    bring: ['Swimsuit','Towel','Swim diaper if needed','Any medical notes for the instructor']
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
    bring: ['Comfortable clothes','Non-slip socks or soft shoes','Water bottle','Preferred sensory items']
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
    bring: ['Packed lunch','Water bottle','Sunscreen','Athletic shoes','Change of clothes']
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
    bring: ['Packed lunch','Water bottle','A notebook','Enthusiasm for tech!']
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
    bring: ['Clothes that can get painty','Packed lunch for after','Sketchbook if you have one']
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
    bring: ['Athletic shoes (cleats optional)','Packed lunch','Water bottle','Sunscreen']
  },

  'yb-ice-skating': {
    id: 'yb-ice-skating', emoji: '⛸️', emoji2: '❄️', emoji3: '🏒',
    gFrom: '#DBEAFE', gTo: '#93C5FD',
    title: 'Public Ice Skating at Yerba Buena', provider: 'Yerba Buena Ice Skating Center',
    providerEmoji: '⛸️', providerDesc: 'San Francisco\'s year-round indoor ice rink · Public skating sessions daily · Skate rentals available',
    cat: 'Sports · Outdoors', age: 'All ages', price: '$10', priceUnit: '/ child',
    duration: '90 min session', neighborhood: 'SoMa, SF', rating: '4.7', reviewCount: 0, bookings: '',
    schedule: 'Daily (check schedule online)', featured: true, special: false,
    slots: ['Morning session 10am','Afternoon session 1pm','Evening session 5pm'], fullSlot: -1,
    desc: [
      'Lace up and glide at San Francisco\'s only year-round indoor ice rink. Yerba Buena Ice Skating Center offers daily public skating sessions for all skill levels — from first-timers wobbling along the wall to kids who\'ve been skating for years.',
      'Skate rentals are available on-site. The rink is compact and kid-friendly, right in the heart of SoMa at 750 Folsom Street. Helmets recommended for young skaters.'
    ],
    included: ['Ice time during session','Access to viewing area'],
    bring: ['Warm socks','Layers (it\'s cold inside)','Helmet for young kids (recommended)']
  },

  'yb-bowling': {
    id: 'yb-bowling', emoji: '🎳', emoji2: '🏆', emoji3: '⭐',
    gFrom: '#FEF3C7', gTo: '#FDE68A',
    title: 'Bowling at Yerba Buena', provider: 'Yerba Buena Bowling Center',
    providerEmoji: '🎳', providerDesc: 'Family bowling lanes in the heart of SoMa · Open play and lane reservations · Bumper lanes for little ones',
    cat: 'Sports', age: 'All ages', price: '$6', priceUnit: '/ game',
    duration: 'Open play', neighborhood: 'SoMa, SF', rating: '4.6', reviewCount: 0, bookings: '',
    schedule: 'Daily (open play + reservations)', featured: false, special: false,
    slots: ['Open play — walk in','Reserve a lane online'], fullSlot: -1,
    desc: [
      'Family bowling in the heart of SoMa. Yerba Buena\'s bowling center has 12 lanes including bumper options for little ones, making it a go-to for birthday parties and rainy-day outings alike.',
      'Shoe rental available. Walk-in open play or reserve a lane in advance. Located at 750 Folsom St alongside the ice skating rink.'
    ],
    included: ['Lane time','Bumper rail setup for young kids on request'],
    bring: ['Socks (required for rental shoes)','Good vibes']
  },

  'yb-hockey': {
    id: 'yb-hockey', emoji: '🏒', emoji2: '🥅', emoji3: '❄️',
    gFrom: '#F0FDF4', gTo: '#86EFAC',
    title: 'Youth Ice Hockey — SF Sabercats', provider: 'SF Sabercats',
    providerEmoji: '🏒', providerDesc: 'San Francisco\'s youth ice hockey program · Ages 3–17 · Learn-to-skate through competitive travel teams',
    cat: 'Sports', age: 'Ages 3–17', price: '$675', priceUnit: '/ season',
    duration: 'Weekly practice + games', neighborhood: 'SoMa, SF', rating: '4.8', reviewCount: 0, bookings: '',
    schedule: 'Fall & Spring seasons', featured: false, special: false,
    slots: ['Fall season registration','Spring season registration'], fullSlot: -1,
    desc: [
      'SF\'s very own youth ice hockey club. The SF Sabercats serve players aged 3–17 across all skill levels — from beginner learn-to-skate through competitive travel teams. Practices and games are held at Yerba Buena Ice Skating Center.',
      'USA Hockey affiliated. Full equipment loaner program available for beginners so you don\'t need to invest in gear before trying the sport.'
    ],
    included: ['Structured practice sessions','Game schedule','Coaching from USA Hockey-certified staff','Equipment loaner for new players'],
    bring: ['Mouth guard','Willingness to fall (and get back up)']
  },

  'creativity-museum': {
    id: 'creativity-museum', emoji: '🎨', emoji2: '🤖', emoji3: '🦋',
    gFrom: '#FDF4FF', gTo: '#E879F9',
    title: 'Children\'s Creativity Museum', provider: 'Children\'s Creativity Museum',
    providerEmoji: '🎨', providerDesc: 'Award-winning hands-on museum for kids 2–12 · Art, technology, and storytelling exhibits · 221 4th St, SoMa',
    cat: 'Arts · Science', age: 'Ages 2–12', price: '$20', priceUnit: '/ person',
    duration: 'Self-paced visit (2–3 hrs)', neighborhood: 'SoMa, SF', rating: '4.7', reviewCount: 0, bookings: '',
    schedule: 'Tue–Sun 10am–5pm', featured: true, special: false,
    slots: ['Morning visit','Afternoon visit'], fullSlot: -1,
    desc: [
      'Where kids make things. The Children\'s Creativity Museum (formerly Zeum) is a hands-on museum at 221 4th Street in SoMa — steps from Yerba Buena Gardens — where kids 2–12 create animation, music videos, art, and more.',
      'Exhibits blend technology and traditional art-making. Kids can animate their own clay figures, record a music video on a real sound stage, or build in the engineering zone. Staff facilitators guide activities throughout the day.'
    ],
    included: ['Full museum access','Facilitated creative activity stations','Carousel ride (included with admission)'],
    bring: ['Curiosity','Camera — kids love showing what they made']
  },

  'randall-museum': {
    id: 'randall-museum', emoji: '🔬', emoji2: '🦎', emoji3: '🌿',
    gFrom: '#F0FDF4', gTo: '#6EE7B7',
    title: 'Drop-In Science Saturdays', provider: 'Randall Museum',
    providerEmoji: '🔬', providerDesc: 'Free neighborhood science museum in Corona Heights · Live animals, science labs, woodshop · 199 Museum Way',
    cat: 'Science', age: 'All ages', price: 'Free', priceUnit: '',
    duration: '10am–5pm Saturdays', neighborhood: 'Corona Heights, SF', rating: '4.8', reviewCount: 0, bookings: '',
    schedule: 'Saturdays 10am–5pm (drop-in)', featured: false, special: false,
    slots: ['Drop-in — no reservation needed'], fullSlot: -1,
    desc: [
      'A hidden gem at the top of Corona Heights. The Randall Museum is SF\'s free neighborhood science museum with live animals (owls, snakes, birds of prey), hands-on science labs, a working woodshop for kids, and nature exhibits.',
      'Drop-In Science Saturdays are free and open to all ages — no registration required. Activities rotate weekly. The museum sits inside Corona Heights Park with a short hike to stunning city views right outside the door.'
    ],
    included: ['Free admission','Drop-in activity stations','Live animal encounters','Woodshop access (Saturdays)'],
    bring: ['Good walking shoes if you plan to hike Corona Heights afterward','Layers — it\'s often foggy up there']
  },

  'acrosports': {
    id: 'acrosports', emoji: '🤸', emoji2: '🎪', emoji3: '⭐',
    gFrom: '#FFF7ED', gTo: '#FED7AA',
    title: 'Gymnastics & Circus Arts', provider: 'AcroSports',
    providerEmoji: '🤸', providerDesc: 'Gymnastics, tumbling, and circus arts for kids 18 months and up · 639 Frederick St, Inner Sunset · SF institution since 1986',
    cat: 'Movement · Sports', age: 'Ages 18 mo–teen', price: '$25', priceUnit: '/ drop-in',
    duration: '60–75 min class', neighborhood: 'Inner Sunset, SF', rating: '4.9', reviewCount: 0, bookings: '',
    schedule: 'Year-round classes (check schedule)', featured: false, special: false,
    slots: ['Parent & Tot (18mo–3yr)','Preschool (3–5yr)','Kids gymnastics (5–12yr)','Teen tumbling'], fullSlot: -1,
    desc: [
      'Flips, tumbles, and circus magic in the Inner Sunset. AcroSports has been SF\'s beloved gymnastics and circus arts school since 1986. Classes run from parent-and-tot (18 months) through teen levels — all in a warm, non-competitive environment.',
      'Specialties include gymnastics, tumbling, aerial arts, acrobatics, and contortion basics. Drop-in classes available for most levels. Located at 639 Frederick Street, right near Golden Gate Park.'
    ],
    included: ['All equipment provided','Foam pit access','Trained circus arts instructors'],
    bring: ['Stretchy clothes','Bare feet or grip socks','Water bottle']
  },

  'cal-academy': {
    id: 'cal-academy', emoji: '🦋', emoji2: '🔭', emoji3: '🐠',
    gFrom: '#F0FDF4', gTo: '#4ADE80',
    title: 'California Academy of Sciences', provider: 'California Academy of Sciences',
    providerEmoji: '🔬', providerDesc: 'World-class natural history museum in Golden Gate Park · Living rainforest, planetarium, 4-story aquarium, and NightLife · Golden Gate Park, Inner Sunset',
    cat: 'Science', age: 'All ages', price: '$39', priceUnit: '/ child',
    duration: 'Self-paced visit (3–4 hrs)', neighborhood: 'Golden Gate Park, SF', rating: '4.8', reviewCount: 0, bookings: '',
    schedule: 'Daily 9:30am–5pm (Mon–Sat), 11am–5pm Sun', featured: true, special: false,
    slots: ['Morning visit','Afternoon visit'], fullSlot: -1,
    desc: [
      'One living roof, four floors of wonder. The California Academy of Sciences in Golden Gate Park houses a living rainforest dome, a 4-story Philippine Coral Reef aquarium, and a digital planetarium — all under a wildflower rooftop.',
      'Built for kids of all ages. The Osher Rainforest lets you walk inside a tropical ecosystem with free-flying butterflies and birds. Touch pools, live penguin habitats, and rotating science exhibits keep repeat visits fresh. EBT cardholders pay just $5.'
    ],
    included: ['Rainforest access','Aquarium','Planetarium show (included with admission)','Naturalist-led programs throughout the day'],
    bring: ['Timed entry tickets (book online to save time)','Layers — the rainforest is warm, the rest of the museum is cool']
  },

  'aquarium-bay': {
    id: 'aquarium-bay', emoji: '🦈', emoji2: '🐙', emoji3: '🌊',
    gFrom: '#DBEAFE', gTo: '#38BDF8',
    title: 'Aquarium of the Bay', provider: 'Aquarium of the Bay',
    providerEmoji: '🦈', providerDesc: 'Walk-through shark and bat ray tunnels on Pier 39 · Touch pools with stingrays and sea stars · Live river otters · Fisherman\'s Wharf',
    cat: 'Science', age: 'All ages', price: '$20', priceUnit: '/ child',
    duration: 'Self-paced visit (1.5–2 hrs)', neighborhood: 'Fisherman\'s Wharf, SF', rating: '4.3', reviewCount: 0, bookings: '',
    schedule: 'Daily 10am–8pm', featured: false, special: false,
    slots: ['Morning visit','Afternoon visit'], fullSlot: -1,
    desc: [
      'Walk through the Bay, literally. Aquarium of the Bay\'s walk-through glass tunnels put you face-to-face with sharks, bat rays, and thousands of fish that call San Francisco Bay home.',
      'Touch pools let kids get hands-on with stingrays, anemones, and sea stars. Four live river otters are a family favorite. The nonprofit supports Bay ecosystem research and runs free K–12 field trip programs for Bay Area schools.'
    ],
    included: ['Full aquarium access','Touch pool stations','Otter exhibit'],
    bring: ['Book online for savings','Camera — the tunnel photos are worth it']
  },

  'sf-zoo': {
    id: 'sf-zoo', emoji: '🦁', emoji2: '🦒', emoji3: '🐧',
    gFrom: '#FEF9C3', gTo: '#FDE047',
    title: 'San Francisco Zoo & Gardens', provider: 'San Francisco Zoo & Gardens',
    providerEmoji: '🦁', providerDesc: 'SF\'s beloved zoo on Ocean Beach · Giraffes, penguins, lemurs, and a vintage carousel · Zoo Camp available in summer · Sloat Blvd at 45th Ave',
    cat: 'Outdoors · Science', age: 'All ages', price: '$20', priceUnit: '/ child',
    duration: 'Self-paced visit (3–4 hrs)', neighborhood: 'Sunset / Ocean Beach, SF', rating: '4.5', reviewCount: 0, bookings: '',
    schedule: 'Daily 10am–5pm', featured: true, special: false,
    slots: ['All-day open visit'], fullSlot: -1,
    desc: [
      'A full day at the ocean\'s edge. SF Zoo is home to 2,000+ animals including African giraffes you can feed, a penguin colony, lemur forest, and a restored children\'s playground. The antique carousel has been spinning since 1921.',
      'Summer Zoo Camp (K–5th grade) is one of SF\'s most sought-after programs, selling out months in advance. Daily zookeeper talks, animal feedings, and conservation programs are included with admission. SF residents get free monthly admission days.'
    ],
    included: ['Full zoo access','Daily zookeeper talks','Children\'s playground','Carousel (additional fee)'],
    bring: ['Layers — Ocean Beach is often foggy','Packed lunch or use the café','Book Zoo Camp early — it sells out']
  },

  'mission-cliffs': {
    id: 'mission-cliffs', emoji: '🧗', emoji2: '🪨', emoji3: '💪',
    gFrom: '#FEF3C7', gTo: '#FB923C',
    title: 'Youth Climbing at Mission Cliffs', provider: 'Touchstone Climbing — Mission Cliffs',
    providerEmoji: '🧗', providerDesc: 'SF\'s original climbing gym · 23,000 sq ft · 50-foot lead wall · Youth camps and family climbing · 2295 Harrison St, Mission District',
    cat: 'Sports · Movement', age: 'Ages 7–12 (camps)', price: '$25', priceUnit: '/ day pass',
    duration: 'Open gym or structured camp', neighborhood: 'Mission District, SF', rating: '4.6', reviewCount: 0, bookings: '',
    schedule: 'Year-round — weekday & weekend camps', featured: false, special: false,
    slots: ['Summer day camp','School break camp','Family open climb'], fullSlot: -1,
    desc: [
      'SF\'s most storied climbing gym. Mission Cliffs has been the go-to for SF climbers since 1994 — 23,000 sq ft of routes from beginner to advanced, including a 50-foot lead wall and 2,000 sq ft bouldering area.',
      'Youth camps run all summer and during school breaks for ages 7–12. No experience needed — instructors start kids from scratch. Touchstone\'s Access to Climbing (ATC) program provides free or subsidized access for families on government assistance.'
    ],
    included: ['Gear rental (harness + shoes)','Belayer supervision','Youth camp: all instruction and snacks'],
    bring: ['Athletic clothes','Water bottle','Socks']
  },

  'sailing-ti': {
    id: 'sailing-ti', emoji: '⛵', emoji2: '🌊', emoji3: '🏆',
    gFrom: '#DBEAFE', gTo: '#60A5FA',
    title: 'Youth Sailing — SF Bay', provider: 'Treasure Island Sailing Center',
    providerEmoji: '⛵', providerDesc: 'Nonprofit youth sailing on San Francisco Bay · Sliding-scale tuition (free for low-income families) · Ages 6–17 · Treasure Island',
    cat: 'Sports · Outdoors', age: 'Ages 6–17', price: 'Free–$', priceUnit: '(sliding scale)',
    duration: 'Multi-week sessions', neighborhood: 'Treasure Island / SF Bay', rating: '4.8', reviewCount: 0, bookings: '',
    schedule: 'Spring & Summer seasons', featured: false, special: false,
    slots: ['Spring session (April–May)','Summer session (June–August)'], fullSlot: -1,
    desc: [
      'Learn to sail on one of the world\'s great sailing bays. Treasure Island Sailing Center (TISC) is a nonprofit that teaches kids 6–17 to sail with sweeping views of the Bay Bridge and SF skyline.',
      'Sliding-scale pricing means free access for households earning under $40K/year and 50% off under $70K. The curriculum blends seamanship with Bay ecology and STEM. Teen tracks lead to racing and junior instructor roles. A truly unique SF experience.'
    ],
    included: ['All sailing instruction','Sailing gear and lifejackets','Bay ecology curriculum','Teen leadership track'],
    bring: ['Non-marking shoes (required on boats)','Layers','Sunscreen']
  },

  'surf-camp': {
    id: 'surf-camp', emoji: '🏄', emoji2: '🌊', emoji3: '☀️',
    gFrom: '#ECFEFF', gTo: '#67E8F9',
    title: 'Kids Surf Camp', provider: 'Adventure Out',
    providerEmoji: '🏄', providerDesc: 'California\'s premiere beginner surf school · 4:1 student-to-instructor ratio · All gear included · Linda Mar Beach, Pacifica (15 min from SF)',
    cat: 'Sports · Outdoors', age: 'Ages 12 & under', price: 'Varies', priceUnit: '(all gear included)',
    duration: '2.5 hrs / day · 3-day camp', neighborhood: 'Pacifica (near SF)', rating: '4.9', reviewCount: 0, bookings: '',
    schedule: 'Summer (June–August)', featured: false, special: false,
    slots: ['3-day Billabong Kids Camp','Private lessons available year-round'], fullSlot: -1,
    desc: [
      'Surf the Bay Area\'s best beginner beach, just 15 minutes from SF. Adventure Out runs kids surf camp at Linda Mar Beach in Pacifica — the safest, most consistent beginner surf break in the area.',
      'Rated 4.9/5 stars. Maximum 4:1 student-to-instructor ratio. All equipment (board + wetsuit) included. Lifeguard-certified coaches. Kids go from first-timers to riding green waves in 3 days. Summer camps sell out fast.'
    ],
    included: ['Surfboard and wetsuit rental','Certified surf instructors','Beach safety briefing'],
    bring: ['Swimsuit to wear under wetsuit','Towel','Sunscreen','Snack']
  },

  'bats-improv': {
    id: 'bats-improv', emoji: '🎭', emoji2: '😂', emoji3: '🎤',
    gFrom: '#FDF4FF', gTo: '#C084FC',
    title: 'Youth Improv Comedy Classes', provider: 'BATS Improv',
    providerEmoji: '🎭', providerDesc: 'Bay Area Theater Sports — SF\'s premier improv theater for 40+ years · Youth programs K–Grade 12 · Fort Mason Center, Marina District',
    cat: 'Theater · Arts', age: 'Ages K–Grade 12', price: '$239', priceUnit: '/ session (multi-week)',
    duration: 'Multi-week session · Showcase performance', neighborhood: 'Marina / Fort Mason, SF', rating: '4.6', reviewCount: 0, bookings: '',
    schedule: 'Fall, Spring & Summer sessions', featured: false, special: false,
    slots: ['Kids (K–Grade 2)','Youth (Grades 3–8)','Teens (Grades 9–12)'], fullSlot: -1,
    desc: [
      'Yes, and — kids can do this. BATS Improv has been SF\'s home for improv comedy since 1986. Their youth classes build confidence, listening, and public speaking through games, scenes, and play.',
      'Each multi-week session ends in a showcase performance at Fort Mason. Three age tracks — kids (K–2), youth (3–8), and teens (9–12). Rated 4.5+ on Yelp with 200+ reviews. Widely recommended on SF parent forums for helping shy kids come out of their shells.'
    ],
    included: ['All instruction','Session showcase performance','Fort Mason venue access'],
    bring: ['Comfortable clothes to move in','Open mind','Willingness to say "yes, and"']
  },

  'dance-mission': {
    id: 'dance-mission', emoji: '💃', emoji2: '🥁', emoji3: '🌍',
    gFrom: '#FFF1F2', gTo: '#FDA4AF',
    title: 'Youth Dance — Hip Hop, Salsa & More', provider: 'Dance Mission Theater',
    providerEmoji: '💃', providerDesc: 'SF\'s multicultural youth dance program · 50+ weekly classes · Hip hop, salsa, ballet, Bhangra, Taiko, samba · The Mission',
    cat: 'Movement · Arts', age: 'Ages 2–18', price: '$310', priceUnit: '/ semester',
    duration: 'Weekly class (semester-based)', neighborhood: 'The Mission, SF', rating: '4.7', reviewCount: 0, bookings: '',
    schedule: 'Year-round (Fall, Spring, Summer)', featured: false, special: false,
    slots: ['Fall semester','Spring semester','Summer intensive'], fullSlot: -1,
    desc: [
      '50+ classes, 10+ dance styles. Dance Mission Theater is SF\'s most beloved multicultural youth dance program, serving 400+ kids with classes in hip hop, salsa, ballet, Taiko drumming, Bhangra, samba, Afro-Haitian, vogue, and more.',
      'Located at 3316 24th St in the Mission. Non-competitive, socially conscious environment with scholarship and financial aid available. Bay Area Parent "Best of" award winner. Students perform in real productions throughout the year.'
    ],
    included: ['Weekly class instruction','Access to dance studios','Performance opportunities throughout the year'],
    bring: ['Dance shoes or bare feet depending on style','Water bottle','Comfortable clothing']
  },

  'odc-dance': {
    id: 'odc-dance', emoji: '🩰', emoji2: '🎶', emoji3: '⭐',
    gFrom: '#FEF3C7', gTo: '#FCA5A5',
    title: 'ODC Youth & Teen Dance School', provider: 'ODC Dance',
    providerEmoji: '🩰', providerDesc: 'Gold winner Bay Area Parent 2025 Best of the Best · Contemporary, hip hop, ballet, tap, choreography · 351 Shotwell St, Mission District',
    cat: 'Movement · Arts', age: 'Ages 2–18', price: '$200', priceUnit: '/ class / semester',
    duration: 'Weekly class (semester-based)', neighborhood: 'The Mission, SF', rating: '4.8', reviewCount: 0, bookings: '',
    schedule: 'Year-round (Fall, Spring, Summer)', featured: false, special: false,
    slots: ['Young Creative (ages 2–7)','Youth (ages 8–13)','Teen (ages 14–18)','Placement class available'], fullSlot: -1,
    desc: [
      'Gold-winning dance education, straight from a nationally recognized company. ODC is one of America\'s leading contemporary dance companies — and their school at 351 Shotwell St teaches kids 2–18 in the same building where professional choreographers create work.',
      'Body-positive, performance-focused curriculum spans contemporary, hip hop, ballet, tap, and choreography. Students perform in real productions. Gold winner of Bay Area Parent 2025 "Best of the Best" reader\'s poll. A $25 placement class helps find the right fit.'
    ],
    included: ['Weekly class instruction','Studio access','Performance in seasonal showcases'],
    bring: ['Dance shoes or ballet slippers (style-dependent)','Comfortable active clothing','Water bottle']
  },

  'cooking-class': {
    id: 'cooking-class', emoji: '👨‍🍳', emoji2: '🍕', emoji3: '🥧',
    gFrom: '#FFF7ED', gTo: '#FDBA74',
    title: 'Kids Cooking Classes & Camp', provider: 'Culinary Artistas',
    providerEmoji: '👨‍🍳', providerDesc: 'Year-round kids cooking classes and weekday camps · Edible Schoolyard Project affiliated · Ghirardelli Square, Fisherman\'s Wharf',
    cat: 'Arts · Science', age: 'Ages 4–12', price: 'Varies', priceUnit: '(contact for rates)',
    duration: 'Full-day camp (9am–3pm) / Monthly classes', neighborhood: 'Fisherman\'s Wharf, SF', rating: '4.7', reviewCount: 0, bookings: '',
    schedule: 'Year-round camps + monthly classes', featured: false, special: false,
    slots: ['Weekday cooking camp','Monthly "Plate Date" family class','School break camps'], fullSlot: -1,
    desc: [
      'Cooking as a passport to the world. Culinary Artistas runs kids cooking camps and classes at Ghirardelli Square, where kids 4–12 explore global cuisines, knife skills, and kitchen science.',
      'Affiliated with the Edible Schoolyard Project. Weekday full-day camps run 9am–3pm. Monthly "Plate Date" sessions are parent-and-child drop-in classes. A top pick for school-break activities and birthday parties — right on the Waterfront.'
    ],
    included: ['All ingredients and equipment','Recipe booklet to take home','Apron'],
    bring: ['Appetite','Hair tie if long hair']
  },

  'pottery-kids': {
    id: 'pottery-kids', emoji: '🏺', emoji2: '🎨', emoji3: '✋',
    gFrom: '#FEF9C3', gTo: '#D97706',
    title: 'Kids Pottery & Ceramics', provider: 'Pottery Studio SF',
    providerEmoji: '🏺', providerDesc: 'Drop-in friendly kids pottery — no enrollment required · Wheel throwing and hand-building · Kids from age 3 welcome · Downtown SF / SoMa',
    cat: 'Arts', age: 'Ages 3+', price: '$65', priceUnit: '/ session',
    duration: '90 min class', neighborhood: 'SoMa / Downtown, SF', rating: '4.6', reviewCount: 0, bookings: '',
    schedule: 'Regular schedule — check website', featured: false, special: false,
    slots: ['Kids drop-in class','Parent & child class','Weekend sessions'], fullSlot: -1,
    desc: [
      'Hands in clay, no commitment required. Pottery Studio SF is one of the only SF studios offering drop-in kids pottery with no enrollment required — making it easy to try once before committing to a full semester.',
      'Kids from age 3 are welcome (with a parent for the youngest). Classes cover wheel throwing and hand-building. Listed on Secret San Francisco\'s "10 Excellent Pottery Studios." A popular choice for birthday party bookings.'
    ],
    included: ['Clay and glazing materials','Kiln firing (pieces ready in 2 weeks)','All tools and equipment'],
    bring: ['Clothes you don\'t mind getting muddy','Enthusiasm for getting messy']
  },

  'camp-galileo': {
    id: 'camp-galileo', emoji: '🚀', emoji2: '🔬', emoji3: '🎨',
    gFrom: '#EFF6FF', gTo: '#93C5FD',
    title: 'Camp Galileo — STEAM Summer Camp', provider: 'Galileo Learning',
    providerEmoji: '🚀', providerDesc: 'Stanford d.school-inspired STEAM camp · 20+ years · 24 Bay Area locations · K–Grade 10 · Hayes Valley & Noe Valley sites',
    cat: 'Camps · Science', age: 'Ages K–Grade 10', price: '$499', priceUnit: '/ week',
    duration: 'Full day (8:30am–3pm) · Multi-week', neighborhood: 'Hayes Valley / Noe Valley, SF', rating: '4.8', reviewCount: 0, bookings: '',
    schedule: 'Summer (June–August)', featured: false, special: false,
    slots: ['Week 1 – June 16','Week 2 – June 23','Week 3 – June 30','Week 4 – July 7','Week 5 – July 14'], fullSlot: -1,
    desc: [
      'Innovation camp built on Stanford design thinking. Camp Galileo has run STEAM-based summer camps for 20+ years, inspiring 30,000+ Bay Area kids each summer. The curriculum uses the Stanford d.school design process — kids learn to prototype, test, and iterate.',
      'SF sites in Hayes Valley and Noe Valley. Weekly themes rotate through engineering, art, science, and outdoor exploration. Multi-week discounts and early bird pricing available. One of the most recognized camp brands in Bay Area parent circles.'
    ],
    included: ['All project materials','Themed weekly curriculum','After-care available (additional fee)','Camp t-shirt'],
    bring: ['Packed lunch and snacks','Water bottle','Sunscreen','Energy']
  },

  'coder-school': {
    id: 'coder-school', emoji: '💻', emoji2: '🤖', emoji3: '🎮',
    gFrom: '#F0FDF4', gTo: '#4ADE80',
    title: 'Kids Coding & AI Classes', provider: 'theCoderSchool SF',
    providerEmoji: '💻', providerDesc: '2:1 coach-to-student ratio · Python, Scratch, game dev, AI · Year-round after-school + summer camps · 331 W Portal Ave, West Portal',
    cat: 'Science · Technology', age: 'Elementary–High School', price: '$699', priceUnit: '/ week (camp)',
    duration: 'Full-day summer camp / After-school year-round', neighborhood: 'West Portal, SF', rating: '4.8', reviewCount: 0, bookings: '',
    schedule: 'Year-round (after-school + summer camps)', featured: false, special: false,
    slots: ['Summer coding camp (June–August)','Fall after-school program','Spring after-school program'], fullSlot: -1,
    desc: [
      'Learn to code with an almost 1-on-1 ratio. theCoderSchool keeps classes to a maximum 2:1 student-to-coach ratio — far more personalized than large-group coding camps. Teaches Python, Scratch, JavaScript, game development, and increasingly AI.',
      'Located at 331 W Portal Ave in the family-dense West Portal neighborhood. Year-round after-school program (not just summer), which means kids build real coding skills over months, not just a week. Strong parent reviews for patient, encouraging coaches.'
    ],
    included: ['All software and accounts set up','Project-based curriculum','Code portfolio by end of program'],
    bring: ['Laptop (or use studio computers)','Curiosity about how things work']
  }

};

// Capacity limits, organizer contacts, provider URLs, and direct booking URLs
const ACTIVITY_CAPACITY = {
  'soccer':         { capacity: 16, organizerEmail: 'info@soccerstars.com',             providerUrl: 'https://www.soccerstars.com/ca/sanfrancisco/',         bookingUrl: 'https://www.soccerstars.com/ca/sanfrancisco/camps-and-classes/' },
  'nature-walk':    { capacity: 24, organizerEmail: 'programs@sfrecpark.org',           providerUrl: 'https://sfrecpark.org',                                bookingUrl: 'https://sfrecpark.org/1729/Early-Childhood-Programs' },
  'science-lab':    { capacity: 8,  organizerEmail: 'education@exploratorium.edu',      providerUrl: 'https://www.exploratorium.edu',                        bookingUrl: 'https://www.exploratorium.edu/tickets' },
  'arts-crafts':    { capacity: 12, organizerEmail: 'hello@makerstudiokidz.com',        providerUrl: 'https://www.makerstudiokidz.com',                      bookingUrl: 'https://www.makerstudiokidz.com/classes' },
  'swim-tots':      { capacity: 6,  organizerEmail: 'aquatics@sfrecpark.org',           providerUrl: 'https://sfrecpark.org/aquatics',                       bookingUrl: 'https://sfrecpark.org/aquatics' },
  'music-babies':   { capacity: 10, organizerEmail: 'info@musictogethersf.com',         providerUrl: 'https://www.musictogethersf.com',                      bookingUrl: 'https://www.musictogethersf.com/classes.aspx' },
  'sensory-play':   { capacity: 8,  organizerEmail: 'earlychildhood@sfrecpark.org',     providerUrl: 'https://sfrecpark.org/1729/Early-Childhood-Programs',  bookingUrl: 'https://sfrecpark.org/1729/Early-Childhood-Programs' },
  'theater':        { capacity: 14, organizerEmail: 'info@ypt.org',                     providerUrl: 'https://www.ypt.org',                                  bookingUrl: 'https://www.ypt.org/classes/' },
  'gym':            { capacity: 20, organizerEmail: 'registration@sfrecpark.org',       providerUrl: 'https://sfrecpark.org',                                bookingUrl: 'https://sfrecpark.org/programs/early-childhood/' },
  'art-inclusive':  { capacity: 8,  organizerEmail: 'education@creativityexplored.org', providerUrl: 'https://www.creativityexplored.org',                   bookingUrl: 'https://www.creativityexplored.org' },
  'adaptive-swim':  { capacity: 4,  organizerEmail: 'info@prrcsf.org',                  providerUrl: 'https://www.prrcsf.org/therapeutic-swim',              bookingUrl: 'https://www.prrcsf.org/swim-lessons' },
  'sensory-dance':  { capacity: 10, organizerEmail: 'education@sfballet.org',           providerUrl: 'https://www.sfballet.org/community/sensory-friendly-adaptive-programs/', bookingUrl: 'https://www.sfballet.org/community/sensory-friendly-adaptive-programs/' },
  'gg-camp':        { capacity: 20, organizerEmail: 'camps@sfrecpark.org',              providerUrl: 'https://sfrecpark.org',                                bookingUrl: 'https://sfrecpark.org/camps' },
  'robotics-camp':  { capacity: 8,  organizerEmail: 'sf@idtech.com',                    providerUrl: 'https://www.idtech.com',                               bookingUrl: 'https://www.idtech.com/locations/california-summer-camps/san-francisco-state-university' },
  'art-camp':       { capacity: 15, organizerEmail: 'education@sfmoma.org',             providerUrl: 'https://www.sfmoma.org/learn',                         bookingUrl: 'https://www.sfmoma.org/for-families/' },
  'sport-camp':        { capacity: 20, organizerEmail: 'info@soccerstars.com',          providerUrl: 'https://www.soccerstars.com/ca/sanfrancisco/',             bookingUrl: 'https://www.soccerstars.com/ca/sanfrancisco/camps-and-classes/' },
  'yb-ice-skating':   { capacity: 200, organizerEmail: 'info@skatebowl.com',            providerUrl: 'https://www.skatebowl.com/ice-skating/',                   bookingUrl: 'https://www.skatebowl.com/ice-skating/public-skating/' },
  'yb-bowling':       { capacity: 60,  organizerEmail: 'info@skatebowl.com',            providerUrl: 'https://www.skatebowl.com/bowling/',                       bookingUrl: 'https://www.skatebowl.com/bowling/' },
  'yb-hockey':        { capacity: 25,  organizerEmail: 'info@sfsabercats.org',          providerUrl: 'https://www.sfsabercats.org',                              bookingUrl: 'https://www.sfsabercats.org/program/' },
  'creativity-museum':{ capacity: 150, organizerEmail: 'info@creativity.org',           providerUrl: 'https://www.creativity.org',                              bookingUrl: 'https://www.creativity.org/plan-your-visit/' },
  'randall-museum':   { capacity: 200, organizerEmail: 'info@randallmuseum.org',        providerUrl: 'https://www.randallmuseum.org',                            bookingUrl: 'https://www.randallmuseum.org/drop-in-science/' },
  'acrosports':        { capacity: 20,  organizerEmail: 'info@acrosports.org',          providerUrl: 'https://www.acrosports.org',                              bookingUrl: 'https://www.acrosports.org/classes/' },
  'cal-academy':       { capacity: 500, organizerEmail: 'tickets@calacademy.org',       providerUrl: 'https://www.calacademy.org',                              bookingUrl: 'https://www.calacademy.org/buy-tickets' },
  'aquarium-bay':      { capacity: 300, organizerEmail: 'info@aquariumofthebay.org',    providerUrl: 'https://www.aquariumofthebay.org',                        bookingUrl: 'https://www.aquariumofthebay.org/tickets/' },
  'sf-zoo':            { capacity: 1000,organizerEmail: 'tickets@sfzoo.org',            providerUrl: 'https://www.sfzoo.org',                                   bookingUrl: 'https://www.sfzoo.org/zoo-camp/' },
  'mission-cliffs':    { capacity: 30,  organizerEmail: 'missioncliffs@touchstoneclimbing.com', providerUrl: 'https://touchstoneclimbing.com/mission-cliffs/', bookingUrl: 'https://touchstoneclimbing.com/mission-cliffs/youth-camps/' },
  'sailing-ti':        { capacity: 16,  organizerEmail: 'youth@tisailing.org',          providerUrl: 'https://www.tisailing.org',                               bookingUrl: 'https://www.tisailing.org/youth-programs/' },
  'surf-camp':         { capacity: 12,  organizerEmail: 'info@adventureout.com',        providerUrl: 'https://www.adventureout.com/surf/',                      bookingUrl: 'https://www.adventureout.com/surf/kids-billabong-3-day-surf-camp/' },
  'bats-improv':       { capacity: 15,  organizerEmail: 'school@improv.org',            providerUrl: 'https://www.improv.org',                                  bookingUrl: 'https://www.improv.org/school/' },
  'dance-mission':     { capacity: 20,  organizerEmail: 'info@dancemissiontheater.org', providerUrl: 'https://dancemissiontheater.org',                         bookingUrl: 'https://dancemissiontheater.org/youth-program/' },
  'odc-dance':         { capacity: 18,  organizerEmail: 'school@odc.dance',             providerUrl: 'https://odc.dance',                                       bookingUrl: 'https://odc.dance/youth-and-teen/' },
  'cooking-class':     { capacity: 12,  organizerEmail: 'hello@culinaryartistas.com',   providerUrl: 'https://www.culinaryartistas.com',                        bookingUrl: 'https://www.culinaryartistas.com/kids/camps' },
  'pottery-kids':      { capacity: 10,  organizerEmail: 'info@pottery-sf.com',          providerUrl: 'https://pottery-sf.com',                                  bookingUrl: 'https://pottery-sf.com/kids-pottery-classes-sf/' },
  'camp-galileo':      { capacity: 80,  organizerEmail: 'info@galileo-camps.com',       providerUrl: 'https://galileo-camps.com',                               bookingUrl: 'https://galileo-camps.com/our-camps/bay-area-locations/' },
  'coder-school':      { capacity: 8,   organizerEmail: 'sfwestportal@thecoderschool.com', providerUrl: 'https://www.thecoderschool.com/locations/sf-westportal/', bookingUrl: 'https://www.thecoderschool.com/locations/sf-westportal/camps/' }
};

// Merge capacity + organizer into ACTIVITIES_DATA at load time
Object.keys(ACTIVITY_CAPACITY).forEach(id => {
  if (ACTIVITIES_DATA[id]) Object.assign(ACTIVITIES_DATA[id], ACTIVITY_CAPACITY[id]);
});
