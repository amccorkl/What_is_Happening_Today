var currentDateEl = $("#current-day");
var currentTimeEl = $("#current-time");
var textareaEl = $(".textarea");

//array for the time blocks
var hoursArr = [$("#07"), $("#08"), $("#09"), $("#10"), $("#11"), $("#12"), $("#13"), $("#14"), $("#15"), $("#16"), $("#17")];

//display current date and time at the top of the UI calendar
var today = moment().format("MMMM Do, YYYY");
var timeHour = moment().format("LT");
currentDateEl.text(today);
currentTimeEl.text(timeHour);

//color code the calendar time blocks
var currentTime = moment().hour();

//load the color for past, present, future upon app initiation
//function to color code the calendar hoursArr
function colorCodeHours() {
    for (var i = 0; i < hoursArr.length; i++) {
        var hoursEl = hoursArr[i].attr("id");
        hoursArr[i].children("textarea").val(JSON.parse(localStorage.getItem(hoursEl)))
        if(hoursEl < currentTime) {
            hoursArr[i].children("textarea").addClass("past");
            console.log("past");
        } else if (hoursEl > currentTime) {
        hoursArr[i].children("textarea").addClass("future");
        } else {
        hoursArr[i].children("textarea").addClass("present");
        }
    }
}

//save buttons to set local localStorage
$(".saveBtn").on("click", function (){
    var userInput = $(this).siblings("textarea");
    localStorage.setItem(userInput.parent().attr("id"), JSON.stringify(userInput.val()));
    console.log("save btn working?");
})

//clear button removes info from local storage
$(".clear-btn").on("click", function(){
    var clearTextArea = $(this).siblings("textarea");
    clearTextArea.val("");
    localStorage.removeItem(clearTextArea.parent().attr("id"));
    console.log("clear btn working?");
})

colorCodeHours();