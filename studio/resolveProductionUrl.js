export default function resolveProductionUrl(document) {
  if (document._type === "home") {
    return "https://michaelbodiam.netlify.app/?preview=true";
  } else if (document._type === "category") {
    return `https://michaelbodiam.netlify.app/${document.slug.current}/?preview=true`;
  }
  return undefined;
}
