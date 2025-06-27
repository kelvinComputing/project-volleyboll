// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
	vite: {
		plugins: [tailwindcss()],
		server: {
         host: true, 
			proxy: {
				'/api': {
					target: 'https://livosport.loca.lt',
					changeOrigin: true, 
					secure: false, 
               rewrite: (path) => path.replace(/^\/api/, ''),
				}
			}
		}
	}
});
