<template>
  <div class="home">
    <friend-list :userId="userId" />
    <chat/>
  </div>
</template>

<script>
// @ is an alias to /src
import FriendList from '@/components/FriendList.vue'
import Chat from '@/components/Chat.vue'
import axios from 'axios'

export default {
  name: 'Home',
  components: {
    FriendList,
    Chat
  },
  data: function () {
    return {
      userId: '', 
      username: ''
    }
  },
  created () {
    try {
      this.userId = localStorage.getItem('userId')
      this.username = localStorage.getItem('username')
    }
    catch {
      console.log('Error accessing to localStorage!')
    }
    if (!this.userId || !this.username) {
      this.$router.push('login')
    }
  }
}
</script>

<style scoped>
.home {
  display: grid;
  grid-template-columns: 30vw auto;
  height: 100vh;
}
</style>
