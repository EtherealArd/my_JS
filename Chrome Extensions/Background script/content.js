console.log("content");

chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message,sender,senderResponse)
{
console.log(senderResponse);
}