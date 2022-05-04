var currentTime = dayjs().format('dddd, MMMM D, YYYY h:mm A');
$("#currentDay").html(currentTime);

$(document).ready(function() {
    $(".saveBtn").on("click", function() {
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        localStorage.setItem(time, text);
    })

    function timeCheck() {
        var currentHour = dayjs().hour();
        $(".time-block").each(function() {
            var rowTime = parseInt($(this).attr("id").split("hour")[1]);

            if (rowTime < currentHour) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            } else if (rowTime === currentHour) {
                $(this).removeClass("future");
                $(this).removeClass("past");
                $(this).addClass("present");
            } else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }
        })
    }

    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour1 .description").val(localStorage.getItem("hour1"));
    $("#hour2 .description").val(localStorage.getItem("hour2"));
    $("#hour3 .description").val(localStorage.getItem("hour3"));
    $("#hour4 .description").val(localStorage.getItem("hour4"));
    $("#hour5 .description").val(localStorage.getItem("hour5"));

    timeCheck();
})