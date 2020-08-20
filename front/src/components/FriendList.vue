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
  padding: 20px;
  height: 100%;
  width: 100%;
  background: black;
  color: #0F0;
  border-color: #0F0;
  border-style: hidden solid hidden hidden;
}
</style>