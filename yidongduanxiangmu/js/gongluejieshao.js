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
			remenshipin: "热门视频",
			ri: "日",
			zhou: "周",
			yue: "月",
			riullione: "1.【百星王者带你飞】第83期：团战终结者，一拳超人达摩细节教学",
			riullier: "2.【上分拍档】第74期：黑暗李信+苏烈 无畏冲锋，横扫千军",
			riullisan: "3.宫本武藏说他是国服，亚瑟：打的就是国服，服不服？",
			riullisi: "4.王者荣耀：夕阳李白教你如何秀极限操作，不秀不李白",
			riulliwu: "5.鸡哥教你骚操作：第89期，安琪拉定律，再也不怕安琪拉了",
			riulliliu: "6.【上分拍档】第75期：扁鹊+蔡文姬 双奶合璧 超长续航",
			riulliqi: "7.鸡哥教你骚操作：第94期，干将莫邪懒人打野小技巧，走最少的路",
			riulliba: "8.体验服：云中君PK6万血量的主宰，这个大招真香，坦克也扛不了",
			riullijiu: "9.【王者百星笔记】第12期：一脚定乾坤达摩",
			riullishi: "10.【快速上手英雄技能】盘古",
			riullionespanone: "159.9万",
			riullionespantwo: "8:36",
			shijian:"2019-4-6",
			bodythreetop:"英雄攻略",
			rithree: true,
			ritwo: false,
			zhouthree: false,
			zhoutwo: false,
			yuethree: false,
			yuetwo: false,
			chakantwo: true,
			shouqi: false,
			remen: "热门",
			xianmian: "限免",
			erjione: false,
			zhankai: true,
			shouqitwo: false,
			erjioneleftone: true,
			erjionelefttwo: false,
			erjioneleftthree: false,
			xiaoqiao: "小乔",
			luban: "鲁班",
			zhuangzhou: "庄周",
			libai: "李白",
			liubang: "刘邦",
			sunwukong: "孙悟空",
			houyi: "后羿",
			guiguzi: "鬼谷子",
			kai: "凯",
			change: "嫦娥",
			pangu: "盘古",
			tanke: "坦克",
			zhanshi: "战士",
			cike: "刺客",
			fashi: "法师",
			sheshou: "射手",
			fuzhu: "辅助",
			bodythreedengchang: "登场排名",
			bodythreeshenglu: "胜率排名",
			bodythreejieshao: "查看英雄详细介绍>",
			bodythreejineng: "【快速上手英雄技能】后羿",
			bodythreerongyao: "【王者荣耀】英雄介绍：后羿",
			bodythreebottomthreelingdu: "零度带你飞40：半神之弓后羿，灼日之矢破苍穹",
			bodythreebottomthreelingbenqi: "本期视频，零度老师给我们带来的是...",
			bodythreegang: "刚刚",
			bodythreebottomthreesisan: "【上分拍档】第43期 ：后羿+明世隐 连接加成",
			bodythreebottomthreelangyuxin: "本期带来国服知名射手大神浪余心...",
			bodythreebottomfourjiazai: "加载更多",
			bodythreebottomfourgonglue: "攻略内容",
			bodyfouretop:"精品栏目",
			bodyfourzuixin:"最新",
			bodyfourneirong:"内容",
			bodyqidi:"点击查看更多",
			saishijingpin:"赛事精品",
			bodyfoureone:"百星王者带你飞",
			bodyfoureer:"峡谷情报局",
			bodyfouresan:"零度王者视角",
			bodyfouresi:"峡谷重案组3",
			bodyfourewu:"王者克制论",
			bodyfiveone:"王者炸麦了",
			bodyfivetwo:"kpL观赛指南",
			bodyfivesan:"荣耀进行时",
			bodyfivesi:"大葱哥聊kpL",
			bodyfivewu:"王者职业教学",
			bodysixtop:"精彩视频",
			bodysixone:"王者时刻",
			bodysixtwo:"王者学院",
			bodysixsan:"新手视频",
			bodysixsi:"官方视频",
			bodyqitop:"图文攻略",
			bodyqione:"英雄",
			bodyqisan:"新手",
			bodyqisi:"官方",
			bodyqiwu:"同人"
			

		}
	},
	methods: {
		rione: function() {
			this.rithree = true;
			this.zhouthree = false;
			this.yuethree = false;
		},
		zhouone: function() {
			this.rithree = false;
			this.zhouthree = true;
			this.yuethree = false;
		},
		yueone: function() {
			this.rithree = false;
			this.zhouthree = false;
			this.yuethree = true;
		},
		chakanone: function() {
			this.ritwo = true;
			this.zhoutwo = true;
			this.yuetwo = true;
			this.chakantwo = false;
			this.shouqi = true;

		},
		shouqione: function() {
			this.ritwo = false;
			this.zhoutwo = false;
			this.yuetwo = false;
			this.chakantwo = true;
			this.shouqi = false;

		},
		zhankaione: function() {
			this.zhankai = false;
			this.shouqitwo = true;
			this.erjione = true;

		},
		shouqier: function() {
			this.zhankai = true;
			this.shouqitwo = false;
			this.erjione = false;
		},
		remenyi:function(){
			this.erjioneleftone=true;
			this.erjionelefttwo=false;
			this.erjioneleftthree=false;
		},
		tankeone:function(){
			this.erjioneleftone=false;
			this.erjionelefttwo=true;
			this.erjioneleftthree=false;
		},
		zhanshione:function(){
			this.erjioneleftone=false;
			this.erjionelefttwo=false;
			this.erjioneleftthree=true;
		},
		cikeone:function(){
			this.erjioneleftone=true;
			this.erjionelefttwo=false;
			this.erjioneleftthree=false;
		},
		fashione:function(){
			this.erjioneleftone=true;
			this.erjionelefttwo=false;
			this.erjioneleftthree=false;
		},
		sheshouone:function(){
			this.erjioneleftone=true;
			this.erjionelefttwo=false;
			this.erjioneleftthree=false;
		},
		fuzhuone:function(){
			this.erjioneleftone=true;
			this.erjionelefttwo=false;
			this.erjioneleftthree=false;
		}
		

	}

})