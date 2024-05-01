import { defineConfig } from 'tsup'

export default defineConfig({
  entryPoints: ['lib/index.ts', 'lib/handler/imap-stream.ts'],
  format: ['cjs'],
  target: 'node20',
  outDir: 'build',
  splitting: true,
})
