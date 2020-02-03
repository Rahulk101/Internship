var checkFirstName=false;
var checkLastName=false;
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
var checkPhoneType=false;
var cloneAddress=0;
var countryValue="";
var countPhone=1;
var removePhone=1;
var removeAddress=1;
var totalAddress=0;
var checkAdditionalPhone=0;
var checkAdditionalAddress=0;
var count=0;
var countAddress=1;

$(document).ready(function(){
    captchaGeneration();
    $("#divEmployeeAnimate").hide();
    $("#employeeDetails").hide();
    $("#formEmployeeSpacing").hide();


    $("#divAnimate").hide();
    $("#divWelcome").hide();
    $("#divWelcome").fadeIn(2500);
    $("#divWelcome").fadeOut(2300);

    $("#country").click(function(){
        countryValue=$("#country").val();
        $("#selectState").text("Select");
    });

    
    $("#submitButton").click(function(){
        captchaVerify();
        
        validateInputFields();
    });
    $("#clearButton").click(function(){
        clearFields(count,totalAddress);
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
            if(countryValue!=="")
            {
                $("#selectState").text("Select");
            }
            if(countryValue==="India")
            {
                $("#state1").text("Odisha");
                $("#state2").text("Jharkhand");
                $("#state3").text("Bihar");
            }
            else if(countryValue==="Japan")
            {
                $("#state1").text("Hokkaido");
                $("#state2").text("Tohuku");
                $("#state3").text("Kanto");   
            }
            else{
                $("#state1").text("California");
                $("#state2").text("Florida");
                $("#state3").text("Texas");
            }
        }
    });


    // Validate all fields including captcha and display details of employee if true.
    $("#submitButton").on("click",function(e){
        e.preventDefault();

        //Validation of additional phone numbers.
        var i=0;
        for(i;i<count;i++)
        {
            if($(".divPhone1 div input:eq("+i+")").val().length!==10)
            {
                if($.trim($(".divPhone1 div input:eq("+i+")").val())==="")
                {
                    $(".divPhone1 div div:eq("+i+")").text("Enter phone number!");
                }
                else{
                    $(".divPhone1 div div:eq("+i+")").text("Enter valid number!");
                }
            }
            else
            {
                $(".divPhone1 div div:eq("+i+")").text("");
                checkAdditionalPhone=checkAdditionalPhone+1;
            }
        }

        //Validation of additional Address Fields.
        var j=0;
        for(j;j<totalAddress;j++)
        {
            if($(".divAddress1 div textarea:eq("+j+")").val()==="")
            {
                $(".divAddress1 div div:eq("+j+")").text("Enter your Address!");
            }
            else{
                $(".divAddress1 div div:eq("+j+")").text("");
                checkAdditionalAddress=checkAdditionalAddress+1;
            }
        }

        //Validation of all required data.
        if( ($.trim($("#firstName").val())!=="") && ($.trim($("#email").val())!=="") &&
        ($.trim($("#password").val())!=="") && ($.trim($("#confirmPassword").val())!=="") && 
        (($("input[type='radio']:checked").val())!==null) && ($.trim($("#phone1").val())!=="") && 
        ($.trim($("#address1").val())!=="") &&($.trim($("#city").val())!=="") && ($("#state").val()!=="") && 
        ($("#country").val()!=="") && ($("#aadhar").val()!=="") && ($("#pan").val()!=="") && checkPassword===true && checkConfirmPassword===true && 
        checkEmail===true && checkPhone===true &&checkAnswer===true && checkCountry===true && checkState===true && 
        checkAadhar===true && checkPan===true && checkPin===true && checkLastName===true && checkFirstName===true &&
        checkAdditionalPhone===count && checkAdditionalAddress===totalAddress)
        {
            $("#imageMindfire").hide();
            $("#userImageButton").hide();//Hiding reset button of image
            // $("#backgroundImage").css({'background-image':"url(backgroundImage.jfif)",'background-size':'contain','background-repeat':'no-repeat'});
            $(".fileUploadImage").css({'margin-left':'-703px','position':'absolute','margin-top':'121px','max-width':'259px'});
            $("#heading").hide();
            $("#divMain").hide();

            // $("#backgroundImage").attr("background-image","url("+backgroundImage.jfif+")");

            $("#employeeDetails").show();
            $("#formEmployeeSpacing").show();
            $("#divEmployeeAnimate").fadeIn(2200);
            $("#divEmployeeAnimate").fadeOut(3500);

            if(($.trim($("#lastName").val())!==""))
            {
                $("#nameData").text($("#firstName").val()+" "+$("#lastName").val());
            }
            else{
                $("#nameData").text($("#firstName").val());
            }
            $("#emailData").text($("#email").val());
            $("#panData").text($("#pan").val());
            $("#aadharData").text($("#aadhar").val());
            $("#genderData").text($("input[type='radio']:checked").val());
            var strPhone="";
            var strAddress=""
            var counterPhone=0;
            var counterAddress=0;

            //Getting Additional Phone Numbers.
            if(count>0)
            {
                for(counterPhone;counterPhone<count;counterPhone++)
                    {
                        if(counterPhone!==(count-1))
                        {
                            strPhone=strPhone+$(".divPhone1 div input:eq("+counterPhone+")").val()+",";
                        }
                        else{
                            strPhone=strPhone+$(".divPhone1 div input:eq("+counterPhone+")").val();
                        }
                    }
            }
            else{
                $("#divAdditionalPhone").remove();
            }

            //Getting Additional Addresses.
            if(totalAddress>0)
            {
                for(counterAddress;counterAddress<totalAddress;counterAddress++)
                {
                    if(counterAddress!==(count-1))
                    {
                        strAddress=strAddress+$(".divAddress1 div textarea:eq("+counterAddress+")").val()+",";
                    }
                    else{
                        strAddress=strAddress+$(".divAddress1 div textarea:eq("+counterAddress+")").val();
                    }
                }
            }
            else{
                $("#divAdditionalAddress").remove();
            }
            $("#phone1Data").text($("#phone1").val());
            $("#additionalPhonesData").text(strPhone);
            $("#countryData").text($("#country").val());
            $("#stateData").text($("#state").val());
            $("#cityData").text($("#city").val());
            $("#pinData").text($("#pin").val());
            $("#address1Data").text($("#address1").val());
            $("#additionalAddressData").text(strAddress);
            if(($("input[type='checkbox']:checked").val()===undefined)===false)
            {
                $("#newsData").text("Yes");
            }
            else{
                $("#newsData").text("No");
            }
        }
        

    });
    

    //Addition of extra phone number fields.
    $("#addPhone").on("click",function(){
        countPhone=countPhone+1;
        var phoneId="phone"+countPhone;
        $("#addPhone").after('<div class="divOptionalSpace"><input class="inputField" type="number"  placeholder="Additional number.."></input><button id="removePhone" type="button"><img id="crossImage" src="images/cross.png"></button><br><div class="val_error textError"></div></div>');
        $(".divPhone1 div input:first").attr("id","phone"+phoneId).attr("name",phoneId);
        count=countPhone-removePhone;

        $("#removePhone").click(function(){
            $(this).parent().remove();
            removePhone=removePhone+1;
            count=countPhone-removePhone;
        });
    });

    

    //Addition of extra address fields.
    $("#addAddress").click(function(){
        countAddress=countAddress+1;
        var addressId="address"+countAddress;
        $("#addAddress").after('<div class="divOptionalSpace"><textarea class="inputField additionalAddress" type="number" placeholder="Additional address.."></textarea><button id="removeAddress" type="button"><img id="crossImage" src="images/cross.png"></button><br><div class="val_error textError"></div></div>');
        $(".divAddress1 div textarea:first").attr("id","address"+addressId).attr("name","address"+addressId);
        totalAddress=countAddress-removeAddress;

        $("#removeAddress").click(function(){
            $(this).parent().remove();
            removeAddress=removeAddress+1;
            totalAddress=countAddress-removeAddress;
        });
    });
    
});