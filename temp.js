$(".submit").on("click", function(event) {
  event.preventDefault();

  var newReservation = {
    customerName: $("#reserve-name")
      .val()
      .trim(),
    phoneNumber: $("#reserve-phone")
      .val()
      .trim(),
    customerEmail: $("#reserve-email")
      .val()
      .trim(),
    customerID: $("#reserve-unique-id")
      .val()
      .trim()
  };

  console.log(newReservation);

  $.post("/api/tables", newReservation, function(data) {
    if (data) {
      alert("Yay! You are officially booked!");
    } else {
      alert("Sorry you are on the wait list");
    }

    $("#reserve-name").val("");
    $("#reserve-phone").val("");
    $("#reserve-email").val("");
    $("#reserve-unique-id").val("");
  });
});
