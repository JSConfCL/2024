import { defineField, defineType } from 'sanity'

const targets = [
  { title: 'Self', value: '_self' },
  { title: 'Blank', value: '_blank' },
  { title: 'Parent', value: '_parent' },
  { title: 'Top', value: '_top' },
]

const icons = [
  { title: 'External', value: 'external' },
]

const styles = [
  { title: 'Link', value: 'link' },
  { title: 'button', value: 'button' },
]

const link = defineType({
  name: 'link',
  type: 'document',
  title: 'Link',
  initialValue: {
    target: '_self'
  },
  fields: [
    defineField({ name: 'url', type: 'string', }),
    defineField({ name: 'text', type: 'string', }),
    defineField({ name: 'target', type: 'string', options: { list: targets } }),
    defineField({ name: 'icon', title: 'Icon', type: 'string', options: { list: icons } }),
    defineField({ name: 'style', title: 'Style', type: 'string', options: { list: styles } }),
  ],
})

export default link;