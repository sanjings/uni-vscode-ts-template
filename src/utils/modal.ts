import { is } from './is';

/**
 * 提示弹框
 */
export const showModalTip = ({
  title = '提示',
  msg,
  confirmText = '我知道了',
  success
}: {
  title?: string;
  msg?: string;
  confirmText?: string;
  success?: (result: UniNamespace.ShowModalRes) => void;
}): void => {
  uni.showModal({
    title,
    content: msg,
    confirmText,
    showCancel: false,
    editable: false,
    success
  });
};

/**
 * 确认弹框
 */
export const showModalConfirm = ({
  title,
  msg,
  cancelText = '取消',
  confirmText = '确定',
  success
}: {
  title?: string;
  msg?: string;
  cancelText?: string;
  confirmText?: string;
  success?: (result: UniNamespace.ShowModalRes) => void;
}): void => {
  uni.showModal({
    title,
    content: msg,
    cancelText,
    confirmText,
    showCancel: true,
    editable: false,
    success
  });
};

/**
 * 显示toast
 * @param type 提示类型，可选值为 loading success fail error exception none
 * @param msg 提示文字
 * @param duration 显示时间 默认2000 0则不关闭
 */
export const showToast = (
  options: string | { type?: UniNamespace.ShowToastOptions['icon']; msg?: string; duration?: number },
  duration?: number
) => {
  if (typeof options === 'string') {
    uni.showToast({
      title: options,
      mask: true,
      duration: duration ?? 2000
    });
  } else if (is(options, 'Object')) {
    let { type = 'none', msg, duration = 2000 } = options;
    if (type === 'loading') {
      msg = msg || '加载中';
      duration = duration ?? 0;
    } else if (!msg) return;
    uni.showToast({
      icon: type,
      title: msg,
      mask: true,
      duration
    });
  }
};

/**
 * 关闭toast
 */
export const hideToast = () => uni.hideToast();

/**
 * 显示全屏loading
 * @param msg 提示文字 默认加载中
 */
export const showLoading = (msg = '加载中') => {
  uni.showLoading({
    title: msg,
    mask: true
  });
};

/**
 * 隐藏全屏loading
 */
export const hideLoading = () => uni.hideLoading();
