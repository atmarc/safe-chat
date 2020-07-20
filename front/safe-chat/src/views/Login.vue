<template>
  <div class="py-5">
    <el-row type="flex" class="row-bg" justify="space-around">
      <el-col :lg="8" :md="10" :sm="12" :xs="20">
        <h1 class="py-5 text-center">Login</h1>
        <el-input class="mt-3" placeholder="username" v-model="userName" clearable></el-input>
        <el-input class="mt-3" placeholder="password" v-model="password" show-password></el-input>
        
        <el-row class="mt-3" :gutter="17">
          <el-col :span=12>
            <el-button @click="login()" class="myButton" type="primary" size="medium" plain>Login</el-button>
          </el-col>
          <el-col :span=12>
            <el-button class="myButton" type="success" size="medium" plain>Register</el-button>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      userName: '',
      password: ''
    }
  },
  methods: {
    login: function () {
      console.log('click')
    }
  }
}
</script>

<style scoped>
.myButton {
  width: 100%;
}
</style>