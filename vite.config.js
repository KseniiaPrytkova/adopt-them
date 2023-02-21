import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    root: 'src'
    // server: {
    //     proxy: {
    //         '/api': {
    //             target: 'http://pets-v2.dev-apis.com',
    //             changeOrigin: true,
    //             secure: false,
    //             rewrite: (path) => path.replace(/^\/api/, '')
    //         }
    //     }
    // }
});
