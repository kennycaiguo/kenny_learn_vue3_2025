<template>
  <div>
     <BaseLayout>
       <template #header>
         这里是header
       </template>
       <template #default>
         <div>
           <h3>主体内容</h3>
           <ul>
             <li>1</li>
             <li>2</li>
             <li>3</li>
             <li>4</li>
             <li>5</li>
           </ul>
         </div>
       </template>
       <template #footer>
         这里是footer
       </template>
     </BaseLayout>
  </div>
</template>

<script setup>
import BaseLayout from "./components/BaseLayout.vue";

</script>

<style scoped>

</style>
