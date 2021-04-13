<template>
	<view class="container">
		<u-button type="default" @tap="login">登录</u-button>
	</view>
</template>

<script>
export default {
    data() {
        return {

            loginForm: {
                username: 'admin',
                passowrd: '123456'
            }
        }
    },
    methods: {
        login() {

            // this.$api.login(this.loginForm).then((res) => {
            //   console.log(res)
            // }).catch(err => {
            //     console.log(err)
            // })
            this.$store.dispatch('user/login', this.loginForm)
                .then(res => {
                    this.$Router.pushTab({
                        name: 'home'
                    })
                })
        }
    }
}
</script>

<style lang="scss">
	.container {
		padding: 20px;
		font-size: 14px;
		line-height: 24px;
	}

	.status-bar {
		bottom: calc(var(--window-bottom) + 10px);
		width: 100%;

		>text {
			color: red;
		}
	}
</style>
