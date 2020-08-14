let login =document.querySelector('#login');
let password=document.querySelector('#password');
let submitButton=document.querySelector('#submit-button');
let loginPageBody=document.querySelector('.body');

submitButton.addEventListener('click',(event)=>{
    event.preventDefault();
    console.log('Yurik Jaja')
    if((login.value==='admin')&&(password.value==='admin')){
     
    }else{
        login.value='';
        password.value='';
        let errorMessage=docuemnt.createElement('div');
        let messageText='Wrong login or password !!! Try agian!!!';
        errorMessage.innerHTML=messageText;
        loginPageBody.append(errorMessage);
    }
})