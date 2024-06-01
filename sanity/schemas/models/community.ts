import { defineField, defineType } from 'sanity'

const community = defineType({
  name: 'community',
  type: 'document',
  title: 'Community',
  fields: [
    defineField({ name: 'name', title: 'Name', type: 'string', validation: (rule) => rule.required() }),
    defineField({ name: 'logo', title: 'Logo', type: 'image', validation: (rule) => rule.required() }),
    defineField({ name: 'webpage', title: 'Webpage URL', type: 'url', validation: (rule) => rule.required() })
  ]
});


export default community;