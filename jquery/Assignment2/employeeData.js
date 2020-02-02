$(document).ready(function(){
    $("#divAnimate").fadeIn(2200);
    $("#divAnimate").fadeOut(3500);

    $("#name").text(localStorage.getItem("name"));
    $("#email").text(localStorage.getItem("email"));
    $("#pan").text(localStorage.getItem("pan"));
    $("#aadhar").text(localStorage.getItem("aadhar"));
    // $("#password").text(localStorage.getItem("password"));
    $("#gender").text(localStorage.getItem("gender"));
    $("#phone1").text(localStorage.getItem("phone1"));
    $("#address1").text(localStorage.getItem("address1"));
    $("#country").text(localStorage.getItem("country"));
    $("#state").text(localStorage.getItem("state"));
    $("#city").text(localStorage.getItem("city"));
    $("#pin").text(localStorage.getItem("pin"));
    $("#news").text(localStorage.getItem("news"));
});