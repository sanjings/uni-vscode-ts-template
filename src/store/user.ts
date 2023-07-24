import { defineStore } from 'pinia';
import { showModalTip, showToast } from '@/utils/modal';

interface State {
  /**
   * token
   */
  token: string;
  /**
   * 用户信息
   */
  userInfo: {
    name?: string;
    phone?: string;
  };
  /**
   * 定位信息
   */
  locationInfo: {
    longitude?: number;
    latitude?: number;
  };
}

export const useUserStore = defineStore<
  'user',
  State,
  {
    /**
     * 是否已登录
     */
    isLogin: (state: State) => boolean;
    /**
     * 是否有用户信息
     */
    hasUserInfo: (state: State) => boolean;
  },
  {
    /**
     * 获取用户信息
     */
    setUserInfo: (params: State['userInfo']) => void;
    /**
     * 获取定位信息
     */
    setLocationInfo: () => void;
    /**
     * 退出登录、清除用户信息
     */
    logout: () => void;
  }
>('user', {
  state: () => {
    return {
      token: '',
      userInfo: {},
      locationInfo: {}
    };
  },
  getters: {
    isLogin: state => !!state.token,
    hasUserInfo: state => !!Object.keys(state.userInfo).length
  },
  actions: {
    setUserInfo(userInfo: State['userInfo']) {
      this.userInfo = userInfo;
    },
    async setLocationInfo() {
      try {
        // #ifdef MP-WEIXIN
        const authorizationRes = await uni.authorize({
          scope: 'scope.userLocation'
        });

        if (authorizationRes[0]) {
          uni.showModal({
            title: '提示',
            content: '为了使用完整功能,需要您同意授权定位信息',
            success: res => {
              if (res.confirm) {
                uni.openSetting();
              }
            }
          });
          return Promise.reject();
        }

        const authorizationMsg = authorizationRes[1]?.errMsg;
        if (authorizationMsg !== 'authorize:ok') {
          showToast(authorizationRes[1].errMsg);
          return Promise.reject();
        }
        // #endif

        // 获取位置坐标
        uni.getLocation({
          type: 'gcj02',
          success: res => {
            this.locationInfo = res;
          },
          fail: err => {
            showModalTip({
              msg: '获取定位失败，请开启系统定位'
            });
            console.log('获取定位失败：', err);
          }
        });
      } catch (err) {
        showToast(err || '获取定位失败');
        return Promise.reject();
      }
    },
    logout() {
      this.token = '';
      this.userInfo = {};
    }
  },
  // 开启数据缓存
  persist: {
    enabled: true,
    detached: true
  }
});
