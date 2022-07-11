<template>
	<div class="container">
		<div class="top_content">
			<div class="back_box">
				<img class="index_back" src="../../static/index_back.png">
				<div class="back_text">
					<div class="title">{{userInfo.title}}</div>
					<div class="money">{{userInfo.fsalary}}</div>
					<div class="toast_big">实发金额</div>
					<div class="toast_small">温馨提示：{{userInfo.remark}}</div>
				</div>
			</div>
			<div class="user_name_box">
				<div class="menu_item">
					<div class="label">姓名</div>
					<div class="value">{{userInfo.name}}</div>
				</div>
			</div>
		</div>
		<div class="bottom_content">
			<div class="content_box">
				<div class="content_list">
					<div class="menu_item" v-for="item in userInfo.list">
						<div class="label">{{item.title}}</div>
						<div class="value">{{item.value}}</div>
					</div>
				</div>
			</div>
			<div class="buttons">
				<div class="button doubt" @click="showModel = true">对工资有疑问？</div>
				<div class="button confirm" @click="signFn">{{this.userInfo.affirm == '0'?'确认签字':'已签字'}}</div>
			</div>
		</div>
		<div class="model_container" v-if="showModel">
			<div class="model_content">
				<img class="model_img" src="../../static/model_img.png">
				<div class="content">
					<div class="toast">不要着急哦，工资有疑问</div>
					<div class="toast">请联系薪资管理员</div>
					<div class="buttons">
						<div class="button cancel" @click="showModel = false">取消</div>
						<div class="button confirm" @click="openChat">去联系</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<style lang="less" scoped>
.container{
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	.top_content{
		position: relative;
		width: 100%;
		height: 290px;
		.back_box{
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			overflow: hidden;
			.index_back{
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 308px;
			}
			.back_text{
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 308px;
				display: flex;
				flex-direction: column;
				align-items: center;
				color: #ffffff;
				.title{
					font-size: 18px;
					margin-top: 55px;
					font-weight: 500;
				}
				.money{
					margin-top: 26px;
					font-size: 38px;
					font-weight: bold;
				}
				.toast_big{
					margin-top: 8px;
					font-size: 14px;
				}
				.toast_small{
					margin-top: 8px;
					font-size: 12px;
				}
			}
		}
		.user_name_box{
			position: absolute;
			bottom: 0;
			left: 50%;
			transform: translate(-50%);
			width: 345px;
			border-radius: 8px 8px 0 0;
			background-color: #ffffff;
			padding-left: 10px;
			padding-right: 10px;
		}
	}
	.bottom_content{
		background-color: #ffffff;
		flex:1;
		display: flex;
		flex-direction: column;
		align-items: center;
		.content_box{
			width: 345px;
			flex: 1 1 auto;
			height: 0;
			overflow-y: scroll;
			.content_list{
				background-color: #ffffff;
				width: 345px;
				display: flex;
				flex-direction: column;
				padding-left: 10px;
				padding-right: 10px;
			}
		}
		
		.buttons{
			height: 66px;
			width: 345px;
			display: flex;
			align-items: center;
			justify-content: space-between;
			.button{
				border:1px solid #4374F4;
				border-radius: 20px;
				width: 160px;
				text-align: center;
				height: 40px;
				line-height: 39px;
				font-size: 14px;
				font-weight:bold;
			}
			.doubt{
				color: #4374F4;
			}
			.confirm{
				background-color: #4374F4;
				color: #ffffff;
			}
		}
	}
	.menu_item{
		border-bottom: 1px solid #e8e8e8;
		padding: 25px 5px;
		display: flex;
		justify-content: space-between;
		font-size: 14px;
		.label{
			margin-right: 10px;
			color: #666666;
		}
		.value{
			flex:1;
			text-align: end;
			color: #333333;
			word-break: break-all;
			text-overflow: ellipsis;
			overflow: hidden;
			display: -webkit-box;
			-webkit-line-clamp: 1;
			-webkit-box-orient: vertical;
		}
	}
	.model_container{
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background:rgba(0,0,0,0.49);
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		.model_content{
			position: relative;
			width: 296px;
			height: 216px;
			.model_img{
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
			}
			.content{
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				padding-top: 84px;
				.toast{
					margin-bottom: 8px;
					width: 100%;
					text-align: center;
					font-size: 16px;
					font-weight: 500;
					color: #333333;
				}
				.buttons{
					padding-left: 20px;
					padding-right: 20px;
					margin-top: 18px;
					display: flex;
					justify-content: space-around;
					.button{
						border-radius: 20px;
						width: 120px;
						text-align: center;
						height: 40px;
						line-height: 39px;
						font-size: 14px;
					}
					.cancel{
						background-color: #F8F8F8;
						color: #333333;
					}
					.confirm{
						background-color: #4374F4;
						color: #ffffff
					}
				}
			}
		}
	}
}
</style>
<script>
	import * as dd from 'dingtalk-jsapi';
	export default{
		data(){
			return{
				showModel:false,	//弹窗
			}
		},
		computed:{
			userInfo(){
				return this.$store.state.userInfo;
			}
		},
		methods:{
			//去联系
			openChat(){
				dd.ready(() => {
					dd.biz.chat.openSingleChat({
    					corpId: 'ding7828fff434921f5b', // 企业id,必须是用户所属的企业的corpid
    					userId:this.userInfo.user_id, // 用户的uerid
    					onSuccess : () => {
    						this.showModel = false;
    					},
    					onFail : function() {}
    				})
				})
			},
			//去签字
			signFn(){
				window.open(this.userInfo.sing_address);
			}
		}
	}
</script>















