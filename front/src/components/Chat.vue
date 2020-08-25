<template>
    <div class="chat">
        <div class="chatTitle">
            <h3>Marc</h3>
        </div>
        <div class="messages">
            <p> Missatge </p>
            <p> Missatge </p>
            <p> Missatge </p>
            <p> Missatge </p>
            <p> Missatge </p>
            <p> Missatge </p>
            <p> Missatge </p>
            <p> Missatge </p>
            <p> Missatge </p>
            <p> Missatge </p>
            <p> Missatge </p>
            <p> Missatge </p>
            <p> Missatge </p>
            <p> Missatge </p>
            <p> Missatge </p>
            <p> Missatge </p>
            <p> Missatge </p>
            <p> Missatge </p>
            <p> Missatge </p>
            <p> Missatge </p>
            <p> Missatge </p>
            <p> Missatge </p>
            <p> Missatge </p>
            <p> Missatge </p>
            <p> Missatge </p>
            <p> Missatge </p>
            <p> Missatge </p>
            <p> Missatge </p>
        </div>
        <div class="messageInput">
            <div class="inputbox">
                <input type="text" class="myInput" v-model="newMessage">
            </div>
            <svg width="40" height="40">
                <circle cx="20" cy="20" r="20" fill="#0F0" />
                <polygon points="12,10 12,30 32,20" style="fill:#000;stroke-linejoin: round;" />
                Sorry, your browser does not support inline SVG.
            </svg>
            <!-- <el-button type="success" icon="el-icon-check" circle></el-button> -->
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
p {
    color:rgb(0, 255, 0);
}
.chat {
    height: 100vh;
    width: 100%;
    display: grid;
    grid-template-rows: auto 1fr auto;
}
.chatTitle {
    padding: 20px;
    background-color: black;
    color: #0F0;
    border-style: hidden hidden solid hidden;
}
.messages {
    /* height: 100px; */
    width: 100%;
    background-color: rgb(0, 0, 0);;
    padding: 20px;
    overflow-y: auto;
}
.messageInput {
    place-items: center;
    display: grid;
    width: 100%;
    background-color: rgb(0, 0, 0);
    grid-template-columns: 90% 10%;
    padding-top: 10px;    
    padding-bottom: 10px;    
}

.inputbox {
    padding-left: 20px;
    padding-right: 10px;
    width: 100%;
    height: 40px;
}

input {
    width: 100%;
    height: 100%;
    background: black;
    border-color: #0F0;
    border-radius: 10px;
    border-width: 3px;
    color: #0F0;
    padding-left: 10px;
    padding-right: 10px;
}


/* --------  Scroll bar custom -------- */
::-webkit-scrollbar-track
{
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.1);
	background-color: #000;
}

::-webkit-scrollbar
{
	width: 10px;
	background-color: #000;
}

::-webkit-scrollbar-thumb
{
	border-radius: 10px;
	background-color: #0F0;
}
/* --------  Scroll bar custom -------- */

.el-button--success {
    color: #FFF;
    background-color: #0F0;
    border-color: #0F0;
}
</style>