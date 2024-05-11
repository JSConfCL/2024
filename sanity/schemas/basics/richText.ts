import {defineField, defineType} from 'sanity'

const types = [
  { title: 'Markdown', value: 'markdown'},
  { title: 'HTML', value: 'html'},
]

const richText = defineType({
  name: 'richText',
  type: 'object',
  title: 'Rich Text',
  fields: [
    defineField({ name: 'name', type: 'string' }),
    defineField({ name: 'textType', title: 'Type', type: 'string', options: { list: types } }),
    defineField({ name: 'markdownText', type: 'markdown' }),
    defineField({ name: 'htmlText', type: 'array', of: [{type: 'block'}] }),
  ],
})

export default richText;