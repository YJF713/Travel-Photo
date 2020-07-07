<template>
  <div>
    <div class="footer">
			<div class="footer-top">
					<div class="container">
						<ul>
							<li><router-link to="/about">关于</router-link></li>
							<li><router-link to="/gallery">画廊</router-link></li>
							<li><router-link to="/codes"> 评论</router-link></li>
							<li><router-link to="contact">联系</router-link></li>
						</ul>
					</div>
				</div>
				<div class="footer-middle">
					<div class="container">
						<div class="col-md-6 col-sm-6 fl">
							<div class="col-md-5 col-sm-5 footer-middlel">
								<h3><span class="e">E</span>Travel Photo</h3>
							</div>
							<div class="col-md-4 col-sm-4 footer-middlem">
								<h4>上海</h4>
								<h5>345路 嘉兴</h5>
								<h5>中国</h5>
								<h5>上海</h5>
								<h5>155 1234 5675</h5>
							</div>
							<div class="col-md-3 col-sm-3 footer-middler">	
								<h4>郑州</h4>
								<h5>公寓编号42/16</h5> 
								<h5>河南 郑州 </h5>
								<h5>郑州</h5>
								<h5>158 1918 6914</h5>
							</div>
						</div>
						<div class="col-md-6 col-sm-6 fr">
							<div class="touch">
							
								<form action="#" method="post">
									<input type="text" name="your email" placeholder="你的邮箱">
									<input type="submit" value="注册">
								</form>
							</div>
							<div class="social-icons">
								<router-link to=""><i class="fa fa-google-plus" aria-hidden="true"></i></router-link>
								<router-link to=""><i class="fa fa-twitter" aria-hidden="true"></i></router-link>
								<router-link to=""><i class="fa fa-linkedin" aria-hidden="true"></i></router-link>
								<router-link to=""><i class="fa fa-vimeo" aria-hidden="true"></i></router-link>
								<router-link to=""><i class="fa fa-dribbble" aria-hidden="true"></i></router-link>
							</div>
						</div>
						<div class="clearfix"></div>
					</div>
				</div>
				<div class="footer-bottom">
					<div class="container">
						<p class="agileinfo">版权所有©繁星旅拍.公司名称保留所有权利。更多信息从<router-link to="" target="_blank">@繁星.</router-link>获取 <router-link to="" target="_blank">@繁星.</router-link></p>
					</div>
				</div>
		</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    
    }
  }
}
</script>

<style scoped>

</style>