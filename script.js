const form= document.getElementById("form");
const Username= document.getElementById("Username");
const Email= document.getElementById("Email");
const Password= document.getElementById("Password");
const Confirm_password= document.getElementById("Confirm_password");


//error msg
function showError(input, message){
const formControl = input.parentElement;
formControl.className = 'form-control error';
const small = formControl.querySelector('small');
small.innerText = message;
}


//sucess
function showSucess(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control sucess';
}

//emailcheck
function isValidEmail(input){
    const reg =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(reg.test(input.value.trim())){
        showSucess(input);
    }
    else{
        showError(input , 'Email is not valid');
    }
    

};



//input field empty check
function checkRequired(inputArray){
inputArray.forEach(function(input) {
    if(input.value.trim() == ''){
        showError(input, `${input.id} is required`);
    }
    else{
        showSucess(input);
    }
});
}


//length check
function chechLength(input , min, max){
    if(input.value.length < min){
        showError(input , `${input.id} should be atleast ${min} character`);

    }
    else if(input.value.length > max){
        showError(input , `${input.id} should be at max ${max} character`);
    }
    else{
        showSucess(input);
    }
}

//password check
function ispasswordMatch(input1, input2){
    if(input1.value !== input2.value){
        showError(input2, 'password does not match');
    }
}


form.addEventListener('submit',function(e){
    e.preventDefault();
    checkRequired([Username,Email,Password,Confirm_password]);
    chechLength(Username , 3,10);
    chechLength(Password,4,15);
    isValidEmail(Email);
    ispasswordMatch(Password , Confirm_password);
});
