<template>
  <div class="friendList">
    <h1>Chats</h1>
    <div class="friendsNames" id="scroll">
      <div class="contact" v-for="friend in friends" :key="friend.userId">{{friend.username}}</div>
    </div>
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
      if (this.userId === '' || this.userId === undefined || this.userId === null) return
      axios.get("http://localhost:3001/users/" + this.userId + "/friends")
        .then((res) => {
          this.friends = res.data
        })
    }
  }
}
</script>

<style scoped>
h1 {
  text-align: center;
}

.contact {
  border-style: solid;
  border-color: black;
  padding: 10px;
  transition: 200ms;
}

.contact:hover {
  background-color: #0F0;
  border-style: solid;
  border-color: #0F0;
  color: black;
  font-weight: bold;
}

.friendsNames {
  margin: 20px;
  overflow-y: auto;
}

.friendList {
  padding: 20px;
  height: 100vh;
  width: 100%;
  background: black;
  color: #0F0;
  border-color: #0F0;
  border-style: hidden solid hidden hidden;
  display: flex;
  flex-direction: column;
}

/* --------  Scroll bar custom -------- */
#scroll::-webkit-scrollbar-track
{
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.1);
	background-color: #000;
}

#scroll::-webkit-scrollbar
{
	width: 10px;
	background-color: #000;
}

#scroll::-webkit-scrollbar-thumb
{
	border-radius: 10px;
	background-color: #0F0;
}
/* --------  Scroll bar custom -------- */

</style>