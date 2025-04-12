import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/', // 또는 '/hatimo-frontend/' — 주소 구조에 따라 선택
})