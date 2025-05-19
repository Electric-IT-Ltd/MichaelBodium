export default {
  title: "Image",
  name: "galleryImage",
  type: "object",
  fields: [
    {
      title: "Image",
      name: "galleryImage",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      title: "Size",
      name: "imageSize",
      type: "string",
      options: {
        list: [
          { title: "Standard", value: "standard" },
          { title: "Small", value: "small" },
        ],
        layout: "dropdown",
      },
    },
  ],
  preview: {
    select: {
      media: "galleryImage",
    },
  },
};
