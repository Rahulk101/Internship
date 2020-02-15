var checkName=false;
var passwordLength=false;
var checkPassword=false;
var checkConfirmPassword=false;
var checkEmail=false;
var checkPan=false;
var checkAadhar=false;
var checkPhone=false;
var checkAnswer=false;
var checkGender=false;
function validateInputFields(totalPhone,totalAddress)
{

    var namePattern=/[?.=*\d]+/;
    var emailpattern=/^([a-z A-Z 0-9\. -]+)@([a-z A-Z]+)\.([a-z]{2,10})$/;
    var panData=/(?=.*\d)(?=.*[A-Z])/;
    var passwordData=/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#\$%\^&]){8}/;

    //INPUT FIELDS VALIDATION.

    //Name validation.
    var checkFirstName=false;
    var checkLastName=false;
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
        $("#lastNameError").text("");
        checkLastName=true;
    }
    if(checkFirstName===true && checkLastName===true)
    {
        checkName=true;
    }
    else{
        checkName=false;
    }



    //Email Validation.
    if((emailpattern.test($.trim($("#email").val())) === false) && $("#email").val().length>0)
        {
            $("#emailError").text("Provide valid Email id!");
            checkEmail=false;
        }
    else{
        checkEmail=true;
    }

    //Aadhar Validation.
    if($.trim(($("#aadhar").val())).length!==12 && ($.trim($("#aadhar").val())!==""))
        {
            $("#aadharError").text("Enter a valid Aadhar!");
            checkAadhar=false;
        }
    else{
        checkAadhar=true;
    }

    //Pan Validation.
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

    //Password Validation.
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

    if($.trim($("#password").val())!== ($.trim($("#confirmPassword").val())) )
        {
            $("#confirmPasswordError").text("The two passwords doesn't match!");
            checkConfirmPassword=false;
        }
    else{
        $("#confirmPasswordError").text("");
        checkConfirmPassword=true;
    }

    //Error messages on empty fields.
    if($.trim($("#firstName").val())==="")
    {
        $("#firstNameError").text("First name required!");
        checkName=false;
    }
    else if(checkLastName===true)
    {
        checkName=true;
    }

    if($.trim($("#email").val())==="")
    {
        $("#emailError").text("Email required!");
        checkEmail=false;
    }
    else{
        checkEmail=true;
    }

    if(($("input[type='radio']:checked").val())===undefined){
        $("#genderError").text("Gender required!");
        checkGender=false;
    }
    else{
        $("#genderError").text("");
        checkGender=true;
    }

    if($.trim($("#pan").val())==="")
    {
        $("#panError").text("PAN required!");
        checkPan=false;
    }
    else{
        checkPan=true;
    }

    if($.trim($("#aadhar").val())==="")
    {
        $("#aadharError").text("Aadhar number required!");
        checkAadhar=false;
    }
    else{
        checkAadhar=true;
    }

    if($.trim($("#password").val())==="")
    {
        $("#passwordError").text("Password required!");
        checkPassword=false;
    }
    else{
        checkPassword=true;
    }

    if($.trim($("#confirmPassword").val())==="")
    {
        $("#confirmPasswordError").text("Confirm your Password!");
        checkConfirmPassword=false;
    }
    else{
        checkConfirmPassword=true;
    }


    //Error meassage on address field(s).
    var i=1;
    var addressCountTrue=0;
    for(i;i<totalAddress;i++)
    {
        var addressId="#address"+i;
        var addressErrorId="#addressError"+i;
        var checkAddress=false;

        var countryId="#country"+i;
        var countryErrorId="#countryError"+i;
        var checkCountry=false;

        var stateId="#state"+i;
        var stateErrorId="#stateError"+i;
        var checkState=false;

        var cityId="#city"+i;
        var cityErrorId="#cityError"+i;
        var checkCity=false;

        var pinId="#pin"+i;
        var pinErrorId="#pinError"+i;
        var checkPin=false;

        

        if($.trim($(addressId).val())==="")
        {
            $(addressErrorId).text("Enter Address!");
            checkAddress=false;
        }
        else{
            checkAddress=true;
        }

        if($(countryId).val()==="select")
        {
            $(countryErrorId).text("Select Country!");
            checkCountry=false;
        }
        else
        {
            checkCountry=true;
        }

        if($(stateId).val()==="select")
        {
            $(stateErrorId).text("Select State!");
            checkState=false;
        }
        else{
            checkState=true;
        }

        if($.trim($(cityId).val())==="")
        {
            $(cityErrorId).text("Enter City!");
            checkCity=false;
        }
        else{
            checkCity=true;
        }
        if($.trim($(pinId).val())==="")
        {
            $(pinErrorId).text("Enter PIN!");
            checkPin=false;
        }
        else{
            checkPin=true;
        }
        

        if(checkAddress===true && checkCountry===true && checkState===true && checkCity===true &&
            checkPin===true)
        {
            addressCountTrue=addressCountTrue+1;
        }
    }

    //Error messages on empty phone field(s).
    var j=1;
    var phoneCountTrue=0;
    for(j;j<totalPhone;j++)
    {
        var phoneId="#phone"+j;
        var phoneErrorId="#phoneError"+j;
        var phoneCheck=false;

        if($.trim($(phoneId).val())==="")
        {
            $(phoneErrorId).text("Enter Phone number!");
            phoneCheck ==false;
        }
        else if($.trim($(phoneId).val()).length!==10)
        {
            $(phoneErrorId).text("Enter Valid number!");
            phoneCheck=false;
        }
        else{
            phoneCheck=true;
            phoneCountTrue=phoneCountTrue+1;
        }
    }


    //Returning 'true' on entering valid data in address and phone field(s) else 'false'.
    if((phoneCountTrue===(totalPhone-1)) && (addressCountTrue===(totalAddress-1)))
    {
        return true;
    }
    else{
        return false;
    }
}