(function ($) {
  'use strict';

  function setVideoClass() {
    var videoImage = $('.event-image > .media-youtube-video');
    if($(videoImage).length > 0) {
      $(videoImage).parent().addClass('video-image-wrapper');
    }
  }

  $(document).ready(function() {
    setVideoClass();
  });
})(jQuery);
