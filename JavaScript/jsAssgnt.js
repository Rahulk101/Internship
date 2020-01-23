
    var firstName = document.forms["Registration"]["firstName"];               
    var lastName = document.forms["Registration"]["lastName"];
    var email = document.forms["Registration"]["email"];
    var password = document.forms["Registration"]["password"];
    var confirmPassword = document.forms["Registration"]["confirmPassword"];
    var phone1 = document.forms["Registration"]["phone1"];
    var gender = document.forms["Registration"]["lblGender"];  
    var address1 =  document.forms["Registration"]["address1"];
    var city = document.forms["Registration"]["city"];
    var state = document.forms["Registration"]["state"];
    var country = document.forms["Registration"]["country"];

    var check=true;
    
    var firstNameError=document.getElementById("firstNameError");
    var lastNameError=document.getElementById("lastNameError");
    var emailError=document.getElementById("emailError");
    var passwordError=document.getElementById("passwordError");
    var confirmPasswordError=document.getElementById("confirmPasswordError");
    var genderError=document.getElementById("genderError");
    var phone1Error=document.getElementById("phone1Error");
    var address1Error=document.getElementById("address1Error");
    var cityError=document.getElementById("cityError");
    var countryError=document.getElementById("countryError");
    


    firstName.addEventListener('blur', firstNameVerify, true);
    lastName.addEventListener('blur', lastNameVerify, true);
    email.addEventListener('blur', emailVerify, true);
    password.addEventListener('blur', passwordVerify, true);
    confirmPassword.addEventListener('blur', confirmPasswordVerify, true);
    phone1.addEventListener('blur', phone1Verify, true);
    // gender.addEventListener('blur', genderVerify, true);
    address1.addEventListener('blur', address1Verify, true);
    state.addEventListener('blur', stateVerify, true);
    country.addEventListener('blur', countryVerify, true);
    city.addEventListener('blur', cityVerify, true);
    
function reg()                                    
{
    if ((firstName.value == "") ||(lastName.value=="")||(email.value=="")||(password.value=="")||(confirmPassword.value=="")||
    (document.getElementById("lblGender").textContent=="")||(phone1.value=="")||(address1.value=="")||
    (city.value=="")||(state.value=="")||(country.value==""))                                  
    { 
        window.alert("Please enter the data in the required feilds.");
    }


    var pattern=/^([a-z A-Z 0-9\. -]+)@([a-z A-Z]+)\.([a-z]{2,10})$/;
    if((pattern.test(email.value) == false) && (email.value.length>0))
        {
            emailError.textContent="Provide valid Email id!";
            check=false;
            //alert("Provide valid Email id!");
        }

    if((phone1.value.length<10) && (phone1.value!==""))
        {
            phone1Error.textContent="Enter a 10 digit valid phone number!";
            check=false;
            //alert("Enter a 10 digit valid phone number!");
        }

    if((password.value.length<8) && (password.value!==""))
        {
            passwordError.textContent="Password must be atleast 8 characters!";
            check=false;
            //alert("Password must be atleast 8 characters!");
        }

    if(password.value!==confirmPassword.value && password.value!="")
        {
            confirmPasswordError.textContent="The two passwords doesn't match!";
            check=false;
            //alert("The two passwords doesn't match!");
        }

    
    if(firstName.value == "")
    {
        firstNameError.textContent="First name required";
    }
    if(lastName.value == "")
    {
        lastNameError.textContent="Last name required";
    }
    if(email.value == "")
    {
        emailError.textContent="Email required";
    }
    if(password.value == "")
    {
        passwordError.textContent="Password required";
    }
    if(confirmPassword.value == "")
    {
        confirmPasswordError.textContent="Confirm your password";
    }
    if(document.getElementById("lblGender").textContent=="")
    {
        genderError.textContent="Phone1 required";
    }
    if(phone1.value == "")
    {
        phone1Error.textContent="Phone1 required";
    }
    if(address1.value == "")
    {
        address1Error.textContent="Address1 required";
    }
    if(city.value == "")
    {
        cityError.textContent="City required";
    }
    if(state.value == "Select")
    {
        stateError.textContent="State required";
    }
    if(country.value == "Select")
    {
        countryError.textContent="Country required";
    }

}

    








