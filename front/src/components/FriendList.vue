<template>
  <div class="friendList">
    <h1>Friends:</h1>
    <ul>
      <li v-for="friend in friends" :key="friend.userId">{{friend.username}}</li>
    </ul>
</div>
</template>

<script>
import axios from 'axios'

export default {
  props: ['userId'],
  data: function () {
    return {
      friends: []
    }
  },
  watch: {
    userId: function () {
      this.loadFriends()
    }
  },
  created (newUser) {
    this.loadFriends()
  },
  methods: {
    loadFriends: function () {
      if (this.userId == '') return
      axios.get("http://localhost:3001/users/" + this.userId + "/friends")
        .then((res) => {
          this.friends = res.data
        })
    }
  }
}
</script>

<style scoped>
.friendList {
  height: 100%;
  width: 100%;
}
</style>