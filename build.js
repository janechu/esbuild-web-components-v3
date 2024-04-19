import * as esbuild from 'esbuild'

await esbuild.build({
  entryPoints: ["src/index.ts"],
  bundle: true,
  minify: true,
  outdir: "public/dist"
});