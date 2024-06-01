import {defineField, defineType} from 'sanity'

const types = [
  { title: 'Organizer', value: 'organizer'},
  { title: 'Volunteer', value: 'volunteer'},
]

const member = defineType({
  name: 'member',
  type: 'document',
  title: 'Member',
  fields: [
    defineField({ name: 'slug', title: 'Slug', type: 'string', validation: (rule) => rule.required() }),
    defineField({ name: 'type', title: 'Type', type: 'string', options: { list: types } }),
    defineField({ name: 'name', title: 'Name', type: 'string', validation: (rule) => rule.required() }),
    defineField({ name: 'photo', title: 'Photo', type: 'image', validation: (rule) => rule.required() }),
    defineField({ name: 'webpage', title: 'Webpage URL', type: 'url', validation: (rule) => rule.required() })
  ]
});


export default member;