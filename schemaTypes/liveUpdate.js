export default {
  name: 'liveUpdate',
  title: 'Live Update',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Update Title',
      type: 'string',
      validation: Rule => Rule.required().min(10).max(100)
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      validation: Rule => Rule.required().min(20).max(300)
    },
    {
      name: 'type',
      title: 'Update Type',
      type: 'string',
      options: {
        list: [
          {title: '🎯 Task', value: 'task'},
          {title: '⚡ Drama', value: 'drama'},
          {title: '👑 Captain', value: 'captain'},
          {title: '🤫 Secret', value: 'secret'},
          {title: '🗳️ Nomination', value: 'nomination'},
          {title: '🍽️ Kitchen', value: 'kitchen'},
          {title: '💬 Conversation', value: 'conversation'},
          {title: '🎉 Celebration', value: 'celebration'},
          {title: '😢 Emotional', value: 'emotional'},
          {title: '📺 General', value: 'general'}
        ]
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'priority',
      title: 'Priority Level',
      type: 'string',
      options: {
        list: [
          {title: '🚨 Breaking', value: 'breaking'},
          {title: '🔥 High', value: 'high'},
          {title: '📰 Medium', value: 'medium'},
          {title: '📝 Low', value: 'low'}
        ]
      },
      initialValue: 'medium',
      validation: Rule => Rule.required()
    },
    {
      name: 'isLive',
      title: 'Is Live Now',
      type: 'boolean',
      initialValue: false,
      description: 'Mark as currently happening'
    },
    {
      name: 'involvedContestants',
      title: 'Involved Contestants',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'contestant'}]
        }
      ]
    },
    {
      name: 'image',
      title: 'Update Image',
      type: 'image',
      options: {
        hotspot: true,
      }
    },
    {
      name: 'video',
      title: 'Video URL',
      type: 'url',
      description: 'YouTube, Vimeo or other video URL'
    },
    {
      name: 'location',
      title: 'House Location',
      type: 'string',
      options: {
        list: [
          {title: 'Living Room', value: 'living-room'},
          {title: 'Kitchen', value: 'kitchen'},
          {title: 'Bedroom', value: 'bedroom'},
          {title: 'Garden', value: 'garden'},
          {title: 'Confession Room', value: 'confession-room'},
          {title: 'Task Area', value: 'task-area'},
          {title: 'Swimming Pool', value: 'pool'},
          {title: 'Bathroom', value: 'bathroom'},
          {title: 'Dining Area', value: 'dining'},
          {title: 'Activity Area', value: 'activity'}
        ]
      }
    },
    {
      name: 'timestamp',
      title: 'Event Time',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: Rule => Rule.required()
    },
    {
      name: 'duration',
      title: 'Event Duration (minutes)',
      type: 'number',
      description: 'How long did this event last?'
    },
    {
      name: 'reactions',
      title: 'Audience Reactions',
      type: 'object',
      fields: [
        {
          name: 'likes',
          title: 'Likes',
          type: 'number',
          initialValue: 0
        },
        {
          name: 'comments',
          title: 'Comments',
          type: 'number',
          initialValue: 0
        },
        {
          name: 'shares',
          title: 'Shares',
          type: 'number',
          initialValue: 0
        }
      ]
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        layout: 'tags'
      }
    },
    {
      name: 'featured',
      title: 'Featured Update',
      type: 'boolean',
      initialValue: false,
      description: 'Show prominently in live feed'
    },
    {
      name: 'published',
      title: 'Published',
      type: 'boolean',
      initialValue: true,
      description: 'Show in live updates'
    }
  ],
  orderings: [
    {
      title: 'Latest First',
      name: 'timestampDesc',
      by: [
        {field: 'timestamp', direction: 'desc'}
      ]
    },
    {
      title: 'Priority & Time',
      name: 'priorityTime',
      by: [
        {field: 'priority', direction: 'desc'},
        {field: 'timestamp', direction: 'desc'}
      ]
    },
    {
      title: 'Live Updates First',
      name: 'liveFirst',
      by: [
        {field: 'isLive', direction: 'desc'},
        {field: 'timestamp', direction: 'desc'}
      ]
    }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'type',
      media: 'image',
      priority: 'priority',
      isLive: 'isLive',
      timestamp: 'timestamp'
    },
    prepare({title, subtitle, media, priority, isLive, timestamp}) {
      const priorityEmoji = {
        breaking: '🚨',
        high: '🔥',
        medium: '📰',
        low: '📝'
      }
      
      const typeEmoji = {
        task: '🎯',
        drama: '⚡',
        captain: '👑',
        secret: '🤫',
        nomination: '🗳️',
        kitchen: '🍽️',
        conversation: '💬',
        celebration: '🎉',
        emotional: '😢',
        general: '📺'
      }
      
      const timeAgo = new Date(timestamp).toLocaleTimeString('en-IN', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
      })
      
      return {
        title: `${isLive ? '🔴 LIVE: ' : ''}${priorityEmoji[priority]} ${title}`,
        subtitle: `${typeEmoji[subtitle]} ${subtitle.toUpperCase()} • ${timeAgo}`,
        media: media
      }
    }
  }
}
