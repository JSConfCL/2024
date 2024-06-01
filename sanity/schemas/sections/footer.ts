import { defineField, defineType } from "sanity";

const footer = defineType({
  name: "footer",
  type: "document",
  title: "Footer",
  fields: [
    defineField({ name: 'name', title: 'Name', type: 'string', validation: (rule) => rule.required() }),
    defineField({ name: 'followLinks', type: 'array', of: [{type: 'link'}] }),
    defineField({ name: 'sectionLinks', type: 'array', of: [{type: 'link'}] })
  ]
});

export default footer;