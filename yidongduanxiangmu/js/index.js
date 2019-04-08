var vue = new Vue({
	el: "#wrap",
	data: function() {
		return {
			wangzhe: "王者荣耀",
			tuandui: "团队成就更多",
			denglu: "立即下载",
			shouye: "首页",
			gonglue: "攻略中心",
			caishi: "赛事中心",
			baoliaozhan: "爆料站",
			gushizhan: "故事站",
			shangcheng: "商城",
			tiyanfu: "体验服",
			xinrenqu: "新人区",
			rongyao: "荣耀",
			tongrenshe: "同人社",
			wangzheyingdi: "王者营地",
			xinwenzixun:"新闻资讯",
			remen:"热门",
			xinwen:"新闻",
			gonggao:"公告",
			huodong:"活动",
			saishi:"赛事",
			gonggaoneirong:"关于活动【鹿灵少女的邀约】微信侧分享异常问题说明...",
			shijian:"04/05",
			yingxiongliebiao:"英雄列表",
			zhanshi:"战士",
			fashi:"法师",
			tanke:"坦克",
			cike:"刺客",
			sheshou:"射手",
			fuzhu:"辅助",
			jingcaishipin:"精彩视频",
			jingcailanmu:"精品栏目",
			yingxionggonglue:"英雄攻略",
			saishijingpin:"赛事精品",
			saishishipin:"赛事视频",
			shipinneirongone:"小棉花Top5：中单法王北笙参见！这操作让全场高喊666！",
			shipinneirongtwo:"小棉花Top5：我是最强赵云童子！我觉得我这波天秀！",
			jiazai:"加载更多",
			tuwen:"图文攻略",
			zuixin:"最新",
			yingxiong:"英雄",
			xinshou:"新手",
			guanfang:"官方",
			tongren:"同人",
			wangzheneirongone:"王者荣耀：后羿最佳出装推荐，超高...",
			wangzheneirongtwo:"王者荣耀：后羿最佳出装推荐，超高输出团灭对方!",
		}
	},
	methods: {
		
	}

});
var mySwiper = new Swiper('.swiper-container', {
	loop: true, // 循环模式选项
	autoplay: true,
	autoplayDisableOnInteraction: false,
	// 如果需要分页器
	pagination: {
		el: '.swiper-pagination',
	}
})