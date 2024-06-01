import { defineField, defineType } from 'sanity'

const imageType = [
  { title: 'Top', value: 'top'},
  { title: 'Right', value: 'right'},
]

const card = defineType({
  name: 'card',
  type: 'object',
  title: 'Card',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string', validation: (rule) => rule.required() }),
    defineField({ name: 'description', title: 'Description', type: 'richText', validation: (rule) => rule.required() }),    
    defineField({ name: 'showType', title: 'Show Type', type: 'string', options: { list: imageType } }),
    defineField({ name: 'icon', title: 'Icon', type: 'string', }),
    defineField({
      name: 'image', type: 'image', options: {hotspot: true},
      fields: [defineField({ name: 'alt', type: 'string', title: 'Alternative text' })],
    }),
  ],
})

export default card;