import { fileURLToPath } from 'url'
import path from 'path'
import fs from 'fs'
import { build, defineConfig } from 'vite'

import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import dts from 'vite-plugin-dts'

import DefineOptions from 'unplugin-vue-define-options/vite'

/**
 * 通过使用 import.meta.url 和 fileURLToPath 函数来获取当前文件的路径，然后使用 path.dirname 来获取目录名。这样我们就可以在 ES 模块中模拟 __dirname 的功能。
 */
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const rootDir = path.resolve(__dirname, '../')
const outDir = resolve('packages/vlume-ui/dist')

const baseConfig = defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    DefineOptions(),
    dts({
      entryRoot: path.resolve(rootDir, 'packages'),
      include: ['packages/**'],
      exclude: ['**/__test__/*', '**/vite.config.ts'],
      outDir: path.resolve(outDir, 'types')
    })
  ],
  build: {
    lib: {
      entry: resolve('packages/vlume-ui/index.ts'),
      name: 'vlume-ui',
      fileName: format => `index.${format}.js`
    },
    outDir,
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})

main()

// 生成package.json
function generatePackageJson() {
  const packageJsonFileStr = fs.readFileSync(
    resolve('packages/vlume-ui/package.json'),
    'utf-8'
  )
  const packageJson = JSON.parse(packageJsonFileStr)
  packageJson.name = 'vlume-ui'
  packageJson.main = 'index.umd.js'
  packageJson.module = 'index.es.js'
  packageJson.unpkg = 'index.umd.js'
  packageJson.types = 'types/vlume-ui/index.d.ts'
  fs.writeFileSync(
    path.resolve(outDir, 'package.json'),
    JSON.stringify(packageJson, null, 2),
    'utf-8'
  )
}

async function main() {
  await build(baseConfig)
  await copyFiles()

  // 生成package.json
  generatePackageJson()
}

async function copyFiles() {
  // fs.copyFileSync(
  //   resolve('packages/vlume-ui/package.json'),
  //   resolve('packages/vlume-ui/dist/package.json')
  // )
  // fs.copyFileSync(resolve("README.md"), resolve("packages/vlume-ui/README.md"));
}

function resolve(...urlOrUrls) {
  return path.resolve(rootDir, ...urlOrUrls)
}
