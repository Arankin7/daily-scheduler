// Display current time
var currentDate = moment().format('dddd, MMM Do YYYY');

$("#currentDay").html(currentDate);

$(document).ready(function(){
    // Saves values when save btn is clicked
    $(".saveBtn").on("click", function(){
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        localStorage.setItem(time, text);
    });

    function timeStatus(){

        var currentTime = moment().hour();

        // Loops through each time-block to check the time
        $(".time-block").each(function(){
            var timeBlock = parseInt($(this).attr("id"));
            
            if(timeBlock === currentTime){
                $(this).addClass("present")
            }
            else if (timeBlock > currentTime){
                $(this).addClass("future")
            }
            else if (timeBlock < currentTime){
                $(this).addClass("past")
            }
        });
    }

    // loads all local storage

    $("#9 .description").val(localStorage.getItem("9"));
    $("#10 .description").val(localStorage.getItem("10"));
    $("#11 .description").val(localStorage.getItem("11"));
    $("#12 .description").val(localStorage.getItem("12"));
    $("#13 .description").val(localStorage.getItem("13"));
    $("#14 .description").val(localStorage.getItem("14"));
    $("#15 .description").val(localStorage.getItem("15"));
    $("#16 .description").val(localStorage.getItem("16"));
    $("#17 .description").val(localStorage.getItem("17"));

    timeStatus();
})

