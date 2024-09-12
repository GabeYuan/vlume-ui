#!/bin/sh

set -e

npm config set registry=https://registry.npmjs.org

# pnpm i --frozen-lockfile
# pnpm update:version

pnpm build

npm login # 登陆 ，如果有 OTP, 邮箱会接收到验证码，输入即可


cd packages/vlume-ui
npm publish ./dist # 可能会提示名称已存在，换个名字，获取使用作用域包（@xxx/xxx）

npm config set registry=https://registry.npm.taobao.org # 还原淘宝镜像

echo "✅ Publish completed"