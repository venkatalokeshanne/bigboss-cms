export default {
  name: 'contestant',
  title: 'Contestant',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'imageUrl',
      title: 'Profile Image',
      type: 'string',
    },
    {
      name: 'age',
      title: 'Age',
      type: 'number',
      validation: Rule => Rule.min(18).max(65)
    },
    {
      name: 'profession',
      title: 'Profession',
      type: 'string',
    },
    {
      name: 'hometown',
      title: 'Hometown',
      type: 'string',
    },
    {
      name: 'biography',
      title: 'Biography',
      type: 'text',
      rows: 4,
    },
    {
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          {title: 'Active', value: 'active'},
          {title: 'Eliminated', value: 'eliminated'},
          {title: 'Winner', value: 'winner'},
          {title: 'Runner-up', value: 'runner-up'}
        ]
      },
      initialValue: 'active',
    },
    {
      name: 'currentVoteCount',
      title: 'Current Vote Count',
      type: 'number',
      initialValue: 0
    },
    {
      name: 'entryDate',
      title: 'Entry Date',
      type: 'date',
    },
    {
      name: 'eliminationDate',
      title: 'Elimination Date',
      type: 'date',
      hidden: ({document}) => document?.status === 'active'
    },
    {
      name: 'socialMedia',
      title: 'Social Media',
      type: 'object',
      fields: [
        {
          name: 'instagram',
          title: 'Instagram Handle',
          type: 'string'
        },
        {
          name: 'twitter',
          title: 'Twitter Handle',
          type: 'string'
        },
        {
          name: 'facebook',
          title: 'Facebook Page',
          type: 'string'
        }
      ]
    },
    {
      name: 'achievements',
      title: 'Achievements in House',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Achievement Title',
              type: 'string'
            },
            {
              name: 'date',
              title: 'Date',
              type: 'date'
            },
            {
              name: 'description',
              title: 'Description',
              type: 'text'
            }
          ]
        }
      ]
    },
    {
      name: 'gallery',
      title: 'Photo Gallery',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'caption',
              title: 'Caption',
              type: 'string'
            }
          ]
        }
      ]
    },
    {
      name: 'featured',
      title: 'Featured Contestant',
      type: 'boolean',
      initialValue: false,
      description: 'Show on homepage spotlight'
    },
    {
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: Rule => Rule.required()
    }
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'profession',
      media: 'image',
      status: 'status'
    },
    prepare({title, subtitle, media, status}) {
      return {
        title: title,
        subtitle: `${subtitle} - ${status.charAt(0).toUpperCase() + status.slice(1)}`,
        media: media
      }
    }
  }
}
