const { createClient } = require('@sanity/client')

const client = createClient({
  projectId: 'p6ro2n3d',
  dataset: 'production',
  useCdn: false,
  token: 'skNCx8hyjpHdJA0VhetT1tq3kslzVm7HHip7LvzpKzrla4ibwJfZUVsnsse3rrgRuce7koLOtfuGeZ7RTwSdjvHdtCu1tRHPEVI7De7eHFB1j6D6E24xHKWQqXtpoPabJbRdifluUALTeXKGj5lPc4y5IntAg72pa4DlaJuon2aVnQFJx3WA'
})

const contestants = [
  {
    "Name": "Thanuja Puttaswamy",
    "Slug": "thanuja-puttaswamy",
    "Profile Image": null,
    "Age": 33,
    "Profession": "Television actress",
    "Hometown": "Bengaluru, Karnataka",
    "Biography": "Known for her lead role in the popular Telugu serial Mudda Mandaaram; works in Kannada and Telugu television.",
    "Status": "Active",
    "Current Vote Count": 0,
    "Entry Date": "2025-09-07"
  },
  {
    "Name": "Flora Saini (Asha Saini)",
    "Slug": "flora-saini",
    "Profile Image": null,
    "Age": null,
    "Profession": "Film actress (Telugu, Tamil, Kannada, Hindi)",
    "Hometown": null,
    "Biography": "Seasoned actress with over 50 film credits across multiple Indian film industries.",
    "Status": "Active",
    "Current Vote Count": 0,
    "Entry Date": "2025-09-07"
  },
  {
    "Name": "Jabardasth Emmanuel",
    "Slug": "jabardasth-emmanuel",
    "Profile Image": null,
    "Age": null,
    "Profession": "Comedian (TV)",
    "Hometown": "Hyderabad, Telangana",
    "Biography": "Popular comedian from Telugu TV skit shows like Jabardasth and Patas.",
    "Status": "Active",
    "Current Vote Count": 0,
    "Entry Date": "2025-09-07"
  },
  {
    "Name": "Shrasti Verma",
    "Slug": "shrasti-verma",
    "Profile Image": null,
    "Age": null,
    "Profession": "Choreographer-turned-actress",
    "Hometown": null,
    "Biography": "Assistant choreographer who worked on major films like Rangasthalam, Pushpa, Game Changer.",
    "Status": "Active",
    "Current Vote Count": 0,
    "Entry Date": "2025-09-07"
  },
  {
    "Name": "Rithu Chowdary",
    "Slug": "rithu-chowdary",
    "Profile Image": null,
    "Age": null,
    "Profession": "Social media influencer",
    "Hometown": null,
    "Biography": "Vibrant social media influencer; made a dynamic entry into the show.",
    "Status": "Active",
    "Current Vote Count": 0,
    "Entry Date": "2025-09-07"
  },
  {
    "Name": "Bharani Shankar",
    "Slug": "bharani-shankar",
    "Profile Image": null,
    "Age": null,
    "Profession": "TV actor",
    "Hometown": null,
    "Biography": "Well-known TV actor, recognized for his roles in serials like Mahalakshmi.",
    "Status": "Active",
    "Current Vote Count": 0,
    "Entry Date": "2025-09-07"
  },
  {
    "Name": "Sanjjanaa Galrani",
    "Slug": "sanjjanaa-galrani",
    "Profile Image": null,
    "Age": null,
    "Profession": "Actress (Telugu, Kannada)",
    "Hometown": null,
    "Biography": "Actress known for bold roles in films like Bujjigadu and Dandupalya 2.",
    "Status": "Active",
    "Current Vote Count": 0,
    "Entry Date": "2025-09-07"
  },
  {
    "Name": "Ramu Rathod",
    "Slug": "ramu-rathod",
    "Profile Image": null,
    "Age": null,
    "Profession": "Folk singer",
    "Hometown": "Telangana",
    "Biography": "Folk singer famed for the viral track 'Ranu Bombayi Ki Ranu.'",
    "Status": "Active",
    "Current Vote Count": 0,
    "Entry Date": "2025-09-07"
  },
  {
    "Name": "Suman Setty",
    "Slug": "suman-setty",
    "Profile Image": null,
    "Age": null,
    "Profession": "Comedian (films)",
    "Hometown": null,
    "Biography": "Veteran comedian in Telugu and Tamil cinema, known for his comic timing.",
    "Status": "Active",
    "Current Vote Count": 0,
    "Entry Date": "2025-09-07"
  },
  {
    "Name": "Kalyan Padala",
    "Slug": "kalyan-padala",
    "Profile Image": null,
    "Age": null,
    "Profession": "Commoner (Agnipariksha contestant)",
    "Hometown": null,
    "Biography": "Known as 'Army Pawan Kalyan' from the pre-show Agnipariksha; entered via public vote.",
    "Status": "Active",
    "Current Vote Count": 0,
    "Entry Date": "2025-09-07"
  },
  {
    "Name": "Harita Harish",
    "Slug": "harita-harish",
    "Profile Image": null,
    "Age": null,
    "Profession": "Commoner (Agnipariksha contestant)",
    "Hometown": null,
    "Biography": "Commoner contestant from Agnipariksha, known as 'Mask Man Harish.'",
    "Status": "Active",
    "Current Vote Count": 0,
    "Entry Date": "2025-09-07"
  },
  {
    "Name": "Demon Pawan",
    "Slug": "demon-pawan",
    "Profile Image": null,
    "Age": null,
    "Profession": "Social media influencer (commoner)",
    "Hometown": null,
    "Biography": "Commoner selected via audience vote in Agnipariksha with a unique moniker.",
    "Status": "Active",
    "Current Vote Count": 0,
    "Entry Date": "2025-09-07"
  },
  {
    "Name": "Srija Dammu",
    "Slug": "srija-dammu",
    "Profile Image": null,
    "Age": null,
    "Profession": "Instagram influencer (commoner)",
    "Hometown": null,
    "Biography": "Jury-picked commoner from Agnipariksha; youthful influencer.",
    "Status": "Active",
    "Current Vote Count": 0,
    "Entry Date": "2025-09-07"
  },
  {
    "Name": "Priya Shetty",
    "Slug": "priya-shetty",
    "Profile Image": null,
    "Age": null,
    "Profession": "Commoner (public-vote contestant)",
    "Hometown": null,
    "Biography": "Commoner selected into the show via public voting in Agnipariksha.",
    "Status": "Active",
    "Current Vote Count": 0,
    "Entry Date": "2025-09-07"
  },
  {
    "Name": "Manish Maryada",
    "Slug": "manish-maryada",
    "Profile Image": null,
    "Age": null,
    "Profession": "Content creator / actor (commoner)",
    "Hometown": null,
    "Biography": "Content creator, actor, Forbes Asia 30 Under 30; jury pick from Agnipariksha.",
    "Status": "Active",
    "Current Vote Count": 0,
    "Entry Date": "2025-09-07"
  }
]

