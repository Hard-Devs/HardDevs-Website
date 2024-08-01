import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
const site = 'https://hard-devs.github.io/HardDevs-Website/';
const base = import.meta.env.MODE != "development" ? site: "";

export default defineConfig({
	baseUrl: base,
	site: site,
	integrations: [mdx(), sitemap()],
});
