<template>
  <div>
      <div id="portfolio" class="portfolio">
		<div class="container">
			<h1>客照欣赏</h1>
			<div class="sap_tabs">			
				<div id="horizontalTab" style="display: block; width: 100%; margin: 0px;">
					<ul class="resp-tabs-list">
						<li class="resp-tab-item resp-tab-active" aria-controls="tab_item-0" role="tab"><span>所有</span></li>
						<li class="resp-tab-item" aria-controls="tab_item-1" role="tab"><span>女人</span></li>
						<li class="resp-tab-item" aria-controls="tab_item-2" role="tab"><span>现代</span></li>
						<li class="resp-tab-item" aria-controls="tab_item-3" role="tab"><span>时尚</span></li>
						<li class="resp-tab-item" aria-controls="tab_item-4" role="tab"><span>其他</span></li>					
					</ul>	
					<div class="clearfix"> </div>	
					<div class="resp-tabs-container">
						<h2 class="resp-accordion resp-tab-active" role="tab" aria-controls="tab_item-0"><span class="resp-arrow"></span>All</h2><div class="tab-1 resp-tab-content resp-tab-content-active" style="display:block" aria-labelledby="tab_item-0">
							<div class="categorie-grids cs-style-1">
								<div class="col-md-4 cate-grid grid" v-for="index in 12" :key="index">
										<img :src="'../../static/img/gallery/'+index+'.jpg'">
								 </div>
							</div>
						</div>
					</div>						
				</div>
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