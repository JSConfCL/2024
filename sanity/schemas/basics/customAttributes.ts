import { defineField, defineType } from 'sanity'

const customAttributes = defineType({
  name: 'customAttributes',
  type: 'object',
  title: 'customAttributes',
  fields: [
    defineField({ name: 'name', type: 'string', }),
    defineField({ name: 'value', type: 'string', })
  ],
})

export default customAttributes;