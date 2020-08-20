<template>
    <div class="chat">
        <div class="messages">
            <p> Hola </p>
            <p> Hola </p>
            <p> Hola </p>
            <p> Hola </p>
            <p> Hola </p>
            <p> Hola </p>
            <p> Hola </p>
            <p> Hola </p>
            <p> Hola </p>
            <p> Hola </p>
            <p> Hola </p>
            <p> Hola </p>
            <p> Hola </p>
            <p> Hola </p>
            <p> Hola </p>
            <p> Hola </p>
        </div>
        <div class="messageInput">
            <div class="inputbox">
                <el-input type="text"  v-model="newMessage"></el-input>
            </div>
            <el-button type="success" icon="el-icon-check" circle></el-button>
        </div>
    </div>
</template>

<script>
export default {
    data: function () {
        return {
            newMessage: ''
        }
    }
}
</script>

<style scoped>
.chat {
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-rows: 90vh minmax(60px, 10vh);
}
.messages {
    /* height: 100px; */
    width: 100%;
    background-color: blue;
    padding: 20px;
    overflow-y: auto;
}
.messageInput{
    place-items: center;
    display: grid;
    width: 100%;
    background-color: green;
    grid-template-columns: 90% 10%;
}

.inputbox {
    padding-left: 20px;
    padding-right: 10px;
    width: 100%;
}
</style>