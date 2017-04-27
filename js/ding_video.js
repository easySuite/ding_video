(function ($) {
  'use strict';

  function setVideoClass() {
    var videoWrapper = $('.event-image');
    var videoImage = videoWrapper.find('iframe');
    if ($(videoImage).length > 0) {
      $(videoWrapper).addClass('video-image-wrapper');
    }
  }

  $(document).ready(function() {
    setVideoClass();
  });
})(jQuery);
