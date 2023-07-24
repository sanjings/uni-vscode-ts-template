import { defineConfig } from 'vite';
import uni from '@dcloudio/vite-plugin-uni';
import viteCompression from 'vite-plugin-compression';
import VitePluginChecker from 'vite-plugin-checker';
import { resolve } from 'node:path';

const pathResolve = (dir: string) => resolve(__dirname, dir);

export default defineConfig({
  base: './',
  plugins: [
    uni(),
    VitePluginChecker({
      typescript: true
    }),
    viteCompression({
      // 大于10kb的文件gzip压缩
      threshold: 10240
    })
  ],
  resolve: {
    alias: {
      '@': pathResolve('./src'),
      types: pathResolve('./types')
    }
  },
  server: {
    port: 5555,
    open: 'index.html',
    cors: true,
    hmr: true,
    proxy: {
      '/api': {
        target: '/',
        changeOrigin: true,
        secure: false
      }
    }
  },
  build: {
    chunkSizeWarningLimit: 1000, // 超过1000kb警告
    assetsInlineLimit: 4096, // 小于4kb base64转码
    sourcemap: false, // 构建后是否生成 source map 文件
    rollupOptions: {
      output: {
        manualChunks: (id: string) => {
          // 将 node_modules 中的代码单独打包成一个 JS 文件
          if (id.includes('node_modules')) {
            // return id.toString().split('node_modules/')[1].split('/')[0].toString();
            return 'vendor';
          }
        }
      }
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
        @import "./src/static/styles/mixin.scss";
        `
      }
    }
  }
});
