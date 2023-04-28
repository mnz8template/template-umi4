import { defineConfig } from 'umi';

export default defineConfig({
  npmClient: 'pnpm',
  // proxy: {
  //   '/xxx': {
  //     target: 'xxx',
  //     changeOrigin: true,
  //     pathRewrite: { '^/xxx': '' },
  //   },
  // },
});