async function seedContestants() {
  console.log('🚀 Starting to seed contestants...')
  
  try {
    for (const contestant of contestants) {
      // Create a Sanity document for each contestant
      const sanityDoc = {
        _type: 'contestant',
        name: contestant.Name,
        slug: {
          _type: 'slug',
          current: contestant.Slug
        },
        age: contestant.Age || undefined,
        profession: contestant.Profession,
        hometown: contestant.Hometown || undefined,
        biography: contestant.Biography,
        status: contestant.Status.toLowerCase(),
        currentVoteCount: contestant["Current Vote Count"],
        entryDate: new Date(contestant["Entry Date"]).toISOString(),
        _id: `contestant-${contestant.Slug}` // Set custom ID based on slug
      }

      // Create or update the document
      const result = await client.createOrReplace(sanityDoc)
      console.log(`✅ Created/Updated contestant: ${contestant.Name}`)
    }

    console.log('🎉 All contestants have been seeded successfully!')
    
  } catch (error) {
    console.error('❌ Error seeding contestants:', error)
  }
}

// Also seed some sample news and live updates
async function seedNews() {
  console.log('📰 Seeding sample news...')
  
  const newsArticles = [
    {
      _type: 'news',
      _id: 'news-elimination-update',
      title: 'Week 1 Elimination Results - Shocking Exit Revealed',
      slug: { _type: 'slug', current: 'week-1-elimination-shocking-exit' },
      excerpt: 'The first elimination of Bigg Boss Telugu 9 has left viewers stunned as an unexpected contestant exits the house.',
      content: [
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: 'In a surprising turn of events, the first elimination of Bigg Boss Telugu 9 has concluded with an unexpected result that has left both housemates and viewers in shock.'
            }
          ]
        }
      ],
      publishedAt: new Date().toISOString(),
      category: 'elimination',
      featured: true,
      author: 'BB Telugu Team'
    },
    {
      _type: 'news',
      _id: 'news-task-announcement',
      title: 'New Luxury Budget Task Announced - Teams Divided',
      slug: { _type: 'slug', current: 'luxury-budget-task-teams-divided' },
      excerpt: 'Bigg Boss announces an exciting new luxury budget task that will test contestants teamwork and strategy.',
      content: [
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: 'The house is buzzing with excitement as Bigg Boss unveils the latest luxury budget task that promises high drama and strategic gameplay.'
            }
          ]
        }
      ],
      publishedAt: new Date(Date.now() - 86400000).toISOString(), // Yesterday
      category: 'task',
      featured: false,
      author: 'BB Telugu Team'
    }
  ]

  for (const article of newsArticles) {
    await client.createOrReplace(article)
    console.log(`✅ Created news: ${article.title}`)
  }
}

async function seedLiveUpdates() {
  console.log('📺 Seeding live updates...')
  
  const liveUpdates = [
    {
      _type: 'liveUpdate',
      _id: 'update-kitchen-drama',
      title: 'Major Kitchen Argument Erupts',
      description: 'Heated disagreement between contestants over food distribution leads to house-wide tension.',
      updateType: 'drama',
      isLive: true,
      priority: 'breaking',
      timestamp: new Date().toISOString()
    },
    {
      _type: 'liveUpdate',
      _id: 'update-task-completion',
      title: 'Weekly Task Successfully Completed',
      description: 'Contestants complete their luxury budget task with impressive teamwork and strategy.',
      updateType: 'task',
      isLive: false,
      priority: 'high',
      timestamp: new Date(Date.now() - 7200000).toISOString() // 2 hours ago
    },
    {
      _type: 'liveUpdate',
      _id: 'update-captain-selection',
      title: 'New House Captain Announced',
      description: 'After intense competition, the new house captain has been chosen for this week.',
      updateType: 'captain',
      isLive: false,
      priority: 'high',
      timestamp: new Date(Date.now() - 14400000).toISOString() // 4 hours ago
    }
  ]

  for (const update of liveUpdates) {
    await client.createOrReplace(update)
    console.log(`✅ Created live update: ${update.title}`)
  }
}

// Run all seeding functions
async function runSeed() {
  await seedContestants()
  await seedNews()
  await seedLiveUpdates()
  console.log('🌟 All sample data has been seeded!')
}

runSeed().catch(console.error)
