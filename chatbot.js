let main = document.querySelector('#main');
console.log(main);

// const numbers = [2,3,6,4,7,5,6,4,9];
// const  compare = ([arry]) =>{
//     let a;
//     let b;
//     a = arry[0];
//     for(let i = 0; i < arry.length; i++){
//         b = arry[i];
//         if (a < b ){
//             return a = b;
//         }else{
//             return a;
//         }
//     }
//     console.log('the second highest number is :' + a );
// }
// // function sort(arry){
// //     compare(arry);
// // }
// compare(numbers);


// what we want to do is the chatbot first says how are you
// we listen for the users reply and evaluate it with the alogrithm 
// if the reply is not inline with the type of command to be used we alert invalid command and show the user valid commands


var replies = [];
var reply;
var chatF = document.querySelector('#chatSection');
var inputF = document.querySelector('#inputSection');
    chatF.style.display= "none";
    inputF.style.display= "none";
var inpField = document.querySelector('#inputField');
chatbotMessages = ['hi what is your name', 'Hi, how are you?', 'I can sense you are enthusaistic, may i ask why?'];


//console.log(inpField);
function startChat(){
    displayChatField();
    createChatBotReply(); 
   console.log(inpField.value);
}
// this function creates the chatbot replies
function createChatBotReply(){
    let chatSection = document.querySelector('#chatSection');
    let chatReply = document.createElement('div');
    let chatMessage = document.createElement('p');
    chatReply.classList.add('chatbot');
    chatMessage.innerHTML = chatbotMessages[0];
    chatReply.appendChild(chatMessage);
    chatSection.appendChild(chatReply);
    console.log(chatReply);
}
// this function creates the user reply 
function createUserReply(){
    let chatSection = document.querySelector('#chatSection');
    let userRely = document.createElement('div');
    let userMessage  = document.createElement('p');
    userRely.classList.add('user');
    reply = inpField.value;
    replies.push(reply);
    userMessage.innerHTML = reply;
    userRely.appendChild(userMessage);
    chatSection.appendChild(userRely);
    console.log(reply);
    console.log(userRely);
    return reply;
}
function displayChatField(){
    chatF.style.display= "block";
    inputF.style.display= "block";
}
// function evaluateField(){
//     if
// }

function userSubmit(){
   createUserReply()

}
