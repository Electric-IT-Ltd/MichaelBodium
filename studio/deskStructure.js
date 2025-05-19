import React from "react";
import S from "@sanity/desk-tool/structure-builder";
import { BsGrid1X2 } from "react-icons/bs";

const url = "https://michaelbodiam.netlify.app/";

const WebPreview = ({ document }) => {
  const targetURL = url + `?preview=true`;

  return <iframe src={targetURL} frameBorder={0} width="100%" height="100%" />;
};

export default () =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Home")
        .icon(BsGrid1X2)
        .child(
          S.document()
            .schemaType("home")
            .documentId("home")
            .views([S.view.form(), S.view.component(WebPreview).title("Web Preview")])
        ),
      ...S.documentTypeListItems().filter(listItem => !["home"].includes(listItem.getId()))
    ]);
