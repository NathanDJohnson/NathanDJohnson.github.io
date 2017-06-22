$(document).ready(function(){
  $(document).on("scroll",function(){
    var scrollPos = $(document).scrollTop();
    $("nav li").each(function(){
      var currLink = $(this);
      currLink.removeClass("active");
      var refElement = $(currLink.find("a").attr("href"));
      var refPos = refElement.position().top - 60;
      if( refPos <= scrollPos && refPos + refElement.height() > scrollPos - 60 ) {
        $("nav li a").each(function(){ $(this).parent().removeClass("active"); });
        currLink.addClass("active");
      }
    });
  });

  // Select all links with hashes
  $('a[href*="#"]').click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          // -50 to compensate for fixed header
          scrollTop: target.offset().top - 50
        }, 1000 );
      }
    }
  });
});
