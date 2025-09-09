export default {
  name: 'votingSettings',
  title: 'Voting Settings',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Settings Title',
      type: 'string',
      description: 'Internal title for this voting settings entry'
    },
    {
      name: 'eliminationWeek',
      title: 'Elimination Week',
      type: 'string',
      description: 'Current elimination week (e.g., "Week 3 Elimination")',
      validation: Rule => Rule.required()
    },
    {
      name: 'votingQuestion',
      title: 'Voting Question',
      type: 'string',
      description: 'Question displayed to voters (e.g., "Who should be saved from elimination this week?")',
      validation: Rule => Rule.required()
    },
    {
      name: 'isActive',
      title: 'Is Active',
      type: 'boolean',
      description: 'Set to true for the active voting settings',
      initialValue: false
    },
    {
      name: 'strawpollUrl',
      title: 'StrawPoll Embed URL',
      type: 'url',
      description: 'StrawPoll embed URL for voting'
    },
    {
      name: 'strawpollId',
      title: 'StrawPoll ID',
      type: 'string',
      description: 'StrawPoll ID (extracted from URL)'
    },
    {
      name: 'votingStatus',
      title: 'Voting Status',
      type: 'string',
      options: {
        list: [
          { title: 'Live', value: 'live' },
          { title: 'Closed', value: 'closed' },
          { title: 'Coming Soon', value: 'coming-soon' }
        ]
      },
      initialValue: 'live'
    },
    {
      name: 'endDate',
      title: 'Voting End Date',
      type: 'datetime',
      description: 'When voting ends for this elimination'
    }
  ],
  preview: {
    select: {
      title: 'eliminationWeek',
      subtitle: 'votingQuestion',
      status: 'votingStatus',
      active: 'isActive'
    },
    prepare(selection) {
      const { title, subtitle, status, active } = selection;
      return {
        title: title || 'Voting Settings',
        subtitle: subtitle ? `${subtitle.substring(0, 60)}${subtitle.length > 60 ? '...' : ''} (${status || 'live'})` : 'No question set'
      };
    }
  }
}
