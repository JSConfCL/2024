import {defineField, defineType} from 'sanity'

const speaker = defineType({
  name: 'speaker',
  type: 'document',
  title: 'Speaker',
  fields: [
    defineField({ name: 'slug', title: 'Slug', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'showName', title: 'Short Name', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'longName', title: 'Long Name', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'isKeynoter', title: 'Keynoter', type: 'boolean' }),
    
    defineField({ name: 'profilePicture', title: 'Profile Picture', type: 'image' }),
    defineField({ name: 'description', title: 'Description', type: 'richText' }),
    defineField({ name: 'photos', type: 'array', title: 'Photos', of: [{ type: "image" }] }),

    defineField({ name: 'company', title: 'Company Name ', type: 'string' }),
    defineField({ name: 'title', title: 'Title', type: 'string' }),

    defineField({ name: 'webpage', title: 'Webpage URL', type: 'url' }),
    defineField({ name: 'linkedin', title: 'LinkedIn URL', type: 'url' }),
    defineField({ name: 'instagram', title: 'Instagram URL', type: 'url' }),
    defineField({ name: 'twitter', title: 'Twitter URL', type: 'url' }),
  ]
});


export default speaker;