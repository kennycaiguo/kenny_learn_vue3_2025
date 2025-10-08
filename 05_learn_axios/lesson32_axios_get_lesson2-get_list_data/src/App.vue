<template>
  <div class="mb4">
     <el-button  @click="handleClick">获取数据</el-button> 
     <el-button type="primary" @click="addData2">新增数据</el-button>
	<!-- <ul v-if="len>0">
	 	<li v-for="user in tdata">Id:{{user.id}} - username:{{user.username}} - Email:{{user.email}}</li>
	 </ul> -->
	 <el-table :data="tdata" style="width: 100%">
	     <el-table-column fixed prop="id" label="ID" width="150" />
	     <el-table-column prop="name" label="Name" width="120" />
	     <el-table-column prop="username" label="userName" width="120" />
	     <el-table-column prop="email" label="Email" width="120" />
	     <el-table-column prop="address.street" label="Address" width="600" />
	     <el-table-column fixed="right" label="Operations" min-width="120">
	       <template #default>
	         <el-button link type="primary" size="small" @click="handleClick">
	           Detail
	         </el-button>
	         <el-button link type="primary" size="small">Edit</el-button>
	       </template>
	     </el-table-column>
	   </el-table>
  </div>
</template>

<script setup>
   import { ref,reactive ,computed} from 'vue';	
   import axios from 'axios';
   
   let tdata = reactive([])
   let len = ref(0)
   
   let handleClick = async ()=>{
	 
			const options = {
			  method: 'GET',
			  url: 'https://jsonplaceholder.typicode.com/users'
			};
			
			try {
				const response = await axios.request(options);
				// console.log(response.data);
				tdata = response.data
				console.log(tdata);
				len.value = tdata.length
			} catch (error) {
				console.error(error);
			}
			
			
   }
   
   let addData = async ()=>{
	   const options = {
	     method: 'POST',
	     // url: 'https://jsonplaceholder.typicode.com/posts',
	     url: 'https://httpbin.org/post',
		 body:JSON.stringify({
			 title: 'hello',
			 body: 'Message From axios!!!',
			 userId: 1,
		}),
		headers: {
		    'accept': 'application/json;',
		  }
	   };
	 //   const options = {
	 //     method: 'PATCH',
	 //     url: 'https://jsonplaceholder.typicode.com/posts/1',
		//  body:JSON.stringify({
		// 	 title: 'hello world',
		// })
	 //   };
	   try {
	   	let res = await axios.request(options);
		console.log(res);
	   } catch (error) {
	   	//TODO handle the exception
		console.log("出错啦...",error);
	   }
   }
   
   let addData2 = async ()=>{
	   fetch('https://jsonplaceholder.typicode.com/posts', {
	     method: 'POST',
	     body: JSON.stringify({
	       title: 'hello',
	       body: 'Welcome to my site',
	       userId: 1,
	     }),
	     headers: {
	       'Content-type': 'application/json; charset=UTF-8',
	     },
	   })
	     .then((response) => response.json())
	     .then((json) => console.log(json));
   }
</script>

<style scoped>

</style>
