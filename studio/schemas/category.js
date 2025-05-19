import { HiOutlineTag } from "react-icons/hi";

export default {
  name: "category",
  title: "Category",
  type: "document",
  icon: HiOutlineTag,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      title: "Series",
      name: "series",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "series" }, { type: "video" }],
          weak: true,
        },
      ],
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
    },
    prepare(selection) {
      const { author } = selection;
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      });
    },
  },
};
