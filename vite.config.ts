/*
 * @Description: 
 * @Author: 李大玄
 * @Date: 2023-02-01 16:58:51
 * @FilePath: /vue3-template-shelf/vite.config.ts
 * @LastEditors: 李大玄
 * @LastEditTime: 2023-07-19 15:42:24
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import WindCSS from "vite-plugin-windicss";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  cacheDir: ".cache",
  resolve: {
    extensions: [".ts", ".vue", ".js", ".tsx"],
    alias: {
      "src/": `${path.resolve(__dirname, "src")}/`,
    },
  },
  plugins: [
    vue(),
    WindCSS()
  ]
})

