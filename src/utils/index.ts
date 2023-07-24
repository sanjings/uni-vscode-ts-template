/**
 * 对函数进行防抖处理
 * @param fn 回调函数
 * @param delayTime 延迟执行毫秒数
 * @return 防抖函数
 */
export const debounce = (fn: Function, delayTime = 300) => {
  let timer: NodeJS.Timeout | null = null;

  return function (this: any, ...args: any) {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delayTime);
  };
};

/**
 * 阻塞同步代码
 */
export const sleep = (times: number) => {
  return new Promise<void>(resolve => {
    setTimeout(() => resolve(), times);
  });
};

/**
 * 简易深克隆
 * @param data 被克隆的对象
 * @return 克隆后的对象
 */
export const deepClone = <T = Recordable>(data: T): T => {
  if (!data) throw new Error('入参不存在');
  return JSON.parse(JSON.stringify(data));
};

/**
 * 获取url对应key的值
 * @param key key
 * @return value
 */
export const getUrlParam = (key: string): string | null => {
  if (!key) return null;
  let r;
  const reg = new RegExp('(^|&)' + key + '=([^&]*)(&|$)');
  if (window.location.href.indexOf('#/') >= 0) {
    const regurl = window.location.search;
    const regp = regurl.split('#/').toString();
    r = regp.substr(1).match(reg);
  } else {
    r = window.location.search.substr(1).match(reg);
  }
  if (r !== null) {
    return r[2];
  }
  return null;
};

/**
 * 替换url参数值
 * @param {key} 参数键名
 * @param {val} 替换的参数值
 * @returns url
 */
export const replaceUrlParam = (url = window.location.href, key: string, val: string) => {
  if (!url) return '';
  const reg = new RegExp('(^|&|\\?)' + key + '=([^(&|#)]*)(&|#\\/|$)', 'ig');
  const r = url.match(reg);
  // 如果匹配到了，则替换
  if (r) {
    return url.replace(reg, `$1${key}=${val}$3`);
  }
  // 匹配不到则加上
  const reg1 = new RegExp('([^#]*)(#|$)');
  const r1 = url.match(reg1);
  let ident = '?';
  if (r1) {
    ident = r1[1].indexOf('?') > -1 ? '&' : '?';
  }
  return url.replace(reg1, `$1${ident + key}=${val}$2`);
};
