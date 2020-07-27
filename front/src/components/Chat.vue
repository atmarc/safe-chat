<template>
    <div class="chat">
        <div class="messages">

        </div>
        <div class="messageInput">
            <div class="inputbox">
                <el-input type="text"></el-input>
            </div>
            <el-button type="success" icon="el-icon-check" circle></el-button>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.chat {
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-rows: auto 60px;
}
.messages {
    height: 100%;
    width: 100%;
    background-color: blue;
}
.messageInput{
    place-items: center;
    display: grid;
    width: 100%;
    background-color: green;
    grid-template-columns: 90% 10%;
}

.inputbox {

}
</style>