import { defineField, defineType } from "sanity";

const navbar = defineType({
  name: "navbar",
  type: "document",
  title: "Navbar",
  fields: [
    defineField({ name: 'name', title: 'Name', type: 'string', validation: (rule) => rule.required() }),
    defineField({ name: 'links', type: 'array', of: [{type: 'link'}] })
  ]
});

export default navbar;