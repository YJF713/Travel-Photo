<template>
  <div>
        <div class="container">	
          <h1 class="tittle">简<span class="jie">介</span></h1>
				<div class="article-post two">
				   <div class="col-md-3 post-meta">
						<div class="clearfix"> </div>
				  </div>
				<div class="col-md-9 post-details s-page">
				  <router-link to="" class="mask"><img src="../assets/images/single.jpg" alt="image" class="img-responsive zoom-img"></router-link>
					<router-link to=""><h4>请你慢下脚步，了解一下我们的风采。</h4></router-link>
					<p v-for="(mask,index) in masks" :key="index" :class="mask.eget==2?'eget':''">
            {{mask.txt}}
          </p>
				</div>
				<!--post-details-->	
				<div class="clearfix"> </div>
				</div>	


		   <div class="top-single">
			    <div class="single-middle">
				  <ul class="social-share">
					<li><span>SHARE</span></li>
					<li><router-link to=""><i></i></router-link></li>						
					<li><router-link to=""><i class="tin"> </i></router-link></li>
					<li><router-link to=""><i class="message"> </i></router-link></li>				
				</ul>
				<router-link to=""><i class="arrow"></i></router-link>
				<div class="clearfix"> </div>
			</div>

			<div class="top-comments">
			<h3>最新评论</h3>
			<div class="met" v-for="com in comments" :key="com" :class="com.metIn==2?'met-in':''">
				<div class="code-in">
					<p class="smith">{{com.smith}}<span>{{com.time}}</span></p>
					<div class="clearfix"></div>
				</div>
				<div class="comments-top-top" :class="com.metIn==2?'top-in':''">
					<div class="men">
						<span class="glyphicon glyphicon-user"></span>
					</div>					
						<p class="men-it" :class="com.metIn==2?'two':''">{{com.menIt}}</p>
					<div class="clearfix"> </div>
				</div>
			</div>
			</div>
		<div class="leave">
			<h3>你的评价</h3>
				<form>
					<div class="single-grid">
						<div class="single-us">
							<input type="text" value="名字：">
							<input type="text" value="邮箱：">
							<textarea value=" ">评论：</textarea>
							<input type="submit" value="发送">
						</div>
				</div>
				</form>

			</div>			
		</div>
	</div>
	<br>
</div>
</template>

<script>
export default {
  data () {
    return {
    comments:[
        {
          metIn:1,
          smith:'丽江旅拍 给大家安利旅拍',
          time:'2020/04/13-14：12',
          menIt:'一直都向往丽江，借着拍照的时间也一并将丽江玩了个遍，这也多亏了我们所选择的团队--繁星旅拍'+
							'当然，此行还是以拍照为主，最终也收获了很满意的照片。'

        },
        {
          metIn:2,
          smith:'深圳旅拍 感谢繁星旅拍的用心',
          time:'2020/04/18-5:20',
          menIt:'如果有机会，走远一点的地方去拍照真的是一件很棒的事情，尤其选择了繁星旅拍，更让我们这趟深圳'+
							'旅拍之旅更加完美了。'
        },
        {
          metIn:1,
          smith:'文艺厦门之旅',
          time:'2020/05/07-09：32',
          menIt:'在厦门这个文艺味十足的城市里拍摄真是件再美好不过的事儿了。'+
							'我们在朋友的推荐下也选择了繁星旅拍负责我们这一次的拍摄，没有让我们失望哦，这是个很棒的摄影团队哦。'
        }
      ],
      masks:[
          {
            eget:1,
            txt:`旅拍目的地覆盖全球112国
              繁星旅拍专注摄影23年，总部设立于厦门，旅拍目的地覆盖<b>全球112国</b>。 
              分店遍布：厦门、三亚、北京、丽江、大理、青岛、大连、成都、深圳、广州、香港、澳门、桂林、杭州、香格里拉、
              普吉岛、巴厘岛、马尔代夫、日本、巴黎、普罗旺斯、希腊、布拉格、瑞士、罗马、威尼斯、伦敦、佛罗伦萨、巴塞罗那、葡萄牙、荷兰、土耳其、冰岛等全球各地。
            `
          },
          {
            eget:2,
            txt:`
            <b>越来越多的明星</b>选择繁星旅拍
						，李诞&黑尾酱，向佐&郭碧婷、陈晓&陈妍希，
						包贝尔&包文婧戴向宇&陈紫函，谢苗&何彦霓，邹市明&冉莹颖，田亮&叶一茜，沙溢&胡可，陈晓东&程莎莉聂远&秦子越、于晓光&秋瓷炫等
						<b>众多明星</b>夫妇都选择繁星旅拍，为繁星旅拍实力见证。
            `
          },
          {
            eget:'2',
            txt:`
             繁星旅拍受腾讯视频，爱奇艺，芒果TV，优酷，搜狐视频等各<b>大平台综艺节目</b>邀约，担任明星指定旅拍官，先后合作及拍摄《小姐姐的花店》、《青春的花路》、《女儿们的恋爱》《青春有你》、《妻子的浪漫旅行》、《我最爱的女人们》、《喜欢你我也是》
					  《吐槽大会》、《幸福三重奏》等	<b>二十余档热播综艺节目</b>，让旅拍融入生活。
            `
          }
      ]
    }
  }
}
</script>

<style scoped>
	.tittle{
		margin-top: 20px;
		color: deeppink;
	}
	.jie{
		font-size: 24px;
	}
</style>