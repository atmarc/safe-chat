<template>
  <div class="py-5">
    <el-row type="flex" class="row-bg" justify="space-around">
      <el-col :lg="8" :md="10" :sm="12" :xs="20">
        <h1 class="py-5 text-center">Login</h1>
        <el-input class="mt-3" placeholder="username" v-model="username" clearable></el-input>
        <el-input class="mt-3" placeholder="password" v-model="password" show-password></el-input>
        
        <el-row class="mt-3" :gutter="17">
          <el-col :span=12>
            <el-button @click="login()" class="myButton" type="primary" size="medium" plain>Login</el-button>
          </el-col>
          <el-col :span=12>
            <el-button @click="register()" class="myButton" type="success" size="medium" plain>Register</el-button>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data: function () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login: function () {
      axios.post("http://localhost:3001/login", {'username': this.username, 'password': this.password})
        .then((res) => {
          if (res.status === 200) {
            let user = res.data
            console.log('Logged in: ' + user.username)
            localStorage.setItem('username', user.username)
            localStorage.setItem('userId', user._id)
            this.$router.push('/')
          }
        })
        .catch((err) => this.wrongCredentials())
    },
    register: function () {
      axios.post("http://localhost:3001/register", {'username': this.username, 'password': this.password})
        .then((res) => {
          if (res.status === 200) {
            let user = res.data
            console.log('Registered: ' + user.username)

            localStorage.setItem('username', user.username)
            localStorage.setItem('userId', user._id)
            this.$router.push('/')
          }
        })
        .catch((err) => this.usernameInUse())
    },
    wrongCredentials: function () {
      this.password = ''
    },
    usernameInUse: function () {
      this.password = ''
      this.username = ''
    }
  }
}
</script>

<style scoped>
.myButton {
  width: 100%;
}
</style>