import {defineField, defineType} from 'sanity'

const sponsorType = defineType({
  name: 'sponsorType',
  type: 'document',
  title: 'Sponsor Type',
  fields: [
    defineField({ name: 'name', title: 'Name', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'icon', title: 'Icon', type: 'string', validation: (Rule) => Rule.required() }), // NOT sure if image64 / svg / image
    defineField({ name: 'position', title: 'Position', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'description', title: 'Description', type: 'richText', validation: (Rule) => Rule.required() }),
    defineField({ name: 'benefits_list_1', title: 'Benefits List 1', type: 'richText', }),
    defineField({ name: 'benefits_list_2', title: 'Benefits List 2', type: 'richText', }),
  ]
});


export default sponsorType;