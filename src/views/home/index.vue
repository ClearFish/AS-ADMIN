<template>
	<div class="layout-padding">
		<div class="container">
			<div class="top">
				<div class="top_left">
					<div class="banner">
						<img :src="Banner" alt="" />
					</div>
				</div>
				<div class="top_right"></div>
			</div>
			<div class="bottom">
				<div class="main_box">
					<p class="title">主要指数</p>
					<div class="content">
						<div class="main_item" v-for="(item, index) in mainList" :key="index">
							<div class="main_top">
								<div class="left">
									<img :src="item.icon" alt="" />
									<p class="name">{{ item.name }}</p>
								</div>
								<div class="right">
									<p class="status">{{ statusFiler[item.status] }}</p>
									<p class="time">{{ item.time }}</p>
									<p class="area">美国东部</p>
								</div>
							</div>
							<div class="main_bottom">
								<div class="left">
									<p class="value">{{ item.value }}</p>
									<div class="trend">
										<div class="trend_l">
											<img :src="UpIcon" alt="" v-if="item.label == '1'" />
											<img :src="DownIcon" alt="" v-else />
											<p class="trend_v" :style="item.label == '1' ? 'color:#098551' : 'color:#CF202F'">+{{ item.percent }}</p>
										</div>
										<p class="trend_lavel">+{{ item.change }}</p>
									</div>
								</div>
								<img :src="UpBg" alt="UpIcon" class="right" v-if="item.label == '1'" />
								<img :src="DownBg" alt="UpIcon" class="right" v-else />
							</div>
						</div>
					</div>
				</div>
				<div class="main_box market_box">
					<p class="title">市场指数</p>
					<div class="content">
						<div class="main_item" v-for="(item, index) in marketList" :key="index">
							<div class="main_top">
								<div class="left">
									<img :src="item.icon" alt="" />
									<p class="name">{{ item.name }}</p>
								</div>
								<div class="right">
									<p class="status">{{ statusFiler[item.status] }}</p>
									<p class="time">{{ item.time }}</p>
									<p class="area">美国东部</p>
								</div>
							</div>
							<div class="main_bottom">
								<div class="left">
									<p class="value">{{ item.value }}</p>
									<div class="trend">
										<div class="trend_l">
											<img :src="UpIcon" alt="" v-if="item.label == '1'" />
											<img :src="DownIcon" alt="" v-else />
											<p class="trend_v" :style="item.label == '1' ? 'color:#098551' : 'color:#CF202F'">+{{ item.percent }}</p>
										</div>
										<p class="trend_lavel">+{{ item.change }}</p>
									</div>
								</div>
								<img :src="UpBg" alt="UpIcon" class="right" v-if="item.label == '1'" />
								<img :src="DownBg" alt="UpIcon" class="right" v-else />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup name="home">
import Banner from '/@/assets/home/banner.png';
import UpBg from '/@/assets/home/up_bg.svg';
import DownBg from '/@/assets/home/down_bg.svg';
import ComIcon from '/@/assets/home/icon1.svg';
import UpIcon from '/@/assets/home/up_icon.svg';
import DownIcon from '/@/assets/home/down_icon.svg';
let mainList = ref([
	{ name: '纳斯达克', icon: ComIcon, status: 1, time: '2023-12-15', value: '1345.23', percent: '2.3%', change: '193.28', label: '1' },
	{ name: '纳斯达克', icon: ComIcon, status: 2, time: '2023-12-15', value: '1345.23', percent: '2.3%', change: '193.28', label: '2' },
	{ name: '纳斯达克', icon: ComIcon, status: 1, time: '2023-12-15', value: '1345.23', percent: '2.3%', change: '193.28', label: '1' },
]);
let statusFiler = ref({
	1: '已收盘',
	2: '已开盘',
});
let marketList = ref([
	{ name: '纳斯达克', icon: ComIcon, status: 1, time: '2023-12-15', value: '1345.23', percent: '2.3%', change: '193.28', label: '1' },
	{ name: '纳斯达克', icon: ComIcon, status: 2, time: '2023-12-15', value: '1345.23', percent: '2.3%', change: '193.28', label: '2' },
	{ name: '纳斯达克', icon: ComIcon, status: 1, time: '2023-12-15', value: '1345.23', percent: '2.3%', change: '193.28', label: '1' },
	{ name: '纳斯达克', icon: ComIcon, status: 1, time: '2023-12-15', value: '1345.23', percent: '2.3%', change: '193.28', label: '1' },
	{ name: '纳斯达克', icon: ComIcon, status: 2, time: '2023-12-15', value: '1345.23', percent: '2.3%', change: '193.28', label: '2' },
	{ name: '纳斯达克', icon: ComIcon, status: 1, time: '2023-12-15', value: '1345.23', percent: '2.3%', change: '193.28', label: '1' },
	{ name: '纳斯达克', icon: ComIcon, status: 1, time: '2023-12-15', value: '1345.23', percent: '2.3%', change: '193.28', label: '1' },
	{ name: '纳斯达克', icon: ComIcon, status: 2, time: '2023-12-15', value: '1345.23', percent: '2.3%', change: '193.28', label: '2' },
]);
</script>
<style lang="scss" scoped>
.layout-padding {
	.container {
		padding: 16px;
		border: 1px solid #e1e3e5;
		border-radius: 10px;
		background: #fff;
		height: 100%;
		overflow-y: auto;
		.top {
			display: flex;
			gap: 20px;
			.top_left {
				width: 752px;
			}
			.top_right {
				flex: 1;
				height: 160px;
				border-radius: 10px;
				border: 1px solid #e1e3e5;
			}
		}
		.bottom {
			margin-top: 10px;
			.title {
				font-family: PingFang SC;
				font-size: 24px;
				font-style: normal;
				font-weight: 400;
				line-height: 32px;
				color: #16171a;
			}
			.content {
				display: flex;
				justify-content: space-between;
				align-items: center;
				margin-top: 10px;
				.main_item {
					width: 32%;
					padding: 10px;
					border-radius: 10px;
					border: 1px solid #e1e3e5;
					.main_top {
						display: flex;
						justify-content: space-between;
						align-items: center;
						.left {
							display: flex;
							align-items: center;
							gap: 10px;
							img {
								width: 18px;
								height: 18px;
							}
							.name {
								color: #16171a;
								/* 加粗体/文本-14 */
								font-family: PingFang SC;
								font-size: 14px;
								font-style: normal;
								font-weight: 600;
								line-height: 22px;
							}
						}
						.right {
							display: flex;
							gap: 4px;
							align-items: center;
							color: #9ca8b8;
							text-align: right;
							/* 常规体/文本-12 */
							font-family: PingFang SC;
							font-size: 12px;
							font-style: normal;
							font-weight: 400;
							line-height: 18px;
						}
					}
					.main_bottom {
						margin-top: 16px;
						display: flex;
						justify-content: space-between;
						align-items: center;
						.left {
							.value {
								color: #16171a;
								font-family: Manrope;
								font-size: 24px;
								font-style: normal;
								font-weight: 600;
								line-height: 32px; /* 133.333% */
							}
							.trend {
								display: flex;
								.trend_l {
									display: flex;
									gap: 6px;
								}
								.trend_lavel {
									margin-left: 8px;
								}
							}
						}
					}
				}
			}
			.market_box {
				margin-top: 20px;
				.content {
					justify-content: flex-start;
					gap: 2%;
					flex-wrap: wrap;
					.main_item {
						margin-bottom: 16px;
					}
				}
			}
		}
	}
}
</style>
