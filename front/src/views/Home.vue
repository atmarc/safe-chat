<template>
  <div class="home">
    <friend-list @open-modal="openModal()" :userId="userId" />
    <chat/>
  <transition name="slide-fade">
    <add-friends v-if="addFriendModal" @close="closeModal()" />
  </transition>    
  </div>
</template>

<script>
// @ is an alias to /src
import FriendList from '@/components/FriendList.vue'
import Chat from '@/components/Chat.vue'
import AddFriends from '@/components/AddFriends.vue'
import axios from 'axios'

export default {
  name: 'Home',
  components: {
    FriendList,
    Chat,
    AddFriends
  },
  data: function () {
    return {
      userId: '', 
      username: '',
      addFriendModal: false
    }
  },
  methods: {
    openModal: function () {
      this.addFriendModal = true
    },
    closeModal: function () {
      this.addFriendModal = false
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

.slide-fade-enter-active {
  transition: all .5s ease;
}
.slide-fade-leave-active {
  transition: all .5s ease;
}
.slide-fade-enter, .slide-fade-leave-to {
  opacity: 0;
}

.home {
  display: grid;
  grid-template-columns: 30vw auto;
  height: 100vh;
}
</style>