function captchaGeneration()
{
    var operatorArray=['+','-','*','/'];
    num1=document.getElementById("number1");
    num2=document.getElementById("number2");
    var operator=document.getElementById("operator");

    var value1=Math.floor((Math.random()*99) + 1);
    var value2=Math.floor((Math.random()*99) + 1);

    if(value2>value1)
    {
        num1.innerHTML=value2;
        num2.innerHTML=value1;
        num1=value2;
        num2=value1;
    }
    else
    {
        num1.innerHTML=value1;
        num2.innerHTML=value2;
        num1=value1;
        num2=value2;
    }

    sign=operatorArray[Math.floor(Math.random()*4)];
    operator.innerHTML=sign;
}



function captchaVerify()
{
    var expectedResult;

    switch(sign)
    {
        case '+':
            expectedResult=num1+num2;
            break;
        case '-':
            expectedResult=num1-num2;
            break;
        case '*':
            expectedResult=num1*num2;
            break;
        case '/':
            expectedResult=Math.round(num1/num2);
            break;
    }
    var answer=document.getElementById("answer").value;

    if((answer!==expectedResult) && (answer!==""))
    {
        document.getElementById("captchaMessage").innerHTML="Incorrect! Check your calculation.";
        document.getElementById("captchaMessage").style.color="red";
    }
    if((answer==expectedResult) && (answer!==""))
    {
        document.getElementById("captchaMessage").innerHTML="Correct!";
        document.getElementById("captchaMessage").style.color="green";
    }

}




function firstNameVerify(){
    if(firstName.value !=="")
    {
        firstNameError.innerHTML="";
        
    }
    else{
        firstNameError.innerHTML="First name required!";
    }
}
function lastNameVerify(){
    if(lastName.value !=="")
    {
        lastNameError.innerHTML="";
    }
    else{
        lastNameError.innerHTML="Last name required!";
    }
}
function emailVerify(){
    if(email.value !=="")
    {
        emailError.innerHTML="";
        
    }
    else{
        emailError.innerHTML="Email required!";
    }
}
function passwordVerify(){
    if(password.value !=="")
    {
        passwordError.innerHTML="";
        check=true;
    }
    else{
        passwordError.innerHTML="Password required!";
        confirmPasswordError.innerHTML="";
        check=false;
    }
    if((password.value.length<8) && (password.value !==""))
    {
        passwordError.innerHTML="Password must be atleast 8 characters!";
        check=false;
    }
}
function confirmPasswordVerify(){
    if(confirmPassword.value !=="")
    {
        confirmPasswordError.innerHTML="";
        check=true;
        
    }
    else if(password.value!=="")
    {
        confirmPasswordError.innerHTML="Confirm your password!";
        check=false;
    }
    if((password.value.length>7) && (confirmPassword!=""))
    {
        confirmPasswordError.innerHTML="The two passwords doesn't match!";
        check=false;
    }
}
function genderVerify(){
    if(document.getElementById("lblGender").textContent!=="")
    {
        genderError.innerHTML="";
        check=true;
    }
    else{
        genderError.innerHTML="Gender required!";
        check=false;
    }
}
function phone1Verify(){
    if(phone1.value !=="")
    {
        phone1Error.innerHTML="";
    }
    else{
        phone1Error.innerHTML="Phone1 required!";
        check=false;
    }
}
function address1Verify(){
    if(address1.value !=="")
    {
        address1Error.innerHTML="";
    }
    else{
        address1Error.innerHTML="Address1 required!";
    }
}
function cityVerify(){
    if(city.value !=="")
    {
        cityError.innerHTML="";
    }
    else{
        cityError.innerHTML="City required!";
    }
}
function stateVerify(){
    if(state.value =="Select")
    {
        stateError.innerHTML="State required!";
    }
    else{
        stateError.innerHTML="";
    }
}
function countryVerify(){
    if(country.value =="Select")
    {
        countryError.innerHTML="Country required!";
    }
    else{
        countryError.innerHTML="";
    }
}

// checkAll()
// {
//     if(((firstName.value !== "") ||(lastName.value==!"")||(email.value==!"")||(password.value==!"")||
//     (confirmPassword.value==!"")||(document.getElementById("lblGender").textContent==!"")||(phone1.value==!"")||
//     (address1.value==!"")||(city.value==!"")||(state.value==!"")||(country.value==!"")))
// }