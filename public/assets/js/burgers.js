$(document).on("click", ".eatButton", function () {
    var id = $(this).data("id");
    var devoured = $(this).data("devoured");
    console.log(devoured);

    var newlyDevoured = {
        devoured: devoured
    };

    $.ajax("/api/burgers/" + id, {
        method: "PUT",
        data: newlyDevoured
    }).then(function () {
        location.reload();
    })
})

$(document).on("click", "#order-button", function(event) {
    event.preventDefault();
    var newBurgerName = $("#burger_name").val().trim();

    if (newBurgerName) {
        var newBurger = {
            burger_name: newBurgerName
        }

        $.post("/api/burgers", newBurger, function() {
            location.reload();
        })
    };
})