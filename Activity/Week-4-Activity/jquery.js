// Activity Part 1
$("h1").text("Learning jQuery, yippee!")
$("p").text("This is updated using JQuery")

$("button").css("background-color", "blue")

// Activity Part 2
$('button').click(function() {
    // use the .toggle method on your p element
    $("p").toggle();});

// Activity Part 3
// create a new button element
$("<button id='AddItem'>Add Item</button>").appendTo('body').click(function() {
    // use the .append(...) method on your UL element
    $("ul").append("<li>Appended item</li>");
 })

// Activity Part 4
$("<button id='RemoveItem'>Remove Last Item</button>").appendTo('body').click(function() {
    // use the .append(...) method on your UL element
    $("ul li:last").remove();
 })