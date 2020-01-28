
var checkPassword=false;
var checkConfirmPassword=false;
var checkEmail=false;
var checkPhone=false;
var checkAnswer=false;
    
function reg()                                    
{
    if (($("#firstName").val()=="") || ($("#email").val()=="") || ($("#password").val()== "")|| ($("#confirmPassword").val()=="") ||
    ($("input[type='radio']:checked").val()==null) || ($("#phone1").val()== "") || ($("#adderess1").val()== "") ||
    ($("#city").val()=="") || ($("#state").val()=="Select") || ($("#country").val()=="Select"))                                  
    { 
        window.alert("Please enter the data in the required feilds.");
    }


    var pattern=/^([a-z A-Z 0-9\. -]+)@([a-z A-Z]+)\.([a-z]{2,10})$/;
    if((pattern.test(email.value) == false) && $("#email").val().length>0)
        {
            $("#emailError").text("Provide valid Email id!");
            checkEmail=false;
            //alert("Provide valid Email id!");
        }
    else{
        checkEmail=true;
    }

    if($("#phone1").val().length<10 && ($("#phone1").val()!==""))
        {
            $("#phone1Error").text("Enter a 10 digit valid phone number!");
            checkPhone=false;
            //alert("Enter a 10 digit valid phone number!");
        }
    else{
        checkPhone=true;
    }


    var passwordData=/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#\$%\^&]){8,}/;
    if($("#password").val().length<8 && ($("#password").val()!==""))
        {
            $("#passwordError").text("Password must be atleast 8 characters!");
            checkPassword=true;
            //alert("Password must be atleast 8 characters!");
        }
    else{
        checkPassword=true;
    }
    if(passwordData.test($("#password").val())==false)
    {
        $("#passwordError").text("Enter a strong Password!");
        checkPassword=false;
    }
    else{
        checkConfirmPassword=true;
    }




    if($("#password").val()!==$("#confirmPassword").val())
        {
            $("#confirmPasswordError").text("The two passwords doesn't match!");
            checkConfirmPassword=false;
            //alert("The two passwords doesn't match!");
        }
    else{
        checkConfirmPassword=true;
    }

    
    if($("#firstName").val()=="")
    {
        $("#firstNameError").text("First name required!");
    }
    if($("#email").val()=="")
    {
        $("#emailError").text("Email required!");
    }
    if($("#password").val()=="")
    {
        $("#passwordError").text("Password required!");
    }
    if($("#confirmPassword").val()=="")
    {
        $("#confirmPasswordError").text("Confirm your Password");
    }
    if($("#gender").val()=="")
    {
        $("#genderError").text("Gender required!");
    }
    if($("#phone1").val()=="")
    {
        $("#phone1Error").text("Phone1 required!");
    }
    if($("#address1").val()=="")
    {
        $("#address1Error").text("Address1 required!");
    }
    if($("#city").val()=="")
    {
        $("#cityError").text("City required!");
    }
    if($("#state").val()=="Select")
    {
        $("#stateError").text("State required!");
    }
    if($("#country").val()=="Select")
    {
        $("#countryError").text("Country required!");
    }

}





function captchaGeneration()
{
    var operatorArray=['+','-','*','/'];
    num1=document.getElementById("number1");
    num2=document.getElementById("number2");
    var operator=document.getElementById("operator");
    // num1=$("#number1").val();
    // num2=$("#number1").val();
    //var operator=$("#operator").val();

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
    var answer=$("#answer").val();

    if((answer!==expectedResult) && (answer!==""))
    {
        $("#captchaMessage").text("Incorrect! Check your calculation.").css({color:'red'});
    }
    if((answer==expectedResult) && (answer!==""))
    {
        $("#captchaMessage").text("Correct!").css({color:'green'});
        checkAnswer=true;
    }
    else{
        checkAnswer=false;
    }

}



$(document).ready(function(){
    $("#divAnimate").hide();
    $("#divWelcome").hide();
    $("#divWelcome").fadeIn(2500);
    $("#divWelcome").fadeOut(2300);
    $("#firstName").blur(function(){
        if($(this).val()==""){
            $("#firstNameError").text("First name required!");
        }
        else{
            $("#firstNameError").text("");
        }
    }),
    $("#email").blur(function(){
        if($(this).val()==""){
            $("#emailError").text("Email required!");
        }
        else{
            $("#emailError").text("");
        }
    }),
    $("#password").blur(function(){
        if($(this).val()==""){
            $("#passwordError").text("Password required!");
        }
        else{
            $("#passwordError").text("");
        }
    }),
    $("#confirmPassword").blur(function(){
        if($(this).val()!==""){
            $("#confirmPasswordError").text("");
        }
        else if($("#password").val()!==""){
            $("#confirmPasswordError").text("Confirm your Password!");
        }
    });
    $("#submitButton").click(function(){
        if(($("input[type='radio']:checked").val())==null){
            $("#genderError").text("Gender required!");
        }
        else{
            if(($("input[type='radio']:checked").val()=="Male") || ($("input[type='radio']:checked").val()=="Female") ||
            ($("input[type='radio']:checked").val()=="Other"))
            $("#genderError").text("");
        }
    }),
    $("#phone1").blur(function(){
        if($(this).val()!==""){
            $("#phone1Error").text("");
        }
        else{
            $("#phone1Error").text("Phone1 required!");
        }
    }),
    $("#address1").blur(function(){
        if($(this).val()!==""){
            $("#address1Error").text("");
        }
        else{
            $("#address1Error").text("Address1 required!");
        }
    }),
    $("#city").blur(function(){
        if($(this).val()!==""){
            $("#cityError").text("");
        }
        else{
            $("#cityError").text("City required!");
        }
    }),
    $("#state").blur(function(){
        if($(this).val()=="Select"){
            $("#stateError").text("State required!");
        }
        else{
            $("#stateError").text("");
        }
    }),
    $("#country").blur(function(){
        if($(this).val()=="Select"){
            $("#countryError").text("Country required!");
        }
        else{
            $("#countryError").text("");
        }
    }),
    $("#submitButton").click(function(){
        
        if(($("#firstName").val()!=="") && ($("#email").val()!=="") &&
        ($("#password").val()!=="") && ($("#confirmPassword").val()!=="") && 
        (($("input[type='radio']:checked").val())!==null) && ($("#phone1").val()!=="") && ($("#address1").val()!=="") &&
        ($("#city").val()!=="") && ($("#state").val()!=="") && ($("#country").val()!=="") &&
        checkPassword==true && checkConfirmPassword==true && checkEmail==true && checkPhone==true &&
        checkAnswer==true)
        {
            //alert("Registration successfull");
            //$("#divAnimate").show( "explode", {pieces: 16}, 2000 );
            $("#divAnimate").fadeIn(2200);
            $("#divAnimate").fadeOut(3500);
            
        }
    });
});