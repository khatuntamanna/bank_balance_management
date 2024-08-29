// console.log('it will run successfully');

document.getElementById('submit').addEventListener('click', function () {
    // alert ('submit successfully')
    // console.log('submit successfully');

       var emailField = document.getElementById('email');
       var emailValue = emailField.value;
       console.log(emailValue);


        var passwordField = document.getElementById('password');
        var passwordValue = passwordField.value;
        console.log(passwordValue);

        if(emailValue == 'example@gmail.com' && passwordValue == 123456789){
            alert('login successfully')
            window.location.href="http://127.0.0.1:5500/amountCalculation.html";
            
        }


})