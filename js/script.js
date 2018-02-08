$(".hexagon").mouseenter(function() {
  $(".home-text").fadeIn(1000, function() {
    $(".home-text").removeClass("hidden");
  });
});

$(".hexagon").mouseleave(function() {
  $(".home-text").fadeOut(1000, function() {
    $(".home-text").addClass("hidden");
  });
});
