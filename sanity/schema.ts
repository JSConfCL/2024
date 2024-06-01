import { type SchemaTypeDefinition } from 'sanity';

import link from './schemas/basics/link';
import richText from './schemas/basics/richText';
import customAttributes from './schemas/basics/customAttributes';

import community from './schemas/models/community';
import member from './schemas/models/member';
import speaker from './schemas/models/speaker';
import sponsorType from './schemas/models/sponsorType';
import sponsor from './schemas/models/sponsor';

import hero from './schemas/sections/hero';
import card from './schemas/sections/card';
import row from './schemas/sections/row';
import customInfo from './schemas/sections/customInfo';
import navbar from './schemas/sections/navbar';
import footer from './schemas/sections/footer';

import page from './schemas/page';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    // Basics
    link,
    richText,
    customAttributes,

    // Models
    community,
    member,
    speaker,
    sponsorType,
    sponsor,

    // Sections
    hero,
    card,
    row,
    customInfo,
    navbar,
    footer,

    // Page
    page
  ],
};
