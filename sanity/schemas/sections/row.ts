import { defineArrayMember, defineField, defineType } from 'sanity'

const rowTypes = [
  { title: '50 and 50', value: '50-50'},
  { title: '55 and 45', value: '55-45'},
  { title: '66 and 33', value: '66-33'},
  { title: '45 and 55', value: '45-55'},
  { title: '33 and 66', value: '33-66'}
]

const row = defineType({
  name: 'row',
  type: 'object',
  title: 'Row',
  fields: [
    defineField({ name: 'rowType', title: 'Row Type', type: 'string', options: { list: rowTypes } }),
    defineField({ name: 'title', title: 'Title', type: 'string', validation: (rule) => rule.required() }),
    defineField({ name: 'description', type: 'richText' }),
    defineField({ name: 'icon', title: 'Icon', type: 'string', }),
    defineField({ name: 'inverse', title: 'Inverse Order', type: 'boolean', }),
    defineField({
      name: 'children', type: 'array', title: 'Children',
      of: [
        defineArrayMember({ name: 'card', type: 'card' }),
        defineArrayMember({ name: 'richText', type: 'richText' }),
        defineArrayMember({
          name: 'image', type: 'image', options: {hotspot: true},
          fields: [defineField({ name: 'alt', type: 'string', title: 'Alternative text' })],
        }),
        
     ]
    })
  ],
})

export default row;