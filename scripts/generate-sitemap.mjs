import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const SITE_URL = 'https://www.venkitravel.com';

const pages = [
  { url: '/', priority: 1.0, changefreq: 'daily' },
  { url: '/packages', priority: 0.9, changefreq: 'weekly' },
  { url: '/services', priority: 0.9, changefreq: 'weekly' },
  { url: '/visa', priority: 0.8, changefreq: 'monthly' },
  { url: '/deals', priority: 0.8, changefreq: 'weekly' },
  { url: '/events', priority: 0.7, changefreq: 'weekly' },
  { url: '/about', priority: 0.7, changefreq: 'monthly' },
  { url: '/contact', priority: 0.8, changefreq: 'monthly' },
  { url: '/faq', priority: 0.5, changefreq: 'monthly' },
  { url: '/privacy', priority: 0.3, changefreq: 'yearly' },
  { url: '/terms', priority: 0.3, changefreq: 'yearly' },
  { url: '/cancellation', priority: 0.3, changefreq: 'yearly' },
  { url: '/sitemap', priority: 0.4, changefreq: 'monthly' },
];

async function generateSitemap() {
  const stream = new SitemapStream({ hostname: SITE_URL });
  const outputPath = resolve(__dirname, '../public/sitemap.xml');

  for (const page of pages) {
    stream.write({ url: page.url, changefreq: page.changefreq, priority: page.priority });
  }
  stream.end();

  const data = await streamToPromise(stream);
  const writeStream = createWriteStream(outputPath);
  writeStream.write(data.toString());
  writeStream.end();

  console.log(`Sitemap generated at public/sitemap.xml with ${pages.length} URLs`);
}

generateSitemap().catch(console.error);
