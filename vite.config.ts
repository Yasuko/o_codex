import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

/// <reference types="vitest" />
/// <reference types="vite/client" />
// https://vitejs.dev/config/


export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    exclude: ['src/_lib/**/*', 'node_modules/**/*'],
  },
  compilerOptions: {
    moduleResolution: "bundler",
    types: ["vitest/globals"]
  }
})
