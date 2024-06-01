import {defineField, defineType, StringRule, UrlRule, ReferenceRule} from 'sanity'

const sponsor = defineType({
  name: 'sponsor',
  type: 'document',
  title: 'Sponsor',
  fields: [
    defineField({ name: 'type', title: 'Type', type: 'reference', to: [{ type: 'sponsorType' }], validation: (rule: ReferenceRule) => rule.required() }),
    defineField({ name: 'name', title: 'Name', type: 'string', validation: (rule: StringRule) => rule.required() }),
    defineField({ name: 'url', title: 'URL', type: 'url', validation: (rule: UrlRule) => rule.required().uri({ scheme: ['http', 'https'] }) }),
    defineField({ name: 'logo', title: 'Logo', type: 'image' }),
    defineField({ name: 'showPage', title: 'Show Custom Page', type: 'boolean', description: 'We offer custom pages USUALLY for "platinum", "gold" and some "silver" sponsors. Validate if this sponsor needs a custom page'}),

    defineField({ name: 'seoTitle', title: 'SEO Title', type: 'string', hidden: ({ parent }: { parent: { showPage: boolean; }}) => !parent?.showPage }),
    defineField({ name: 'seoDescription', title: 'SEO Description', type: 'string', hidden: ({ parent }: { parent: { showPage: boolean; }}) => !parent?.showPage }),
    defineField({ name: 'seoKeywords', title: 'SEO Keywords', type: 'string', hidden: ({ parent }: { parent: { showPage: boolean; }}) => !parent?.showPage }),
    defineField({ name: 'seoImage', title: 'SEO Image', type: 'image', hidden: ({ parent }: { parent: { showPage: boolean; }}) => !parent?.showPage }),

    defineField({ name: 'image', title: 'Image', type: 'image', hidden: ({ parent }: { parent: { showPage: boolean; }}) => !parent?.showPage }),
    defineField({ name: 'description', title: 'Description', type: 'richText', hidden: ({ parent }: { parent: { showPage: boolean; }}) => !parent?.showPage }),
    defineField({ name: 'linkedin', title: 'LinkedIn URL', type: 'url', hidden: ({ parent }: { parent: { showPage: boolean; }}) => !parent?.showPage }),
    defineField({ name: 'instagram', title: 'Instagram URL', type: 'url', hidden: ({ parent }: { parent: { showPage: boolean; }}) => !parent?.showPage }),
    defineField({ name: 'twitter', title: 'Twitter URL', type: 'url', hidden: ({ parent }: { parent: { showPage: boolean; }}) => !parent?.showPage }),

    defineField({ name: 'de', title: 'Twitter URL', type: 'url', hidden: ({ parent }: { parent: { showPage: boolean; }}) => !parent?.showPage }),
  ]
});

export default sponsor;