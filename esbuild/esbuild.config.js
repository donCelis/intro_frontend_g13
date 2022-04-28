import { build } from 'esbuild'

build({
  entryPoints: ['./src/index.js'], /* archivo de entrada */
  outdir: './dist', /* carpeta de archivos empaquetados */
  bundle: true, /* empaquetar los archivos */
  minify: true, /* minificar los archivos */
  sourcemap: false, /* para hacer debuggin */
  watch: true, /* pendiente de los camios de los archivos */
  format: 'esm'
}).catch(() => process.exit(1))
