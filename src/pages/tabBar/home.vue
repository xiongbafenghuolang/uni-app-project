<template>
	<view class="content">
		<u-action-sheet :list="list" v-model="show"></u-action-sheet>
		<u-button type="default" @tap="clickShow">弹出</u-button>
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
</style>
