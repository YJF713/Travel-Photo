<template>
  <div>
	<div class="contact">
			<div class="container">
				<h1>联系方式</h1>
				<div class="col-md-3 col-sm-3 contact-left">
					<div  v-for="(con,index) in contact" :key="index" :class="con.name">
						<h4>{{con.txt}}</h4>
						<h5>{{con.txt1}}</h5>
						<h5>{{con.txt2}}</h5>
					</div>
				</div>
			   	<div class="col-md-9 col-sm-9">
					<form action="#" method="post">
						<input v-for="(ins,index) in inputs" :key="index" type="text" :name="ins.name" :placeholder="ins.place">
						<textarea  name="your message" placeholder="你的信息"></textarea>
						<input type="submit" value="发送">
					</form>
				</div>

			</div>
		</div>

		<div class="map-w3ls">
		<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22702.22744502486!2d11.113366067229226!3d44.662878362361056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477fc3eca9065c15%3A0x12ec8a03aadae866!2s40019+Sant'Agata+Bolognese+BO%2C+Italy!5e0!3m2!1sen!2sin!4v1451281303075" allowfullscreen=""></iframe>
			<div class="special">
				<h4>OUR HEAD OFFICE</h4>
				<h5>345 Setwant natrer,</h5>
				<h5>Washington. United States.</h5>
				<h5>+1(804) 4261 150.</h5>
			
			</div>
	  </div>
	</div>
</template>

<script>
export default {
  data () {
    return {
		// 左侧
		contact:[
			{
				name:'address',
				txt:'地址',
				txt1:'上海嘉兴345路12号',
				txt2:'郑州幂佳公寓编号42/16'
			},
			{
				name:'phone',
				txt:'电话',
				txt1:'上海：155 1234 5675',
				txt2:'郑州：158 1918 6914'
			},
			{
				name:'email',
				txt:'邮箱',
				txt1:'example@gmail.com',
				txt2:'example2@yahoo.com'
				}
			],
			// 右侧
			inputs:[
				{
					name:'your name',
					place:'你的名字'
				},
				{
					name:'your email',
					place:'你的邮箱'
				},
				{
					name:'your subject',
					place:'你需要的主题'
				},
				{
					name:'your phone number',
					place:'你的电话'
				}
			]

    }
  }
}
</script>

<style scoped>

</style>