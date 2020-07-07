<template>
  <div>
     <div class="header spcl-header">
				<div class="container">
					<div class="logo">
						<router-link to="/"><h2><span class="eh">E</span>Travel Photo</h2></router-link>
					</div>
					<!-- Navbar -->
					<div class="total-navbar">
						<nav class="navbar navbar-default">
							<div id="navbar" class="navbar-collapse navbar-right collapse hover-effect">
								<ul class="nav navbar-nav">
									<li class="active"><router-link to="/" class="hvr-wobble-skew">我们</router-link></li>
									<li><router-link to="/about"  class="hvr-wobble-skew">关于</router-link></li>
									<li><router-link to="/gallery" class="hvr-wobble-skew">画廊</router-link></li>
									<li><router-link to="/single" class="hvr-wobble-skew"> 评论</router-link></li>
									<li><router-link to="contact" class="hvr-wobble-skew">联系</router-link></li>
								</ul>
							</div>
						</nav>
					</div>
					<!-- //Navbar -->
				</div>
	</div>
  </div>
</template>

<script>
export default {
  name:'v-header',
  data () {
    return {
    
    }
  }
}
</script>

<style scoped>
 
</style>