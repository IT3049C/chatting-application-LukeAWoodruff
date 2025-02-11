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
{
    "id"; 1,
    "text"; "This is my message",
    "sender"; "Yahya Gilany",
    "timestamp"; 1537410673072
  }
