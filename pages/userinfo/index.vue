<template>
   <v-app>
     <UserInfo/>
     
   </v-app>
</template>


<script>
import UserInfo from '@/components/UserInfo.vue'
export default {
 layout:"empty",
  components: { 
    UserInfo }
 }
</script>