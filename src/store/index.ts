import { createPinia } from 'pinia';
import piniaPluginPersist from 'pinia-plugin-persist-uni';

const pinia = createPinia();
pinia.use(piniaPluginPersist);

export default pinia;
