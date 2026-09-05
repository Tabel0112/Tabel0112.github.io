import { cp, mkdir, rm, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const clientDir = resolve(root, "dist/client");
const serverEntry = resolve(root, "dist/server/index.js");
const outputDir = resolve(root, "dist-pages");
const siteUrl = "https://tabel0112.github.io";

await rm(outputDir, { recursive: true, force: true });
await mkdir(outputDir, { recursive: true });
await cp(clientDir, outputDir, { recursive: true });

const { default: worker } = await import(serverEntry);
const request = new Request(`${siteUrl}/`, {
  headers: { accept: "text/html" },
});
const env = {
  ASSETS: {
    fetch: async () => new Response("Not found", { status: 404 }),
  },
};
const context = {
  waitUntil() {},
  passThroughOnException() {},
};
const response = await worker.fetch(request, env, context);

if (!response.ok) {
  throw new Error(`Portfolio render failed with status ${response.status}`);
}

const sourceOrigin = "https://abel-product-engineer.tabel0112.chatgpt.site";
const html = (await response.text()).replaceAll(sourceOrigin, siteUrl);

if (!html.includes("Abel — Product Engineer") || !html.includes("Selected work")) {
  throw new Error("Portfolio render did not contain the expected content");
}

await writeFile(resolve(outputDir, "index.html"), html);
await writeFile(resolve(outputDir, "404.html"), html);
await writeFile(resolve(outputDir, ".nojekyll"), "");

await rm(resolve(outputDir, ".assetsignore"), { force: true });
await rm(resolve(outputDir, ".vite"), { recursive: true, force: true });
await rm(resolve(outputDir, "_headers"), { force: true });
await rm(resolve(outputDir, "vinext-client-entry-manifest.json"), { force: true });

console.log(`GitHub Pages export ready at ${outputDir}`);
