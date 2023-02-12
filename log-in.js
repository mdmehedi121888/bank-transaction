document.getElementById('submit').addEventListener('click',function(){
    const email = document.getElementById('email');
    const emailvalue = email.value;
    const password = document.getElementById('password');
    const passwordvalue = password.value;
    if(emailvalue=='mehedi@gmail.com' && passwordvalue=='secret')
    window.location.href="http://127.0.0.1:5500/bank.html";
    else
    alert('Sorry !!! \n incorrect email or password\nplz enter your valid email & password');
    
})
