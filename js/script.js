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
    $("#projects").addClass("animated fadeIn");
  }
);

$("#projects").one(
  "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
  function() {
    $("#about").addClass("animated fadeIn");
  }
);

$("#hexagon").mouseenter(function() {
  $("#hexagon").addClass("animated pulse");
});

$("#hexagon").mouseout(function() {
  $("#hexagon").removeClass("animated pulse");
});
