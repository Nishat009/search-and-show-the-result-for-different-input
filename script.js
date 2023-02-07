tailwind.config = {};

var country = "";
var state = "";
var city = "";

$(".change-toggle-button").click(function (e) {
    $(".delivery-content").slideDown();
    e.stopPropagation();
});
$(".delivery-content").click(function (e) {
    e.stopPropagation();
});
$(document).click(function () {
    $(".delivery-content").slideUp();
});
$(".search-name").on("keyup", function () {
    var value = this.value.toLowerCase().trim();
    $(".list li")
        .show()
        .filter(function () {
            return $(this).text().toLowerCase().trim().indexOf(value) == -1;
        })
        .hide();
});
$(".country-name").on("click", function () {
    country = $(this).text();
    $(".view-country")
        .removeClass("hidden")
        .html(
            country +
                `<img class="mx-2 my-1" src="https://i.ibb.co/sv8HcRt/Vector-9-Stroke.png" alt="">`
        );
    $(".state-list , .state-name").show();
    $(".country-list, .city-list").hide();
});
$(".state-name").on("click", function () {
    state = $(this).text();
    $(".view-state")
        .removeClass("hidden")
        .html(
            state +
                `<img class="mx-2 my-1" src="https://i.ibb.co/sv8HcRt/Vector-9-Stroke.png" alt="">`
        );
    $(".state-list , .country-list").hide();
    $(".city-list , .city-name").show();
});
$(".city-name").on("click", function () {
    city = $(this).text();
    $(".view-city").removeClass("hidden").html(city);
    $("#address-view").text(country + "," + state + "," + city);
    $(".country-list").show();
    $(".city-list , .delivery-content").hide();
    $(".view-city , .view-state , .view-country").addClass("hidden");
});
$(".view-country").on("click", function () {
    $(".country-list").show();
    $(".city-list , .city-name , .state-list , .state-name").hide();
    $(".view-city , .view-state").addClass("hidden");
});
$(".view-state").on("click", function () {
    $(".country-list , .city-list").hide();
    $(".state-list , .view-country").show();
    $(".view-city").addClass("hidden");
});
