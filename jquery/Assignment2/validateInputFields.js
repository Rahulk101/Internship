function validateInputFields()
{
    if( ($.trim($("#firstName").val())==="") || ($.trim($("#email").val())==="") || ($.trim($("#password").val())=== "")||
    ($.trim($("#confirmPassword").val())==="") ||($("input[type='radio']:checked").val()===null) ||
    ($.trim($("#phone1").val())==="") || ($.trim($("#address1").val())==="") ||($.trim($("#city").val())==="") ||
    ($("#state").val()==="Select") || ($("#country").val()==="Select"))                                
    { 
        window.alert("Please enter the data in the required feilds.");
    }

    var namePattern=/[?.=*\d]+/;
    if((namePattern.test($.trim($("#firstName").val())))===true)
    {
        $("#firstNameError").text("Provide a valid name!");
        checkFirstName=false;
    }
    else{
        checkFirstName=true;
    }
    if((namePattern.test($.trim($("#lastName").val())))===true)
    {
        $("#lastNameError").text("Provide a valid name!");
        checkLastName=false;
    }
    else{
        checkLastName=true;
    }


    var emailpattern=/^([a-z A-Z 0-9\. -]+)@([a-z A-Z]+)\.([a-z]{2,10})$/;
    if((emailpattern.test($.trim($("#email").val())) === false) && $("#email").val().length>0)
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

    var phonePattern=/(?=.*[a-z])(?=.*[A-Z])/;

    if($.trim(($("#aadhar").val())).length!==12 && ($.trim($("#aadhar").val())!==""))
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
        $("#confirmPasswordError").text("Confirm your Password!");
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
function clearFields(count)
{
    $("#firstName").val("");
    $("#lastName").val("");
    $("#email").val("");
    $("#pan").val("");
    $("#aadhar").val("");
    $("#pan").val("");
    $("#password").val("");
    $("#confirmPassword").val("");
    $("input[type='radio']").prop("checked",false);
    $("#phone1").val("");
    $("#address1").val("");
    $("#selectCountry").val("Select");
    $("#selectState").val("Select");
    $("#city").val("");
    $("#pin").val("");
    $("input[type='checkbox']").prop('checked',false);

    var i=0;
    for(i;i<count;i++)
    {
        if($(".divPhone1 div input:eq("+i+")").val(""));
    }

    var j=0;
    for(j;j<totalAddress;j++)
    {
        if($(".divAddress1 div textarea:eq("+j+")").val(""));
    }
}