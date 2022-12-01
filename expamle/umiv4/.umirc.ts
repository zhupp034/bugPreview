import { defineConfig } from 'umi';
import proxy from './config/proxy'
const config = {
  publicPath: './',
  history: {
    type: "hash"
  }

};
export default defineConfig(config);
