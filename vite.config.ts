import { readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import {
  CASE_STUDY_METADATA,
  SOCIAL_PREVIEW_ALT,
  SOCIAL_PREVIEW_IMAGE,
  SITE_URL,
} from "./src/content/projectMetadata.ts";

const SOCIAL_METADATA_START = "<!-- social-metadata:start -->";
const SOCIAL_METADATA_END = "<!-- social-metadata:end -->";

function caseStudyMetadataPages(): Plugin {
  return {
    name: "case-study-metadata-pages",
    async writeBundle(outputOptions, bundle) {
      const outputDirectory = resolve(outputOptions.dir ?? "dist");
      const indexHtml = await readFile(resolve(outputDirectory, "index.html"), "utf8");
      const redirectsPath = resolve(outputDirectory, "_redirects");
      const fallbackRedirect = await readFile(redirectsPath, "utf8");
      const caseStudyMetadata = Object.values(CASE_STUDY_METADATA);

      await Promise.all(
        caseStudyMetadata.map(async (metadata) => {
          const outputPath = resolve(
            outputDirectory,
            `${metadata.path.slice(1)}.html`,
          );

          const assetPath = metadata.socialImage
            ? Object.keys(bundle).find((path) =>
                path.startsWith(`assets/${metadata.socialImage!.assetName}-`) &&
                path.endsWith(".png"),
              )
            : undefined;
          if (metadata.socialImage && !assetPath) {
            throw new Error(`Missing social preview asset for ${metadata.path}`);
          }
          const image = assetPath ? `${SITE_URL}/${assetPath}` : SOCIAL_PREVIEW_IMAGE;
          const imageAlt = metadata.socialImage?.alt ?? SOCIAL_PREVIEW_ALT;
          await writeFile(
            outputPath,
            replaceSocialMetadata(indexHtml, metadata, image, imageAlt),
          );
        }),
      );

      const caseStudyRedirects = caseStudyMetadata
        .map((metadata) => `${metadata.path} ${metadata.path}.html 200!`)
        .join("\n");
      await writeFile(redirectsPath, `${caseStudyRedirects}\n${fallbackRedirect}`);
    },
  };
}

function replaceSocialMetadata(
  html: string,
  metadata: (typeof CASE_STUDY_METADATA)[keyof typeof CASE_STUDY_METADATA],
  image: string,
  imageAlt: string,
) {
  const url = `${SITE_URL}${metadata.path}`;
  const imageWidth = metadata.socialImage ? 1520 : 1200;
  const imageHeight = metadata.socialImage ? 1280 : 630;
  const tags = `
    ${SOCIAL_METADATA_START}
    <meta name="description" content="${escapeAttribute(metadata.description)}" />
    <meta name="author" content="Ace Lowder" />
    <link rel="canonical" href="${url}" />
    <meta property="og:type" content="article" />
    <meta property="og:site_name" content="Ace Lowder" />
    <meta property="og:locale" content="en_US" />
    <meta property="og:url" content="${url}" />
    <meta property="og:title" content="${escapeAttribute(metadata.title)}" />
    <meta property="og:description" content="${escapeAttribute(metadata.description)}" />
    <meta property="og:image" content="${image}" />
    <meta property="og:image:alt" content="${escapeAttribute(imageAlt)}" />
    <meta property="og:image:width" content="${imageWidth}" />
    <meta property="og:image:height" content="${imageHeight}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeAttribute(metadata.title)}" />
    <meta name="twitter:description" content="${escapeAttribute(metadata.description)}" />
    <meta name="twitter:image" content="${image}" />
    <meta name="twitter:image:alt" content="${escapeAttribute(imageAlt)}" />
    <title>${escapeAttribute(metadata.title)}</title>
    ${SOCIAL_METADATA_END}`;

  const start = html.indexOf(SOCIAL_METADATA_START);
  const end = html.indexOf(SOCIAL_METADATA_END);

  if (start === -1 || end === -1 || end < start) {
    throw new Error("Could not find the social metadata markers.");
  }

  return `${html.slice(0, start)}${tags}${html.slice(end + SOCIAL_METADATA_END.length)}`;
}

function escapeAttribute(value: string) {
  return value.replace(/[&"<>]/g, (character) => ({
    "&": "&amp;",
    '"': "&quot;",
    "<": "&lt;",
    ">": "&gt;",
  })[character]!);
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), caseStudyMetadataPages()],
});
