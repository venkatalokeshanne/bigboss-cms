#!/usr/bin/env node

/**
 * Script to add sample voting settings data to Sanity
 * Run this to populate the Sanity database with example voting configurations
 */

const { createClient } = require('@sanity/client')

// Sanity client configuration
const client = createClient({
  projectId: 'p6ro2n3d',
  dataset: 'production',
  apiVersion: '2023-10-01',
  useCdn: false,
  token: 'skNCx8hyjpHdJA0VhetT1tq3kslzVm7HHip7LvzpKzrla4ibwJfZUVsnsse3rrgRuce7koLOtfuGeZ7RTwSdjvHdtCu1tRHPEVI7De7eHFB1j6D6E24xHKWQqXtpoPabJbRdifluUALTeXKGj5lPc4y5IntAg72pa4DlaJuon2aVnQFJx3WA',
})

/**
 * Sample voting settings data
 */
const sampleVotingData = [
  {
    _type: 'votingSettings',
    title: 'Week 3 Elimination Voting',
    eliminationWeek: 'Week 3 Elimination',
    votingQuestion: 'Who should be saved from elimination this week?',
    isActive: true,
    strawpollUrl: 'https://strawpoll.com/embed/ajnE1Xj40nW',
    strawpollId: 'ajnE1Xj40nW',
    votingStatus: 'live',
    endDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString() // 7 days from now
  },
  {
    _type: 'votingSettings',
    title: 'Week 4 Elimination Voting (Future)',
    eliminationWeek: 'Week 4 Elimination',
    votingQuestion: 'Which contestant deserves to stay in the Bigg Boss house?',
    isActive: false,
    strawpollUrl: 'https://strawpoll.com/embed/example123',
    strawpollId: 'example123',
    votingStatus: 'coming-soon',
    endDate: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString() // 14 days from now
  },
  {
    _type: 'votingSettings',
    title: 'Week 2 Elimination (Closed)',
    eliminationWeek: 'Week 2 Elimination',
    votingQuestion: 'Who was your favorite contestant in Week 2?',
    isActive: false,
    strawpollUrl: 'https://strawpoll.com/embed/closed456',
    strawpollId: 'closed456',
    votingStatus: 'closed',
    endDate: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString() // 3 days ago
  }
]

/**
 * Create sample voting settings in Sanity
 */
async function createSampleVotingData() {
  console.log('🚀 Starting sample voting data creation...')
  
  try {
    // Check if voting settings already exist
    const existingSettings = await client.fetch('*[_type == "votingSettings"]')
    
    if (existingSettings.length > 0) {
      console.log(`⚠️  Found ${existingSettings.length} existing voting settings`)
      console.log('Do you want to continue and add more? (Ctrl+C to cancel)')
      
      // Wait 3 seconds before continuing
      await new Promise(resolve => setTimeout(resolve, 3000))
    }
    
    console.log('📝 Creating sample voting settings...')
    
    // Create each sample voting setting
    for (const votingData of sampleVotingData) {
      try {
        const result = await client.create(votingData)
        console.log(`✅ Created: ${votingData.title} (ID: ${result._id})`)
      } catch (error) {
        console.error(`❌ Error creating ${votingData.title}:`, error.message)
      }
    }
    
    console.log('🎉 Sample voting data creation completed!')
    
    // Fetch and display all voting settings
    const allSettings = await client.fetch(`
      *[_type == "votingSettings"] | order(_createdAt desc) {
        _id,
        title,
        eliminationWeek,
        votingQuestion,
        isActive,
        votingStatus,
        strawpollId
      }
    `)
    
    console.log('\n📊 All Voting Settings in Sanity:')
    allSettings.forEach((setting, index) => {
      console.log(`${index + 1}. ${setting.eliminationWeek}`)
      console.log(`   Question: ${setting.votingQuestion}`)
      console.log(`   Status: ${setting.votingStatus} ${setting.isActive ? '(ACTIVE)' : ''}`)
      console.log(`   Poll ID: ${setting.strawpollId}`)
      console.log(`   ID: ${setting._id}`)
      console.log('')
    })
    
  } catch (error) {
    console.error('❌ Script failed:', error.message)
    process.exit(1)
  }
}

/**
 * Set active voting settings
 */
async function setActiveVoting(eliminationWeek) {
  try {
    console.log(`🔄 Setting active voting to: ${eliminationWeek}`)
    
    // First, deactivate all voting settings
    const allSettings = await client.fetch('*[_type == "votingSettings"]')
    
    for (const setting of allSettings) {
      await client.patch(setting._id).set({ isActive: false }).commit()
    }
    
    // Then activate the specified one
    const targetSetting = allSettings.find(s => s.eliminationWeek === eliminationWeek)
    
    if (targetSetting) {
      await client.patch(targetSetting._id).set({ isActive: true }).commit()
      console.log(`✅ Activated: ${eliminationWeek}`)
    } else {
      console.error(`❌ Voting settings for "${eliminationWeek}" not found`)
    }
    
  } catch (error) {
    console.error('❌ Error setting active voting:', error.message)
  }
}

// Run the script if called directly
if (require.main === module) {
  const args = process.argv.slice(2)
  
  if (args[0] === 'activate' && args[1]) {
    setActiveVoting(args[1])
  } else {
    createSampleVotingData()
  }
}

module.exports = { createSampleVotingData, setActiveVoting }
