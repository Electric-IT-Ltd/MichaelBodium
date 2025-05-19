import { BsGrid1X2 } from "react-icons/bs";
export default {
  name: "home",
  title: "Home",
  type: "document",
  icon: BsGrid1X2,
  fields: [
    {
      title: "Grid",
      name: "indexGrid",
      type: "array",
      options: {
        layout: "grid",
      },
      of: [{ type: "gridReference", weak: true }],
    },
    {
      name: "infoBackground",
      title: "Info Background Colour",
      type: "array",
      of: [{ type: "color" }],
    },
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "introduction",
      title: "Introduction",
      type: "blockContent",
    },
    {
      title: "Columns",
      name: "columns",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "title",
              title: "Title",
              type: "string",
            },
            {
              name: "items",
              title: "Items",
              type: "array",
              of: [
                {
                  type: "object",
                  fields: [
                    {
                      name: "title",
                      title: "Title",
                      type: "string",
                    },
                    {
                      name: "link",
                      title: "Link",
                      type: "url",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      title: "Categories",
      name: "categories",
      type: "array",
      of: [{ type: "reference", to: [{ type: "category" }], weak: true }],
    },
    {
      title: "SEO",
      name: "seo",
      type: "object",
      fields: [
        {
          title: "Title",
          name: "title",
          type: "string",
        },
        {
          title: "Description",
          name: "description",
          type: "text",
        },
      ],
    },
  ],

  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "galleryImages.0.galleryImage",
      subtitle: "name",
    },
    prepare(selection) {
      const { author } = selection;
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      });
    },
  },
};
