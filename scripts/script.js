(function ($) {
  var $dragMe = $(".dragme"),
    $container = $(".sl-container"),
    $viewAfter = $(".view-after");
  $dragMe.draggable({
    containment: "parent",
    drag: function () {
      $viewAfter.css({
        width: parseFloat($(this).css("left")) + 5,
      });
    },
  });
  $container.on("click", function (event) {
    var eventLeft = event.pageX - $container.offset().left - 15;
    animateTo(eventLeft);
  });
  animateTo("50%");
  function animateTo(_left) {
    $dragMe.animate(
      {
        left: _left,
      },
      "slow",
      "linear"
    );
    $viewAfter.animate(
      {
        width: _left,
      },
      "slow",
      "linear"
    );
  }
})(jQuery);
(function ($) {
  var $dragMe = $(".dragme2"),
    $container = $(".sl-container2"),
    $viewAfter = $(".view-after2");
  $dragMe.draggable({
    containment: "parent",
    drag: function () {
      $viewAfter.css({
        width: parseFloat($(this).css("left")) + 5,
      });
    },
  });
  $container.on("click", function (event) {
    var eventLeft = event.pageX - $container.offset().left - 15;
    animateTo(eventLeft);
  });
  animateTo("50%");
  function animateTo(_left) {
    $dragMe.animate(
      {
        left: _left,
      },
      "slow",
      "linear"
    );
    $viewAfter.animate(
      {
        width: _left,
      },
      "slow",
      "linear"
    );
  }
})(jQuery);
