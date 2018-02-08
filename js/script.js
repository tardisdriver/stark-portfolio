$("#hello").one(
  "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
  function() {
    $("#imma")
      .addClass("animated fadeInUp")
      .removeClass("hidden");
  }
);

$("#imma").one(
  "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
  function() {
    $("#projects").addClass("animated pulse");
  }
);

$("#projects").one(
  "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
  function() {
    $("#about").addClass("animated pulse");
  }
);

$("#hexagon").mouseenter(function() {
  $("#hexagon").addClass("animated pulse");
});

$("#hexagon").mouseout(function() {
  $("#hexagon").removeClass("animated pulse");
});
