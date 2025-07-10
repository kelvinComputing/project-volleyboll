// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({  
   output: "server",
	vite: {
		plugins: [tailwindcss()],
		server: {
			host: true,
			proxy: {
				'/api': {
					target: 'https://livosport.loca.lt',
					changeOrigin: true,
					rewrite: (path) => path.replace(/^\/api/, ''),
					cookieDomainRewrite: '',
					configure: (proxy) => {
						proxy.on('proxyRes', (res) => {
							const setHeader = res.headers['set-cookie'];
							if (setHeader) {
								res.headers['set-cookie'] = setHeader.map(
									(cookie) =>
										cookie
											.replace(/;\s*Secure/gi, '') 
											.replace(/;\s*SameSite=None/gi, '; SameSite=Lax') 
								);
							}
						});
					}
				}
			}
		}
	}
});
