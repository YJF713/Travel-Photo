<template>
  <div>
    <div class="about">
			<div class="container">
				<div class="col-md-6 col-sm-6 about-left">
					<img src="../assets/images/about.jpg">
				</div>
				<div class="col-md-6 col-sm-6 about-right">
					<h4>繁星旅拍，抢先开启2O电商模式，荣获阿里巴巴本地生活旅拍行业连续7年天猫成交量冠军。率先采用自媒体组合营销策略，率先采用自媒体组合营销策略</h4>
					<p>
						微博粉丝超500万，微信粉丝超200万，抖音粉丝超500万
						“双微一抖”粉丝量在行业中持续领先
						随着数码摄影逐渐兴起，从早期的室内拍摄，到自然外景拍摄，
						繁星旅拍紧跟时代，创“无际风”摄影手法，抢占行业制高点。
						为满足当下年轻人对个性照的需求，繁星旅拍颠覆传统摄影模式，
						将“度蜜月”和“拍照”合二为一，开辟“旅拍”新纪元。</p>
					<router-link to="./single" class="hvr-shutter-in-horizontal">评论</router-link>
				</div>
				<div class="clearfix"></div>
			</div>
		</div>
		<div class="about-bottom">
			<div class="container">
				<h1>我们的特点</h1>

				<div class="col-md-6 col-sm-6 icon" :class="icon+'(index+1)'" v-for="(cont,index) in container" :key="index">
					<div class="col-md-2 col-sm-2 icon-sym">
						<i class="fa" :class="cont.fa" aria-hidden="true"></i>
					</div>
					<div class="col-md-10 col-sm-10 icon-text">
						<h5>{{cont.h}}</h5>
						<p>{{cont.p1}}</p>
						<p>{{cont.p2}}</p>
					</div>
					<div class="clearfix"></div>
				</div>

			</div>
		</div>
		<div class="team">
						<div class="container">
							<h3>我们的队伍</h3>

							<div v-for="(troop,index) in troops" :key="index"  :class="'col-md-3 col-sm-3 team-grids team-grid1'+(index+1)">
								<img :src="troop.img" >
								<h4>{{troop.name}}</h4>
								<h5>{{troop.trait}}</h5>
								<router-link  to='#'><i class="fa fa-google-plus" aria-hidden="true"></i></router-link>
								<router-link  to='#'><i class="fa fa-twitter" aria-hidden="true"></i></router-link>
								<router-link  to='#'><i class="fa fa-linkedin" aria-hidden="true"></i></router-link>
							</div>
							<div class="clearfix"></div>
						</div>
		</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
		// 我们的队伍
		troops:[
			{
				img:'../../static/img/about/t1.jpg',
				name:'Amy Cruise',
				trait:'时装设计师'
			},
			{
				img:'../../static/img/about/t2.jpg',
				name:'Priscila Chan',
				trait:'创意师'
			},
			{
				img:'../../static/img/about/t3.jpg',
				name:'Kristin Stewart',
				trait:'展会组织者'
			},
			{
				img:'../../static/img/about/t4.jpg',
				name:'Eva Paradise',
				trait:'彩妆大师'
			}
		],
		// 我们的特点
		container:[
			{
				fa:'fa-glass',
				h:'演绎国风美学 传承东方气韵',
				p1:'提炼东方元素，全新演绎东方美学',
				p2:'刷新朋友圈的国潮风'
			},
			{
				fa:'fa-yelp',
				h:'明显同款|东方国色',
				p1:'金丝银线手袖款，明星同款',
				p2:'全新演绎东方神韵！'
			},
			{
				fa:'fa-asterisk',
				h:'潮人必拍|嘻哈国风',
				p1:'刺绣华服与古风折扇',
				p2:'潮人必拍的国风照'
			},
			{
				fa:'fa-star',
				h:'繁星旅拍，中国旅拍领军品牌',
				p1:'咨询热线：400-6677-500（在线时间：09:00-22:00）',
				p2:''
			}
		]
			 
    }
  }
}
</script>

<style scoped>

</style>