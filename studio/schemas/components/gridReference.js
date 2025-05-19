import Slider from "../components/slider";

export default {
  name: "gridReference",
  title: "Series",
  type: "object",
  fieldsets: [
    {
      name: "layout",
      title: "Layout",
      options: {
        collapsible: true,
        collapsed: false,
        columns: 2
      }
    }
  ],
  fields: [
    {
      name: "series",
      title: "Series",
      type: "reference",
      to: [{ type: "series" }, { type: "video" }]
    },
    {
      title: "Size",
      name: "imageSize",
      type: "string",
      fieldset: "layout",
      options: {
        list: [
          { title: "Standard", value: "standard" },
          { title: "Small", value: "small" },
          { title: "Large", value: "large" }
        ],
        layout: "dropdown"
      }
    },
    {
      title: "Width",
      name: "width",
      type: "string",
      fieldset: "layout",
      options: {
        list: [
          { title: "Half", value: "half" },
          { title: "Full", value: "full" }
        ],
        layout: "dropdown"
      }
    },
    {
      title: "Horizontal Alignment",
      name: "justify",
      type: "string",
      fieldset: "layout",
      options: {
        list: [
          { title: "Center", value: "center" },
          { title: "Left", value: "left" },
          { title: "Right", value: "right" }
        ],
        layout: "dropdown"
      }
    },
    {
      title: "Vertical Alignment",
      name: "alignment",
      type: "string",
      fieldset: "layout",
      options: {
        list: [
          { title: "Middle", value: "middle" },
          { title: "Top", value: "top" },
          { title: "Bottom", value: "bottom" }
        ],
        layout: "dropdown"
      }
    },
    {
      title: "Vertical Shift",
      name: "shift",
      type: "string",

      type: "number",
      options: {
        range: { min: 0, max: 10, step: 1 }
      },
      inputComponent: Slider,
      fieldset: "layout"
    }
  ],

  preview: {
    select: {
      title: "series.title",
      author: "author.name",
      media: "series.galleryImages.0.galleryImage"
    },
    prepare(selection) {
      const { author } = selection;
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`
      });
    }
  }
};
