<template>
  <div class="login">
      <van-nav-bar
      title="登录"
      style="background:skyblue"
    />
    <van-cell-group>
      <van-field
        required
        clearable
        label="手机号"
        placeholder="请输入手机号"
      />

      <van-field
        type="password"
        label="验证码"
        placeholder="请输入验证码"
        required
      />
    </van-cell-group>
    <!-- /登录表单 -->

    <!-- 登录按钮 -->
    <div>
      <van-button block type="info">登录</van-button>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
