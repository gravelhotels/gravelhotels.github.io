/* Notify user of login */

function showMessage() {
    alert("You have been logged in!")
}

/* Allows toggle */

function displayHotels() {
    $("#activities").removeClass("visible").addClass("hidden");
    $("#hotels").removeClass("hidden").addClass("visible");
}

function displayActivities() {
    $("#hotels").removeClass("visible").addClass("hidden");
    $("#activities").removeClass("hidden").addClass("visible");
}

/* Retains search and reads from files to display results */

function saveSearch() {
    var user_input = document.getElementById("destination").value;
    readcsv(user_input);
}

function readcsv(user_input) {
    var file_location = "/data_files/hotels/" + user_input + ".csv";
    d3.csv(file_location).then(function(data) {
    });

}