<template>
	<view class="content">
		<u-action-sheet :list="list" v-model="show"></u-action-sheet>
		<u-button type="default" @tap="clickShow">弹出</u-button>
		<!-- 字体图标 -->
		<text class="iconfont icon-send"></text>
		<text class="iconfont icon-weixinhaoyou"></text>
		<!-- uni-app引入彩色图标 -->
		<text class="t-icon t-icon-send"></text>
		<text class="t-icon t-icon-weixinhaoyou"></text>
	</view>
</template>

<script>
export default {
    data() {
        return {
            list: [{
                text: '点赞',
                color: 'blue',
                fontSize: 28
            }, {
                text: '分享'
            }, {
                text: '评论'
            }],
            show: false
        }
    },
    methods: {
        clickShow() {
            this.show = true
        }
    },
}
</script>

<style lang="scss">
	.icon-send {
		color: red;
	}
</style>
