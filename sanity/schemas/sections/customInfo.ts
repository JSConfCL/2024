import {defineField, defineType} from 'sanity'

const customInfo = defineType({
  name: 'customInfo',
  type: 'object',
  title: 'Custom Info',
  fields: [
    defineField({ name: 'slug', type: 'string' }),
    defineField({ name: 'name', type: 'string' }),
    defineField({ name: 'title', type: 'string' }),
    defineField({ name: 'description', type: 'richText' }),
    defineField({ name: 'actions', type: 'array', of: [{type: 'link'}] }),
    defineField({ name: 'attributes', type: 'array', title: 'attributes', of: [{type: 'customAttributes'}] }),
  ],
})

export default customInfo;