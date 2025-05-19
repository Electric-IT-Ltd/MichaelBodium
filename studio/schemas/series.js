import { BiPhotoAlbum } from "react-icons/bi";
export default {
  name: "series",
  title: "Series",
  type: "document",
  icon: BiPhotoAlbum,
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
      name: "subtitle",
      title: "Subtitle",
      type: "string",
    },
    {
      title: "Images",
      name: "galleryImages",
      type: "array",
      options: {
        layout: "grid",
      },
      of: [{ type: "galleryImage" }],
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
    },
    prepare(selection) {
      const { author } = selection;
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      });
    },
  },
};
