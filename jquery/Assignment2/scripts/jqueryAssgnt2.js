var countPhone=1;
var removePhone=1;
var addAddressCount=0;
var removeAdditionalAddress=0;
var totalAddress=0;
var checkAdditionalPhone=0;
var checkAdditionalAddress=0;
var countTotalPhone=0;
var addAdditionalAddress=1;

$(document).ready(function(){
    captchaGeneration();
    $("#divEmployeeAnimate").hide();
    $("#employeeDetails").hide();
    $("#formEmployeeSpacing").hide();


    $("#divAnimate").hide();
    $("#divWelcome").hide();
    $("#divWelcome").fadeIn(2500);
    $("#divWelcome").fadeOut(2300);

    
    

    //Country wise state list
    var countries={India:["Odisha","Jharkhand","Bihar"],Japan:["Hokkaido","Tohuku","Kanto"],USA:["California","Florida","Texas"]};

    $('body').on('change',".countryChange",function(){ 
        var country = $(this).val();
        var countryId=$(this).attr("id");
        var position=countryId.substring(7,8);
        var stateId='#state'+position+'';
        if(country==="select"){

            $(stateId).append("<option>Select</option>");
        }else{
            
            $(stateId).empty();
            $(stateId).append("<option value='select'>Select</option>");

            var len = countries[country].length;
            for(var i=0;i<len;i++) {
                $(stateId).append("<option value="+countries[country][i]+">"+ countries[country][i] +"</option>");
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

    $("body").on("blur",".additionalAddress",function(){
        var addressId=$(this).attr("id");
        var position=addressId.substring(7,8);
        var addressErrorId="#addressError"+position;
        if($.trim($(this).val())==="")
        {
            $(addressErrorId).text("Enter Address!");
        }
        else{
            $(addressErrorId).text("");
        }
    });
    $("body").on("blur",".countryChange",function(){
        var countryId=$(this).attr("id");
        var position=countryId.substring(7,8);
        var countryErrorId="#countryError"+position;
        if($.trim($(this).val())==="select")
        {
            $(countryErrorId).text("Select Country!");
        }
        else{
            $(countryErrorId).text("");
        }
    });
    $("body").on("blur",".stateChange",function(){
        var stateId=$(this).attr("id");
        var position=stateId.substring(5,6);
        var stateErrorId="#stateError"+position;
        if($.trim($(this).val())==="select")
        {
            $(stateErrorId).text("Select State!");
        }
        else{
            $(stateErrorId).text("");
        }
    });
    $("body").on("blur",".pinValue",function(){
        var pinId=$(this).attr("id");
        var position=pinId.substring(3,4);
        var pinErrorId="#pinError"+position;
        if($.trim($(this).val())==="")
        {
            $(pinErrorId).text("Enter PIN!");
        }
        else{
            $(pinErrorId).text("");
        }
    });
    $("body").on("blur",".cityValue",function(){
        var cityId=$(this).attr("id");
        var position=cityId.substring(4,5);
        var cityErrorId="#cityError"+position;
        if($.trim($(this).val())==="")
        {
            $(cityErrorId).text("Enter City!");
        }
        else{
            $(cityErrorId).text("");
        }
    });

    $("body").on("blur",".additionalPhone",function(){
        var phoneId=$(this).attr("id");
        var position=phoneId.substring(5,6);
        var phoneErrorId="#phoneError"+position;
        if($.trim($(this).val())==="")
        {
            $(phoneErrorId).text("Enter Phone number!");
        }
        else{
            $(phoneErrorId).text("");
        }
    });

    // Validate all fields including captcha and display details of employee if true.
    $("#submitButton").on("click",function(){
        captchaVerify();
        var addressPhoneVerify=false;
        var addressPhoneVerify=validateInputFields((countTotalPhone+2),(totalAddress+2));


        //Validation of all required data.
        if( ($.trim($("#firstName").val())!=="") && ($.trim($("#email").val())!=="") &&
        ($.trim($("#password").val())!=="") && ($.trim($("#confirmPassword").val())!=="") && 
        (($("input[type='radio']:checked").val())!==undefined) &&($("#aadhar").val()!=="") && checkPassword===true &&
        checkConfirmPassword===true && checkEmail===true && checkAnswer===true && checkGender===true && 
        checkAadhar===true && checkPan===true && checkName===true && addressPhoneVerify===true)
        {
            $("#imageMindfire").hide();
            $("#userImageButton").hide();//Hiding reset button of image
            $(".fileUploadImage").css({'margin-left':'-703px','position':'absolute','margin-top':'121px','max-width':'259px'});
            $("#heading").hide();
            $("#divMain").hide();

            $("#employeeDetails").show();
            $("#formEmployeeSpacing").show();
            $("#divEmployeeAnimate").fadeIn(2200);
            $("#divEmployeeAnimate").fadeOut(3500);

            //Getting the entered data and displaying in another div.
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
            var counterPhone=0;

            //Getting Additional Phone Numbers.
            if(countTotalPhone>0)
            {
                for(counterPhone;counterPhone<countTotalPhone;counterPhone++)
                    {
                        if(counterPhone!==(countTotalPhone-1))
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


            $("#phoneData1").text($("#phone1").val());
            $("#additionalPhonesData").text(strPhone);
            $("#countryData1").text($("#country1").val());
            $("#stateData1").text($("#state1").val());
            $("#cityData1").text($("#city1").val());
            $("#pinData1").text($("#pin1").val());
            $("#addressData1").text($("#address1").val());
            if(($("input[type='checkbox']:checked").val()===undefined)===false)
            {
                $("#newsData").text("Yes");
            }
            else{
                $("#newsData").text("No");
            }
        }

        //Displaying Additional Address Data
        var a=2;
        for(a;a<(totalAddress+2);a++)
        {
            var addAdditionalAddressData='<fieldset class="fieldsetAddress">'+
                                            '<legend class="legendStyle">Address'+a+'</legend>'+
                                            '<div class="divEmployeeSpace"><label class="lblAttribute">Address:</label><div class="divData"><label class="lblData" id='+"addressData"+a+'></label></div></div>'+
                                            '<div class="divEmployeeSpace"><label class="lblAttribute">Country:</label><div class="divData"><label class="lblData" id='+"countryData"+a+'></label></div></div>'+
                                            '<div class="divEmployeeSpace"><label class="lblAttribute">State:</label><div class="divData"><label class="lblData" id='+"stateData"+a+'></label></div></div>'+
                                            '<div class="divEmployeeSpace"><label class="lblAttribute">City:</label><div class="divData"><label class="lblData" id='+"cityData"+a+'></label></div></div>'+
                                            '<div class="divEmployeeSpace"><label class="lblAttribute">PIN:</label><div class="divData"><label class="lblData" id='+"pinData"+a+'></label></div></div>'+
                                        '</fieldset>'
            $("#divAdditionalAddress").last().append(addAdditionalAddressData);

            $("#addressData"+a).text($('.divOptionalAddress:eq('+(a-2)+') textarea').val());
            $("#countryData"+a).text($('.divOptionalAddress:eq('+(a-2)+') .countryChange').val());
            $("#stateData"+a).text($('.divOptionalAddress:eq('+(a-2)+') .stateChange').val());
            $("#pinData"+a).text($('.divOptionalAddress:eq('+(a-2)+') .pinValue').val());
            $("#cityData"+a).text($('.divOptionalAddress:eq('+(a-2)+') .cityValue').val());
        }
        

    });
    

    //Addition of extra phone number fields.
    $("#addPhone").on("click",function(){
        countPhone=countPhone+1;
        var phoneId="phone"+countPhone;
        var phoneField='<div class="divOptionalSpace divPhone">'+
                            '<input class="inputField additionalPhone" type="number"  placeholder="Additional number.."></input><button class="removePhone" type="button"><img id="crossImage" src="images/cross.png"></button><br>'+
                            '<div id='+"phoneError"+countPhone+' class="val_error textError"></div>'+
                        '</div>'
        $("#addPhone").after(phoneField);
        
        $(".divPhone1 div input:first").attr("id",phoneId).attr("name",phoneId);
        countTotalPhone=countPhone-removePhone;

        $(".removePhone").click(function(){
            $(this).parent().remove();
            removePhone=removePhone+1;
            countTotalPhone=countPhone-removePhone;
        });
    });

    //Addition of extra Address Field.
    $("#addAddress").on("click",function(){
        addAdditionalAddress=addAdditionalAddress+1;
        addAddressCount=addAddressCount+1;
        totalAddress=addAddressCount-removeAdditionalAddress;
        var additionalAddressField='<div class="divOptionalAddress">'+
                                        '<div class="divSpace">'+
                                            '<label for="address1" class="labelText">Address'+(addAddressCount+1)+'</label>'+
                                            '<div class="divAddress">'+
                                                '<textarea class="inputField additionalAddress" type="text" id='+"address"+addAdditionalAddress+' name="address1" placeholder="Additional Address.."></textarea>'+
                                                '<button class="removeAddress" type="button"><img id="crossImage" src="images/cross.png"></button><br>'+
                                            '</div>'+
                                        '</div>'+
                                        '<div id='+"addressError"+addAdditionalAddress+' class="val_error textError"></div>'+
    

                                        '<div class="divSpace">'+
                                            '<label for='+"country"+addAdditionalAddress+' class="star labelText">Country</label>'+
                                            '<br>'+
                                            '<div style="display:block">'+
                                                '<select class="countryChange" id='+"country"+addAdditionalAddress+'>'+
                                                    '<option id="select" value="select">Select</option>'+
                                                    '<option value="India">India</option>'+
                                                    '<option value="Japan">Japan</option>'+
                                                    '<option value="USA">USA</option>'+
                                                '</select>'+
                                            '</div>'+
                                        '</div>'+
                                        '<div id='+"countryError"+addAdditionalAddress+' class="val_error textError"></div>'+

                                        '<div class="divCitySpace">'+
                                            '<label for='+"city"+addAdditionalAddress+' class="star labelText">City</label>'+
                                            '<br>'+
                                            '<input class="inputField cityValue" type="text" id='+"city"+addAdditionalAddress+' name="city" placeholder="City..">'+
                                        '</div>'+
                                        '<div id='+"cityError"+addAdditionalAddress+' class="val_error textError cityError"></div>'+

                                        '<div class="divPinSpace">'+
                                            '<label for='+"pin"+addAdditionalAddress+' class="star labelText">PIN</label>'+
                                            '<br>'+
                                            '<input class="inputField pinValue" type="number" id='+"pin"+addAdditionalAddress+' name="pin" placeholder="Pin code..">'+
                                        '</div>'+
                                        '<div id='+"pinError"+addAdditionalAddress+' class="val_error textError pinError"></div>'+

                                        '<div class="divSpace">'+
                                            '<label for='+"state"+addAdditionalAddress+' class="star labelText">State</label>'+
                                            '<br>'+
                                            '<div style="display:block">'+
                                                '<select class="stateChange" id='+"state"+addAdditionalAddress+'>'+
                                                    '<option value="select">Select</option>'+
                                                    '<option value="Odisha">Odisha</option>'+
                                                    '<option value="Jharkhand">Jharkhand</option>'+
                                                    '<option value="Bihar">Bihar</option>'+
                                                '</select>'+
                                            '</div>'+
                                        '</div>'+
                                        '<div id='+"stateError"+addAdditionalAddress+' class="val_error textError"></div>'+
                                    '</div>'
        $(".divFullAddress").last().append(additionalAddressField);

        $(".removeAddress").on("click",function(){
            $(this).parent().parent().parent().remove();
            removeAdditionalAddress=removeAdditionalAddress+1;
            totalAddress=addAddressCount-removeAdditionalAddress;
        });
        // $(".divFullAddress").first().append($(".divFullAddress").clone());
        // $(".divFullAddress:eq("+num+") label:first").text("Additional Address");

    });
    
    //Clear fields.
    $("#clearButton").on("click",function(){
        $("#firstName").val("");
        $("#firstNameError").text("");

        $("#lastName").val("");
        $("#lastNameError").text("");

        $("#email").val("");
        $("#emailError").text("");

        $("#pan").val("");
        $("#panError").text("");

        $("#aadhar").val("");
        $("#aadharError").text("");

        $("#pan").val("");
        $("#panError").text("");

        $("#password").val("");
        $("#passwordError").text("");

        $("#confirmPassword").val("");
        $("#confirmPasswordError").text("");

        $("input[type='radio']").prop("checked",false);

        $("input[type='checkbox']").prop('checked',false);

        $("#phone1").val("");
        $("#phoneError1").text("");
        $(".divPhone").remove();
        
        $("#address1").val("");
        $("#addressError1").text("");
        $("#country1").val("select");
        $("#countryError1").text("");
        $("#state1").val("select");
        $("#stateError1").text("");
        $("#pin1").val("");
        $("#pinError1").text("");
        $("#city1").val("");
        $("#cityError1").text("");
        $(".divOptionalAddress").remove();

        $("#answer").val("");
    });
});