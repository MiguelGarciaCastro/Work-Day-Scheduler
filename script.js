var saveBtn = $(".saveBtn");

$("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));

function timeBlockColor() {
    var hour = moment().hours();

    $(".time-block").each(function() {
        var currentHour = parseInt($(this).attr("id"));
            
        if (currentHour > hour) {
            $(this).addClass("future");
        } else if (currentHour === hour) {
            $(this).addClass("present");
        } else {
            $(this).addClass("past");
        }
    })
};

function usePlanner() {
     $(".hour").each(function() {
        var currentHour = $(this).text();
        var currentPlan = localStorage.getItem(currentHour);

        if(currentPlan !== null) {
            $(this).siblings(".plan").val(currentPlan);
        }
    });
}

saveBtn.on("click", function() {
    var plan = $(this).siblings(".plan").val();
    var time = $(this).siblings(".hour").text();
    
    localStorage.setItem(time, plan);
});




timeBlockColor();
usePlanner();

