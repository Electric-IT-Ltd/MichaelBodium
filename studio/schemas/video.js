import { RiVideoLine } from "react-icons/ri";
import React from "react";
export default {
  name: "video",
  title: "Video",
  type: "document",
  icon: RiVideoLine,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string"
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96
      }
    },
    {
      name: "subtitle",
      title: "Subtitle",
      type: "string"
    },
    {
      title: "Video file",
      name: "video",
      type: "mux.video"
    }
  ],

  preview: {
    select: {
      title: "title",
      playbackId: "video.asset.playbackId",
      thumbTime: "video.asset.thumbTime"
    },
    prepare(selection) {
      const { title, playbackId, thumbTime } = selection;
      let media = "";
      if (playbackId) {
        media = <img src={"https://image.mux.com/" + playbackId + "/thumbnail.jpg?time=" + thumbTime} />;
      }
      return {
        title,
        media
      };
    }
  }
};
