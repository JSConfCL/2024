import { defineArrayMember, defineField, defineType } from "sanity";

const page = defineType({
  name: "page",
  type: "document",
  title: "Page",
  fields: [
    defineField({ name: 'name', title: 'Name', type: 'string' }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', validation: (rule) => rule.required() }),
    defineField({ name: 'dynamicPage', title: 'Dynamic Page', type: 'boolean', description: 'If true, page will be genearated automatically using the slug. In any other case, this slug should be used as refrerence in a specific page.' }),
    defineField({ name: 'seoTitle', title: 'SEO Title', type: 'string', validation: (rule) => rule.required().max(60) }),
    defineField({ name: 'seoDescription', title: 'SEO Description', type: 'string', validation: (rule) => rule.required().max(160) }),
    defineField({ name: 'seoKeywords', title: 'SEO Keywords', type: 'string' }),
    defineField({ name: 'seoImage', title: 'SEO Image', type: 'image' }),
    defineField({ name: 'navbar', title: 'Navbar', type: 'reference', to: [{ type: 'navbar' }] }),
    defineField({
      name: 'sections', type: 'array', title: 'Sections',
      of: [
        defineArrayMember({ name: 'richText', type: 'richText' }),
        defineArrayMember({ name: 'hero', type: 'hero' }),
        defineArrayMember({ name: 'row', type: 'row' }),
        defineArrayMember({ name: 'customInfo', type: 'customInfo' }),
        defineArrayMember({ name: 'card', type: 'card' }),
     ]
    }),
    defineField({ name: 'footer', title: 'Footer', type: 'reference', to: [{ type: 'footer' }] })
  ]
});

export default page;