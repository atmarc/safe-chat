<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  beforeCreate () {
    let userId, userName
    try {
      userId = localStorage.getItem('userId')
      userName = localStorage.getItem('userName')
    }
    catch {
      console.log('Error accessing to localStorage!')
    }
    if (!userId || !userName) {
      this.$router.push('login')
    }
  }
}
</script>
