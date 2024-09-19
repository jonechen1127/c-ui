import * as Components from '../packages/index.js';
export * from '../packages/index.js'; //按需导出
const name = 'jack';
const version = '1.0.0';

const install = app => {
  Object.keys(Components).forEach(key => {
    console.log('components', Components[key]);
    app.use(Components[key]);
  });
};

export default {
  name,
  version,
  install,
  ...Components
};
