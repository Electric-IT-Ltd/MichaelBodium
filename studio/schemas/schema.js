// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";
import gridReference from "./components/gridReference";
import image from "./components/image";
import category from "./category";
import home from "./home";
import series from "./series";
import video from "./video";
import blockContent from "./components/blockContent";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([gridReference, image, category, home, series, video, blockContent])
});
