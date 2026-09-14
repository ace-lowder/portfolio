import { readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import {
  CASE_STUDY_METADATA,
  SOCIAL_PREVIEW_IMAGE,
  SITE_URL,
} from "./src/content/projectMetadata.ts";

const SOCIAL_METADATA_START = "<!-- social-metadata:start -->";
const SOCIAL_METADATA_END = "<!-- social-metadata:end -->";

function caseStudyMetadataPages(): Plugin {
  return {
    name: "case-study-metadata-pages",
    async writeBundle(outputOptions) {
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

          await writeFile(outputPath, replaceSocialMetadata(indexHtml, metadata));
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
) {
  const url = `${SITE_URL}${metadata.path}`;
  const tags = `
    ${SOCIAL_METADATA_START}
    <meta name="description" content="${metadata.description}" />
    <link rel="canonical" href="${url}" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="${url}" />
    <meta property="og:title" content="${metadata.title}" />
    <meta property="og:description" content="${metadata.description}" />
    <meta property="og:image" content="${SOCIAL_PREVIEW_IMAGE}" />
    <meta property="og:image:alt" content="A selection of software projects by Ace Lowder" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${metadata.title}" />
    <meta name="twitter:description" content="${metadata.description}" />
    <meta name="twitter:image" content="${SOCIAL_PREVIEW_IMAGE}" />
    <meta name="twitter:image:alt" content="A selection of software projects by Ace Lowder" />
    <title>${metadata.title}</title>
    ${SOCIAL_METADATA_END}`;

  const start = html.indexOf(SOCIAL_METADATA_START);
  const end = html.indexOf(SOCIAL_METADATA_END);

  if (start === -1 || end === -1 || end < start) {
    throw new Error("Could not find the social metadata markers.");
  }

  return `${html.slice(0, start)}${tags}${html.slice(end + SOCIAL_METADATA_END.length)}`;
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), caseStudyMetadataPages()],
});
