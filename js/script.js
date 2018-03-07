$("#hello").one(
  "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
  function() {
    $("#imma")
      .addClass("animated fadeInUp")
      .removeClass("hidden");
  }
);

$("#hexagon").mouseenter(function() {
  $("#hexagon").addClass("animated pulse");
});

$("#hexagon").mouseout(function() {
  $("#hexagon").removeClass("animated pulse");
});
