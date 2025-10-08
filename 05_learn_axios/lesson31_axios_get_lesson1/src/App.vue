<template>
  <div>
     <button @click="handleClick">获取数据</button>
	 <!-- <p>{{Object.keys(data).length===0?"点击上面的按钮获取数据":data}}</p> -->
	  <p>{{isNull?"点击上面的按钮获取数据":data}}</p>
  </div>
</template>

<script setup>
   import { reactive ,computed} from 'vue';	
   import axios from 'axios';
   
   let data = reactive({})
   
   let handleClick = async ()=>{
	  //  axios.get("https://httpbin.org/get?id=12345")
	  //       .then(res=>{
			// 	data.value = res
			// })
			// .catch(err=>{
			// 	console.log(err);
			// })  
			// .finally(()=>{
			// 	console.log("请求完成...");
			// }) 
			
			const options = {
			  method: 'GET',
			  url: 'https://imdb236.p.rapidapi.com/api/imdb/cast/nm0000190/titles',
			  headers: {
			    'x-rapidapi-key': '8c9350fbbcmsh311785d6a1987fcp1dc3f9jsnd6b9ac6f7798',
			    'x-rapidapi-host': 'imdb236.p.rapidapi.com'
			  }
			};
			
			try {
				const response = await axios.request(options);
				console.log(response.data);
			} catch (error) {
				console.error(error);
			}
			
			
   }
   //计算属性
   let isNull = computed(()=>{
	   return Object.keys(data).length===0
   })
   
</script>

<style scoped>

</style>
