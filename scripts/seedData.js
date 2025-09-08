import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'p6ro2n3d',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
  token: 'skNCx8hyjpHdJA0VhetT1tq3kslzVm7HHip7LvzpKzrla4ibwJfZUVsnsse3rrgRuce7koLOtfuGeZ7RTwSdjvHdtCu1tRHPEVI7De7eHFB1j6D6E24xHKWQqXtpoPabJbRdifluUALTeXKGj5lPc4y5IntAg72pa4DlaJuon2aVnQFJx3WA'
})

// Sample contestant data
const contestants = [
  {
    _type: 'contestant',
    name: 'Abhishek Kumar',
    age: 28,
    profession: 'Actor & Model',
    hometown: 'Hyderabad',
    bio: 'Popular television actor known for his roles in Telugu serials. Strong personality and natural leadership qualities make him a favorite among viewers.',
    status: 'active',
    entryDate: '2025-09-01',
    votes: 1250000,
    socialMedia: {
      instagram: '@abhishek_kumar_official',
      twitter: '@abhishekk_actor'
    },
    image: {
      _type: 'image',
      asset: {
        _type: 'reference',
        _ref: 'image-placeholder-1'
      }
    }
  },
  {
    _type: 'contestant',
    name: 'Priyanka Sharma',
    age: 26,
    profession: 'Actress',
    hometown: 'Vijayawada',
    bio: 'Talented actress with a strong fan following. Known for her emotional intelligence and strategic gameplay in reality shows.',
    status: 'active',
    entryDate: '2025-09-01',
    votes: 980000,
    socialMedia: {
      instagram: '@priyanka_sharma_actress',
      twitter: '@priyankasharma'
    },
    image: {
      _type: 'image',
      asset: {
        _type: 'reference',
        _ref: 'image-placeholder-2'
      }
    }
  },
  {
    _type: 'contestant',
    name: 'Ravi Teja',
    age: 32,
    profession: 'Comedian',
    hometown: 'Vizag',
    bio: 'Stand-up comedian and content creator. His humor and wit keep the house entertained, though sometimes controversial.',
    status: 'active',
    entryDate: '2025-09-01',
    votes: 720000,
    socialMedia: {
      instagram: '@ravi_teja_comedy',
      twitter: '@raviteja_comic'
    },
    image: {
      _type: 'image',
      asset: {
        _type: 'reference',
        _ref: 'image-placeholder-3'
      }
    }
  },
  {
    _type: 'contestant',
    name: 'Sneha Reddy',
    age: 24,
    profession: 'Influencer',
    hometown: 'Warangal',
    bio: 'Social media influencer and fashion blogger. Young and energetic, but facing nomination challenges.',
    status: 'active',
    entryDate: '2025-09-01',
    votes: 450000,
    socialMedia: {
      instagram: '@sneha_reddy_official',
      twitter: '@snehareddy24'
    },
    image: {
      _type: 'image',
      asset: {
        _type: 'reference',
        _ref: 'image-placeholder-4'
      }
    }
  },
  {
    _type: 'contestant',
    name: 'Mahesh Babu',
    age: 35,
    profession: 'Singer',
    hometown: 'Tirupati',
    bio: 'Playback singer and music composer. Known for his melodious voice but struggling with interpersonal relationships in the house.',
    status: 'active',
    entryDate: '2025-09-01',
    votes: 320000,
    socialMedia: {
      instagram: '@mahesh_babu_singer',
      twitter: '@maheshbabu_music'
    },
    image: {
      _type: 'image',
      asset: {
        _type: 'reference',
        _ref: 'image-placeholder-5'
      }
    }
  },
  {
    _type: 'contestant',
    name: 'Kavitha Rao',
    age: 29,
    profession: 'Dancer',
    hometown: 'Guntur',
    bio: 'Classical and contemporary dancer. Graceful performer who was eliminated in week 2 due to lack of screen time.',
    status: 'eliminated',
    entryDate: '2025-09-01',
    eliminationDate: '2025-09-15',
    votes: 180000,
    socialMedia: {
      instagram: '@kavitha_rao_dancer',
      twitter: '@kavitha_dance'
    },
    image: {
      _type: 'image',
      asset: {
        _type: 'reference',
        _ref: 'image-placeholder-6'
      }
    }
  }
]

