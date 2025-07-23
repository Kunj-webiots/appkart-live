(function ($) {
  "use strict";
  var masonry_gallery = {
    init: function () {
      $(".grid").isotope({
        itemSelector: ".grid-item",
      });
    },
  };

  $(document).ready(function () {
    masonry_gallery.init();
  });
})(jQuery);
