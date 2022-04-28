// eslint-disable-next-line import/no-extraneous-dependencies
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components/'),
      '@styles': path.resolve(__dirname, './src/components/styles/css/'),
      '@layout': path.resolve(__dirname, './src/components/styles/css/layout'),
      '@sass': path.resolve(__dirname, './src/components/styles/sass/abstracts'),
      '@pages': path.resolve(__dirname, './src/pages/'),
    },
  },
});
