import { defineConfig } from 'astro/config';
import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
import solidJs from "@astrojs/solid-js";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: netlify(),
  integrations: [solidJs()]
});