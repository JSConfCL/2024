import { defineField, defineType } from 'sanity'

const icons = [
  { title: "Avocado", value: "avocado"},
  { title: "Doblado", value: "doblado"},
  { title: "Empanada", value: "empanada"},
  { title: "Hallulla", value: "hallulla"},
  { title: "Lapageria", value: "lapageria"},
  { title: "Logo", value: "logo"},
  { title: "Marraqueta", value: "marraqueta"},
  { title: "Moai", value: "moai"},
  { title: "Mote", value: "mote"},
  { title: "Mountain", value: "mountain"},
  { title: "Title", value: "title"},
  { title: "Volcano", value: "volcano"},
  { title: "Windmill", value: "windmill"},
  { title: "Wine", value: "wine"},
]

const hero = defineType({
  name: 'hero',
  type: 'object',
  title: 'Hero',
  fields: [
    defineField({ name: 'heading', type: 'string' }),
    defineField({ name: 'tagline', type: 'string' }),
    defineField({ name: 'icon', title: 'Icon', type: 'string', options: { list: icons } }),
    defineField({ name: 'actions', type: 'array', of: [{type: 'link'}] }),
    defineField({ name: 'customAttributes', type: 'array', of: [{type: 'customAttributes'}] }),
    defineField({
      name: 'image', type: 'image', options: {hotspot: true},
    }),
  ],
})

export default hero;