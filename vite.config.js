import dts from 'vite-plugin-dts';
import mkcert from 'vite-plugin-mkcert'

export default {
  // mode: 'development',
  root: './',
  build: {
    // minify: false,
    sourcemap: true,
    emptyOutDir: false,
    lib: {
      formats: ['es', 'cjs', 'umd'],
      entry: './src/github-issue-widget.ts',
      name: 'githubissuewidget'
    },
  },
  server: {
    https: true,
    open: '/example/index.html'
  },
  plugins: [dts(), mkcert()]
}
