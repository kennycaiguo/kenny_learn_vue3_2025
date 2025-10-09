<template>
  <div class="mb4">
     <el-button  @click="handleClick">获取数据</el-button> 
     <el-button type="primary" @click="addData2">新增数据</el-button>
	<!-- <ul v-if="len>0">
	 	<li v-for="user in tdata">Id:{{user.id}} - username:{{user.username}} - Email:{{user.email}}</li>
	 </ul> -->
	 <el-table :data="tableData" style="width: 100%">
		 <!-- 
		      fixed表示这个列是固定的,不会滚动
			  prop:需要显示的属性名称,prop需要和数据对象的属性一一对应
			  label:列标题 
		  -->
	     <el-table-column fixed prop="id" label="ID" width="150" /> <!—fixed表示这个列是固定的,不会滚动-->
	     <el-table-column prop="name" label="Name" /> <!—没有fixed表示这个列不是固定的,会滚动-->
	     <el-table-column prop="username" label="userName"/>
	     <el-table-column prop="email" label="Email" />
	     <el-table-column prop="address" label="Address"  />
	     <el-table-column fixed="right" label="Operations" min-width="120">
	       <template #default>
	         <el-button link type="primary" size="small" @click="showDetail">
	           Detail
	         </el-button>
	         <el-button link type="primary" size="small">Edit</el-button>
	       </template>
	     </el-table-column>
	   </el-table>
<!--	    {{tableData}} -->
	  
	
	    
  </div>
</template>

<script setup>
   import { ref,reactive ,computed} from 'vue';	
   import axios from 'axios';
   
   let tableData = reactive([])
   let len = ref(0)
   
   let handleClick = ()=>{
	 
		// const options = {
		//   method: 'GET',
		//   url: 'https://jsonplaceholder.typicode.com/users'
		// };
		
		 axios.get('https://jsonplaceholder.typicode.com/users')
			  .then(res=>{
				 // tableData = res.data  //不要使用=来直接赋值,否则可能不是响应式的数据,无法渲染.
				 for (let item of res.data){
					// console.log(item.address.street)
					// console.log(item.address.suite)
					// console.log(item.address.city)
					//需要做地址拼接
					let addr = item.address.city+","+item.address.street + ","+item.address.suite
					item.address = addr
					console.log(item.address);
				    tableData.push(item)
				 }
				  console.log(tableData)
			  })
			  .catch(err=>{
				  console.log(err);
			  })
			   
						
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
   
   let showDetail = ()=>{
	   
   }
</script>

<style scoped>

</style>
