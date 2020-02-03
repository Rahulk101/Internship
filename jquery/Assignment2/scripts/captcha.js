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