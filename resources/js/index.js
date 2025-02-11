const nameInput = document.getElementById("Luke Woodruff");
const myMessage = document.getElementById("my-message");
const chatbox =  document.getElementById("chat");
const sendButton = document.getElementById("send-button");
function formatMessage(message, myNameInput){
const time = newDate(message.timestamp);
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
function fetchMessages(){
    return[
        {
    id: 1,
    text: "This is a message",
    sender: "Luke Woodruff",
    timestamp: 1537410673072
  },
  {
    id :2,
    text:"Another Message",
    sender: "Luke Woodruff",
    timestamp: 1537410673072
    },
         {
        id: 3,
        text: "Someone elses message",
        sender:"Sombody else",
        timestamp:1537410673072
        }
    ];
}
function updateMessagesInChatBox(){
    const messages = fetchMessages();
    let formattedMessages = "";
    messages.forEach(message =>{
        formattedMessages +=formatMessage(message,nameInput.value);
            });
            chatbox.innerHTML = formattedMessages;
}
updateMessages();
function sendMessage(username, messageText){
    const newMessage ={
        sender: username,
        text: messageText,
        timestamp: Date.now()
    };
    const messageHTML=formatMessage(newMessage, username);
    chatbox.innerHTML +=messageHTML;
    myMessage.value ="";
}

