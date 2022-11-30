// 1. create an array of mails that can acces to the page;
// 2. ask to input the mail;
//3.0 check if the mail is authorized to access
//3.1 if the mail is authorized to access, the message will be;"Welcome Back!"
//3.2 if the mail is not is authorized to access, the message will be; "This mail is not on the list"

const mail_list =['madamimadam@mail.uk', 'jackcaj@mail.uk', 'rabbitthebobbit@mail.uk', 'zonetan@mail.uk', 'icedragonballz@mail.uk'];

let mail = prompt('Insert your E-Mail');

let bool = false;

for(let i=0; i<mail_list.length; i++){

    if (mail_list[i] == mail){
        bool = true;   
}}
    
if (bool){
    console.log(`Welcome Back!`)
    document.getElementById("welcb").innerHTML = "Welcome Back!";
}
else{
    console.log(`This email is not on the list!`)
    alert(`This email is not on the list!`)
}