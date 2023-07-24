import { ref } from 'vue';
import vconsole from 'vconsole';

export const useVconsole = () => {
  const _initVconsole = () => {
    // #ifdef H5
    new vconsole();
    console.log('-------location.href------- ', window.location.href);
    console.log('----navigator.userAgent---- ', window.navigator.userAgent);
    // #endif
  };

  _initVconsole();

  const clickCount = ref(0);
  const startTime = ref(0);
  const showVconsole = () => {
    clickCount.value++;
    if (clickCount.value === 1) {
      startTime.value = Date.now();
    }
    // 连续点击10次且间隔时间不大于5s，则显示vconsole
    if (clickCount.value === 10 && Date.now() - startTime.value <= 5 * 1000) {
      _initVconsole();
    }
  };

  return { showVconsole };
};
