<template>
  <div class="home">
    <h1>Friends:</h1>
    <ul>
      <li v-for="friend in friends" :key="friend.userId">{{friend.username}}</li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import axios from 'axios'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  data: function () {
    return {
      friends: [],
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
    else {
      axios.get("http://localhost:3001/users/" + this.userId + "/friends")
        .then((res) => {
          this.friends = res.data
        })
    }
  }
}
</script>
