<template>
  <view class="content">
    <image class="logo" src="/static/images/logo.png" />
    <view class="text-area">
      <text class="title">{{ title }}</text>
    </view>
  </view>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  const title = ref('Hello');
</script>

<style>
  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .logo {
    margin: 200rpx auto 50rpx;
    width: 200rpx;
    height: 200rpx;
  }

  .text-area {
    display: flex;
    justify-content: center;
  }

  .title {
    font-size: 36rpx;
    color: #8f8f94;
  }
</style>
