<template>
  <div>
     <!-- Praising pain  -->
   <div class="creative agileits">
			<div class="col-md-3 col-sm-3 creative-left">
			</div>
			<div class="col-md-6 col-sm-6 creative-right">
				<h3>只有你想不到的地方，没有找不到的地方！</h3>
				<p>繁星旅拍相信大家早已耳熟能详了，没错繁星旅拍凭借近几年的快速发展已成为婚纱摄影领域的一批黑马。在三亚，厦门，丽江，青岛，大理，普吉岛等全球多个地点均已开设分店。
					并且繁星旅拍推荐的全球十强知名摄影工作室排行榜，新人们应该会觉得婚纱蜜月旅拍是一个非常不错的选择，赶紧行动起来，留下美好的纪念吧。 </p>
				<div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
					<div class="panel panel-default" v-for="(head,index) in heading" :key="index">
						<div class="panel-heading" role="tab" :id="head.id">
							<h4 class="panel-title asd">
								<i class="fa fa-bell" aria-hidden="true"></i>
								<!--  -->
								<span class="pa_italic " @click="coll(index)"  :class="head.call?'collapsed':''" role="button" data-toggle="collapse" data-parent="#accordion" 
								:aria-expanded="head.val==2?'true':'false'" :aria-controls="head.pse">
									 {{head.txt1}}<span class="glyphicon glyphicon glyphicon-chevron-up" aria-hidden="true"></span>
								</span>
							</h4>
						</div>
						<!--  -->
						<div  :id="head.pse" class="panel-collapse collapse" :class="head.call?'':'in'" role="tabpanel" :aria-labelledby="head.id" :style="head.val==2?'height: 0px;':''">
							<div class="panel-body panel_text">
							<div class="scrollbar" id="style-2">
								{{head.txt2}}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="col-md-3 creative-last">
			</div>
			<div class="clearfix"></div>
		</div>

    <!-- Praising pain 结束 -->

    <!-- watch -->
    <div class="video">
			<h3>快速了解我们</h3>
			<router-link to="#" data-toggle="modal" data-target="#modalvideo"><i class="fa fa-play" aria-hidden="true"></i></router-link>
				<div class="modal fade features-modal" id="modalvideo" tabindex="-1" role="dialog" aria-hidden="true">
					<div class="modal-dialog modal-lg">
						<div class="modal-content">
							<div class="modal-header">
								<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
							</div>
							<div class="modal-body">
								<iframe src=""></iframe>

							</div>
						</div>
					</div>
				</div>
				<p>繁星旅拍</p>
				<p>蝉联天猫7连冠</p>
				<p>旅拍目的地覆盖全球112国</p>
		</div>
    <!-- watch结束 -->
    <!-- roots开始 -->
    <div class="services">
			<div class="container">
			<h3>还躲在手机里看云旅行吗？再不出门春天就要走了</h3>
				<div class="col-md-6 col-sm-6 services-left w3agile">
					   <div  v-for="(txt,index) in txts" :key="index" :class="'service'+(index+1)" >
						<div class="col-md-2 col-sm-2 s-icon">
							<span class="glyphicon  hvr-icon-float-away" aria-hidden="true"></span>
						</div>
						<div class="col-md-10 col-sm-10 s-text">
								<h4>{{txt.t1}}</h4>
								<p>{{txt.t2}}</p>
              					 <p>{{txt.t3}}</p>
								<p>{{txt.t4}}</p>
						</div>
						<div class="clearfix"></div>
			 		 </div>
				</div>
				<div class="col-md-6 col-sm-6 services-right">
					<h4>#5.20放肆野 爱就趁现在</h4>
					<p>趁春风正好，国内疫情已近尾声，各大旅游风景区有序开放，全国上百个旅游景点面向全国游客免费开放。欠下的蜜月旅行
						你安排上了吗？是时候给自己51小时的长假安排一场说走就走的旅行了.</p>
					<router-link to="./single" class="hvr-shutter-in-horizontal" >参与评论</router-link>
				</div>
			</div>
		</div>
    <!-- roots结束 -->
  </div>
</template>

<script>
export default {
  data () {
    return {
		txts:[
		  {
			  t1:'放肆潮牌 劲爆升级 实力宠粉',
			  t2:'潮拍路线由你来定',
			  t3:'热门风景区不加价',
			  t4:'等你来feelstyle'
		  },
          {
			t1:'超高性价比套餐',
			t2:'国内旅拍城市任选 + 3天2夜酒店入住',
			t3:'接机/专车/底片全送/包邮',
			t4:'8服8造/5个框/2本相册'
		  },
		  {
			  t1:'5.20 礼遇 专属六千元豪礼',
			  t2:'明星体验课+加拍10张底片',
			  t3:'6寸风雅桌摆框+7寸风雅桌摆件',
			  t4:'8寸风雅桌摆件+1.6M海报'
		  }
		  ],
		  	heading:[
			  {
				  id:"headingOne",
				  call:false,
				  pse:'collapseOne',
				  txt1:'繁星旅拍婚纱照底片下载步骤非常简单 多久能拿到照片',
				  txt2:'首先，你可以用电脑登录会员系统，电脑中用浏览器登录官网，在首页右上角，有个会员登录，点击，输入你的账号密码就可以了。'+
								'登录会员系统，用电脑比较方便哦，记得目前要用电脑登录哦，这也方便拷贝。到底拍婚纱照最快多久能拿到照片呢？'+
							　　'1、拍完婚纱照什么时候选片?一般来说拍完婚纱照之后，2天到3天的时间就可以选片，旺季一般会3天到5天.'+
		  　　					'2、选片要选几次?到影楼选片一般都只有一次，但是在选照片的时候，新人们一般都会精挑细选，首先是粗粗过一遍，第二遍挑选比较好的，第三遍再精选。'+
							　　'3、照片精修要多长时间?一般照片精修的时间是比较长的，一张张的精修花费的时间和精力也是比较久的，如果精修的照片张数很多，那花费的时间会更长。一般要花费一周左右的时间，如果影楼生意比较好，　那还要排队等，时间会更久。'
				
				  },
			 	 {
					  id:'headingTwo',
					  call:true,
					  pse:'collapseTwo',
					  txt1:'婚纱照在结婚前多久拍比较好？',
					  txt2:'我们拍婚纱照都是要提前拍摄的，在结婚前（婚礼前），正常都是要提前两三个月拍摄，这样时间上面才不会很赶，我们要考虑到拍摄时间，选片、后期制作、邮寄时间等等，这段时间正常留个两个月是可以的，所以要结婚拍婚纱照的朋友一定得早点预订哦。' ,
				 }
				
			  ],
    }
  },
   methods:{
	 coll(index){
			if(index==0){
				this.heading[1].call=true
			}else{
				this.heading[0].call=true				
			}
			 this.heading[index].call=!this.heading[index].call
		}
  }
}
</script>

<style scoped>

</style>
