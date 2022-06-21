<template>
	<div class="container">
		<div class="top_content">
			<div class="back_box">
				<img class="index_back" src="../../static/index_back.png">
				<div class="back_text">
					<div class="title">2022年05月工资条</div>
					<div class="money">99999</div>
					<div class="toast_big">实发金额</div>
					<div class="toast_small">温馨提示：工资条属于绝密文件，请勿泄露</div>
				</div>
			</div>
			<div class="user_name_box">
				<div class="menu_item">
					<div class="label">姓名</div>
					<div class="value">彪子</div>
				</div>
			</div>
		</div>
		<div class="bottom_content">
			<div class="content_list">
				<div class="menu_item">
					<div class="label">工号</div>
					<div class="value">彪子</div>
				</div>
				<div class="menu_item">
					<div class="label">基本工资</div>
					<div class="value">彪子</div>
				</div>
				<div class="menu_item">
					<div class="label">职级工资</div>
					<div class="value">彪子</div>
				</div>
				<div class="menu_item">
					<div class="label">工龄补贴</div>
					<div class="value">彪子</div>
				</div>
				<div class="menu_item">
					<div class="label">加班工资补贴</div>
					<div class="value">彪子</div>
				</div>
				<div class="menu_item">
					<div class="label">扣款</div>
					<div class="value">彪子</div>
				</div>
			</div>
			<div class="buttons">
				<div class="button doubt">对工资有疑问?</div>
				<div class="button confirm">确认签字</div>
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
		}
	}
	.bottom_content{
		background-color: #ffffff;
		flex:1;
		display: flex;
		flex-direction: column;
		align-items: center;
		.content_list{
			background-color: #ffffff;
			width: 345px;
			flex: 1 1 auto;
			height: 0;
			overflow-y: scroll;
			display: flex;
			flex-direction: column;
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
		padding: 25px 15px;
		display: flex;
		justify-content: space-between;
		font-size: 14px;
		.label{
			color: #666666;
		}
		.value{
			color: #333333;
		}
	}
}
</style>
<script>
	export default{
		
	}
</script>