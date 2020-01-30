var passwordLength=true;
var checkPassword=false;
var checkConfirmPassword=false;
var checkEmail=false;
var checkPan=false;
var checkAadhar=false;
var checkPhone=false;
var checkAnswer=false;
var checkState=false;
var checkCountry=false;
var checkPin=false;
var clonePhone=0;
var cloneAddress=0;
var count=1;

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
    var answer=Math.round($.trim($("#answer").val()));
    if($.trim($("#answer").val())==="")
    {
        $("#captchaMessage").text("Please enter the captcha value!").css({color:'red'});
        checkAnswer=false; 
    }
    else if((answer!==expectedResult) && (answer!==""))
    {
        $("#captchaMessage").text("Incorrect! Check your calculation.").css({color:'red'});
        checkAnswer=false;
    }
    else
    {
        $("#captchaMessage").text("Correct!").css({color:'green'});
        checkAnswer=true;
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



$(document).ready(function(){
    captchaGeneration();
    // $("#divpasswordPolicy").hide();
    $("#divAnimate").hide();
    $("#divWelcome").hide();
    $("#divWelcome").fadeIn(2500);
    $("#divWelcome").fadeOut(2300);

    
    $("#submitButton").click(function(){
        captchaVerify();
        
        //  VALIDATION OF INPUT FIELDS
        {
            if( ($.trim($("#firstName").val())==="") || ($.trim($("#email").val())==="") || ($.trim($("#password").val())=== "")||
            ($.trim($("#confirmPassword").val())==="") ||($("input[type='radio']:checked").val()===null) ||
            ($.trim($("#phone1").val())==="") || ($.trim($("#address1").val())==="") ||($.trim($("#city").val())==="") ||
            ($("#state").val()==="Select") || ($("#country").val()==="Select"))                                
            { 
                window.alert("Please enter the data in the required feilds.");
            }
        
        
            var pattern=/^([a-z A-Z 0-9\. -]+)@([a-z A-Z]+)\.([a-z]{2,10})$/;
            if((pattern.test(email.value) === false) && $("#email").val().length>0)
                {
                    $("#emailError").text("Provide valid Email id!");
                    checkEmail=false;
                }
            else{
                checkEmail=true;
            }
        
            if($.trim($("#phone1").val()).length<10 && ($.trim($("#phone1").val())!==""))
                {
                    $("#phone1Error").text("Enter a 10 digit valid phone number!");
                    checkPhone=false;
                }
            else{
                checkPhone=true;
            }

            if($.trim(($("#aadhar").val())).length!==16 && ($.trim($("#aadhar").val())!==""))
                {
                    $("#aadharError").text("Enter a valid Aadhar!");
                    checkAadhar=false;
                }
            else{
                checkAadhar=true;
            }

            var panData=/(?=.*\d)(?=.*[A-Z])/;
            if(($.trim($("#pan").val()).length)!==10)
            {
                $("#panError").text("Enter PAN number of correct length!");
                checkPan=false;
            }
            else if(panData.test($.trim($("#pan").val()))===false)
            {
                $("#panError").text("Enter a valid PAN number!");
                checkPan=false;
            }
            else{
                checkPan=true;
            }

            if(($.trim($("#pin").val()).length)!==6)
            {
                $("#pinError").text("Enter a valid PIN of 6 digits!");
                checkPin=false;
            }
            else{
                checkPin=true;
            }

            var passwordData=/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#\$%\^&]){8,}/;
            if($.trim($("#password").val()).length<8 && ($.trim($("#password").val())!==""))
                {
                    $("#passwordError").text("Password must be at least 8 characters!");
                    checkPassword=false;
                    passwordLength=false;
                }
            else{
                checkPassword=true;
            }
            if(passwordData.test($.trim($("#password").val()))===false)
            {
                if(passwordLength===false)
                {
                    $("#passwordError").text("Enter a strong Password of at least 8 characters!");
                }
                checkPassword=false;
            }
            else{
                checkConfirmPassword=true;
            }
        
        
        
        
            if($.trim($("#password").val())!== ($.trim($("#confirmPassword").val())) )
                {
                    $("#confirmPasswordError").text("The two passwords doesn't match!");
                    checkConfirmPassword=false;
                }
            else{
                $("#confirmPasswordError").text("");
                checkConfirmPassword=true;
            }
        
            
            if($.trim($("#firstName").val())==="")
            {
                $("#firstNameError").text("First name required!");
            }
            if($.trim($("#email").val())==="")
            {
                $("#emailError").text("Email required!");
            }
            if($.trim($("#pan").val())==="")
            {
                $("#panError").text("PAN required!");
            }
            if($.trim($("#aadhar").val())==="")
            {
                $("#aadharError").text("Aadhar number required!");
            }
            if($.trim($("#password").val())==="")
            {
                $("#passwordError").text("Password required!");
            }
            if($.trim($("#confirmPassword").val())==="")
            {
                $("#confirmPasswordError").text("Confirm your Password");
            }
            if($("#gender").val()==="")
            {
                $("#genderError").text("Gender required!");
            }
            if($.trim($("#phone1").val())==="")
            {
                $("#phone1Error").text("Phone1 required!");
            }
            if($.trim($("#address1").val())==="")
            {
                $("#address1Error").text("Address1 required!");
            }
            if($.trim($("#city").val())==="")
            {
                $("#cityError").text("City required!");
            }
            if($.trim($("#pin").val())==="")
            {
                $("#pinError").text("PIN required!");
            }
            if($("#state").val()==="Select")
            {
                $("#stateError").text("State required!");
                checkState=false;
            }
            else{
                checkState=true;
            }
            if($("#country").val()==="Select")
            {
                $("#countryError").text("Country required!");
                checkCountry=false;
            }
            else{
                checkCountry=true;
            }
        
        }

    });

    
    //  BLUR EVENTS
    $("#firstName").blur(function(){
        if($.trim($(this).val())===""){
            $("#firstNameError").text("First name required!");
        }
        else{
            $("#firstNameError").text("");
        }
    }),
    $("#email").blur(function(){
        if($.trim($(this).val())===""){
            $("#emailError").text("Email required!");
        }
        else{
            $("#emailError").text("");
        }
    }),
    $("#pan").blur(function(){
        if($.trim($(this).val())===""){
            $("#panError").text("PAN number required!");
        }
        else{
            $("#panError").text("");
        }
    }),
    $("#aadhar").blur(function(){
        if($.trim($(this).val())===""){
            $("#aadharError").text("Aadhar number required!");
        }
        else{
            $("#aadharError").text("");
        }
    }),
    $("#password").blur(function(){
        if($.trim($(this).val())===""){
            $("#passwordError").text("Password required!");
        }
        else{
            $("#passwordError").text("");
        }
    }),
    $("#confirmPassword").blur(function(){
        if($.trim($(this).val())===""){
            $("#confirmPasswordError").text("");
        }
        else if(($.trim($("#password").val())!=="") && ($.trim($("#confirmPassword").val())==="")){
            $("#confirmPasswordError").text("Confirm your Password!");
        }
    });
    $("#submitButton").click(function(){
        if(($("input[type='radio']:checked").val())===null){
            $("#genderError").text("Gender required!");
        }
        else{
            $("#genderError").text("");
        }
    }),
    $("#phone1").blur(function(){
        if($.trim($(this).val())===""){
            $("#phone1Error").text("Phone1 required!");
        }
        else{
            $("#phone1Error").text("");
        }
    }),
    $("#pin").blur(function(){
        if($.trim($(this).val())===""){
            $("#pinError").text("PIN required!");
        }
        else{
            $("#pinError").text("");
        }
    }),
    $("#address1").blur(function(){
        if($.trim($(this).val())===""){
            $("#address1Error").text("Address1 required!");
        }
        else{
            $("#address1Error").text("");
        }
    }),
    $("#city").blur(function(){
        if($.trim($(this).val())===""){
            $("#cityError").text("City required!");
        }
        else{
            $("#cityError").text("");
        }
    }),
    $("#state").blur(function(){
        if($(this).val()==="Select"){
            $("#stateError").text("State required!");
        }
        else{
            $("#stateError").text("");
        }
    }),
    $("#country").blur(function(){
        if($(this).val()==="Select"){
            $("#countryError").text("Country required!");
        }
        else{
            $("#countryError").text("");
        }
    }),


    // Validate all fields including captcha and display message if true.
    $("#submitButton").click(function(){
        
        if( ($.trim($("#firstName").val())!=="") && ($.trim($("#email").val())!=="") &&
        ($.trim($("#password").val())!=="") && ($.trim($("#confirmPassword").val())!=="") && 
        (($("input[type='radio']:checked").val())!==null) && ($.trim($("#phone1").val())!=="") && ($.trim($("#address1").val())!=="") &&
        ($.trim($("#city").val())!=="") && ($("#state").val()!=="") && ($("#country").val()!=="") &&
        checkPassword===true && checkConfirmPassword===true && checkEmail===true && checkPhone===true &&
        checkAnswer===true && checkCountry===true && checkState===true && checkAadhar===true && checkPan===true
        && checkPin===true)
        {
            $("#divAnimate").fadeIn(2200);
            $("#divAnimate").fadeOut(3500);
        }
    }),

    //Addition of extra phone number fields.
    $("#addPhone").click(function(){
        count=count+1;
        $("#addPhone").after('<div><input class="input" type="number"  placeholder="Additional number.."></input><button id="removePhone" type="button"><img id="crossImage" src="cross.png"></button></div>');
        $(".divPhone1 div input:last").attr("id","phone"+count).attr("name","phone"+count);

        $("#removePhone").click(function(){
            $(this).parent().remove();
        });
    });

    //Addition of extra address fields.
    $("#addAddress").click(function(){
        count=count+1;
        $("#addAddress").after('<div><textarea class="input additionalAddress" type="number" placeholder="Additional address.."></textarea><button id="removeAddress" type="button"><img id="crossImage" src="cross.png"></button></div>');
        $(".divAddress1 div textarea:last").attr("id","address"+count).attr("name","address"+count);
        $("#removeAddress").click(function(){
            $(this).parent().remove();
        });
    });


    
});