// Sample news articles
const newsArticles = [
  {
    _type: 'news',
    title: 'Bigg Boss Telugu 9: Massive Twist in Nomination Process Shocks Contestants',
    slug: { _type: 'slug', current: 'massive-twist-nomination-process-shocks-contestants' },
    excerpt: 'Bigg Boss introduces an unexpected nomination twist that changes the entire game dynamics, leaving contestants stunned.',
    content: [
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'In a shocking turn of events, Bigg Boss Telugu 9 introduced a massive twist in this week\'s nomination process that has left all contestants and viewers stunned. The new rule allows the audience to directly nominate contestants through a special voting mechanism, completely changing the traditional nomination format.'
          }
        ]
      }
    ],
    publishedAt: '2025-09-07T10:30:00Z',
    author: 'Entertainment Desk',
    category: 'Breaking News',
    featured: true,
    tags: ['nominations', 'twist', 'voting'],
    image: {
      _type: 'image',
      asset: {
        _type: 'reference',
        _ref: 'image-news-1'
      }
    }
  },
  {
    _type: 'news',
    title: 'Luxury Budget Task Creates Major Drama: Alliances Shift in Bigg Boss House',
    slug: { _type: 'slug', current: 'luxury-budget-task-creates-major-drama-alliances-shift' },
    excerpt: 'The latest luxury budget task has created unprecedented drama in the house with major alliance shifts.',
    content: [
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'This week\'s luxury budget task has proven to be a game-changer in the Bigg Boss Telugu 9 house. The task, which required contestants to work in teams, has led to major conflicts and unexpected alliance formations.'
          }
        ]
      }
    ],
    publishedAt: '2025-09-06T15:45:00Z',
    author: 'BB Correspondent',
    category: 'House Updates',
    featured: false,
    tags: ['task', 'drama', 'alliances'],
    image: {
      _type: 'image',
      asset: {
        _type: 'reference',
        _ref: 'image-news-2'
      }
    }
  },
  {
    _type: 'news',
    title: 'New Captain Announced: Surprising Results Leave Everyone Speechless',
    slug: { _type: 'slug', current: 'new-captain-announced-surprising-results' },
    excerpt: 'The captaincy task results have surprised everyone as an unexpected contestant takes the leadership role.',
    content: [
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'In an unexpected turn of events, the captaincy task for this week has concluded with surprising results. The new captain\'s victory has changed the power dynamics in the house completely.'
          }
        ]
      }
    ],
    publishedAt: '2025-09-05T18:20:00Z',
    author: 'Reality Show Expert',
    category: 'Captaincy',
    featured: true,
    tags: ['captain', 'task', 'leadership'],
    image: {
      _type: 'image',
      asset: {
        _type: 'reference',
        _ref: 'image-news-3'
      }
    }
  }
]

// Sample live updates
const liveUpdates = [
  {
    _type: 'liveUpdate',
    title: 'Kitchen Drama Escalates Between Contestants',
    description: 'Major heated argument between contestants over food distribution leads to house-wide tension and alliances shifting.',
    type: 'drama',
    isLive: true,
    priority: 'breaking',
    timestamp: new Date().toISOString(),
    author: 'Live Feed Team'
  },
  {
    _type: 'liveUpdate',
    title: 'Weekly Luxury Budget Task Begins',
    description: 'Bigg Boss announces an exciting team-based luxury budget task with unexpected twists and high stakes.',
    type: 'task',
    isLive: false,
    priority: 'high',
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(), // 2 hours ago
    author: 'Task Coordinator'
  },
  {
    _type: 'liveUpdate',
    title: 'New House Captain Crowned',
    description: 'After an intense captaincy task, the new house captain has been chosen with surprising results.',
    type: 'captain',
    isLive: false,
    priority: 'high',
    timestamp: new Date(Date.now() - 30 * 60 * 1000).toISOString(), // 30 minutes ago
    author: 'Captaincy Observer'
  },
  {
    _type: 'liveUpdate',
    title: 'Secret Task Successfully Completed',
    description: 'One contestant secretly completes a challenging task assigned by Bigg Boss, earning special privileges.',
    type: 'secret',
    isLive: false,
    priority: 'medium',
    timestamp: new Date(Date.now() - 4 * 60 * 60 * 1000).toISOString(), // 4 hours ago
    author: 'Secret Task Monitor'
  },
  {
    _type: 'liveUpdate',
    title: 'Unexpected Nomination Twist Announced',
    description: 'Bigg Boss announces a surprise nomination process that changes the entire game dynamics.',
    type: 'nomination',
    isLive: false,
    priority: 'high',
    timestamp: new Date(Date.now() - 6 * 60 * 60 * 1000).toISOString(), // 6 hours ago
    author: 'Nomination Team'
  }
]

async function seedData() {
  try {
    console.log('🌱 Starting to seed data...')
    
    // Create contestants
    console.log('📝 Creating contestants...')
    for (const contestant of contestants) {
      const result = await client.create(contestant)
      console.log(`✅ Created contestant: ${result.name}`)
    }
    
    // Create news articles
    console.log('📰 Creating news articles...')
    for (const article of newsArticles) {
      const result = await client.create(article)
      console.log(`✅ Created news article: ${result.title}`)
    }
    
    // Create live updates
    console.log('🔴 Creating live updates...')
    for (const update of liveUpdates) {
      const result = await client.create(update)
      console.log(`✅ Created live update: ${result.title}`)
    }
    
    console.log('🎉 Sample data seeding completed successfully!')
    console.log('')
    console.log('🚀 You can now:')
    console.log('1. Start Sanity Studio: cd bigbosstelugu-sanity && npm run dev')
    console.log('2. View your content at: http://localhost:3333')
    console.log('3. Update your Next.js components to fetch from Sanity')
    
  } catch (error) {
    console.error('❌ Error seeding data:', error)
  }
}

seedData()
