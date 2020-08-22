<template>
    <div class="wrapper">
        <div class="myModal">
            <h1>Send a friend request</h1>
            <h6> Nickname: </h6>
            <input type="text">
            <button v-on:click="$emit('close')" >Send</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AddFriends'
}
</script>

<style scoped>
.myModal {
    padding: 20px;
    background: black;
    color: #0F0;
    border-style: solid;
    border-color: #0F0;
    border-radius: 10px;
    opacity: 100%;
}

.wrapper {
    height: 100vh;
    width: 100vw;
    z-index: 1;
    background-color: rgba(0,0,0,0.9);
    position: fixed;
    left: 0;
    top: 0;
    display: grid;
    place-items: center;
}

input {
    background: black;
    border-color: #0F0;
    border-radius: 10px;
    border-width: 3px;
    color: #0F0;
    padding-left: 10px;
    padding-right: 10px;
}
h6 {
    margin-left: 15px;
}

button {
    float: right;
    background: #0F0;
    border-style: solid;
    border-color: #0F0;
    border-radius: 30px;
}
</style>