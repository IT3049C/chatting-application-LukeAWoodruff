const nameInput = document.getElementById("Luke-Woodruff");
const myMessage = document.getElementById("my-message");
const chatbox =  document.getElementById("chat");
const sendButton = document.getElementById("send-button");

function formatMessage(message, myNameInput){
    const time = new Date(message.timestamp);
    const formattedTime = `${time.getHours()}:${time.getMinutes()}`;
if (myNameInput === message.sender){
    return`
    <div class = "mine messages">
    <div class = "message">
    ${message.text}
    </div>
    </div>`;
}else{
    return`
    <div class = "your messages">
    <div class = "message">
    ${message.text}
    </div>
    </div>`;
    }
} 
async function fetchMessages(){
    try{
        const response =await fetch('https://it3049c-chat.fly.dev/messages');
        if (!response.ok){
            throw new Error('Network response was not ok '+response.statusText);
        }
        const messages = await response.json();
        return messages;
    } catch (error){
        console.error('There has been a problem with your fetch operation:', error);
        return[];
    }
}

async function updateMessagesInChatBox(){
    const messages = await fetchMessages();
    let formattedMessages = "";
    messages.forEach(message =>{
        formattedMessages +=formatMessage(message,nameInput.value);
            });
            chatbox.innerHTML = formattedMessages;
}
function sendMessages(username, text){
    const newMessage ={
        sender: username,
        text: text,
        timestamp: new Date()
    };
    fetch('https://it3049c-chat.fly.dev',{
        method:"POST",
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newMessage)
    });
}
sendButton.addEventListener("click", async function(event){
    event.preventDefault();
    const sender = nameInput.value;
    const message = myMessage.value;
    await sendMessage(sender, message);
    myMessage.value="";
});
const MILLISECONDS_IN_TEN_SECONDS = 10000;
setInterval(updateMessagesInChatBox, MILLISECONDS_IN_TEN_SECONDS);
updateMessagesInChatBox();
