import { resolve } from 'path';
import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
import { htmlInjectHead } from './build-helper/html-head';
import { htmlInjectFooter } from './build-helper/html-footer';

/**
 * HTML Build replacing
 * @example '<template data-replace-key="injectHtmlHead"></template>'
 * @param data
 * @returns {{transformIndexHtml(html: string): any, name: string, order: string}}
 */
const transformHtmlPlugin = data => ({
  name: 'html-transform',
  order: 'pre',
  transformIndexHtml(html: string) {
    const regex = /<template\s+data-replace-key="([^"]+)"><\/template>/gi;
    return html.replace(
      regex,
      (match, p1) => data[p1] || ''
    );
  },
});

export default defineConfig({
  plugins: [
    transformHtmlPlugin({
      injectHtmlHead: htmlInjectHead,
      injectHtmlFooter: htmlInjectFooter,
    }),
    VitePWA({ registerType: 'autoUpdate' }),
  ],
  appType: 'mpa',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        vita: resolve(__dirname, 'vita/index.html'),
      },
    },
  },
});
