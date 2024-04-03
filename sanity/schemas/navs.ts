import { type SchemaTypeDefinition } from "sanity";

export default {
  "name": "navs",
  "title": "Menús",
  "type": "document",
  "fields": [
    {
      "name": "title",
      "title": "Título",
      "type": "string"
    },
    {
      "name": "links",
      "title": "Links",
      "type": "array",
      "of": [
        {
          "type": "object",
          "fields": [
            {
              "name": "enlaces",
              "title": "Enlaces",
              "type": "array",
              "of": [
                {
                  "type": "object",
                  "fields": [
                    {
                      "name": "label",
                      "title": "Label",
                      "type": "string"
                    },
                    {
                      "name": "href",
                      "title": "Href",
                      "type": "url"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
} as SchemaTypeDefinition;
