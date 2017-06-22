$(document).ready(function() {
  getQuote();
  $("#newQuote").click(function(){getQuote();});
});
function getQuote() {
  $.getJSON(
    "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=",
    function(a) {
      $("#quote").html(
        "<p id=\"quoteQuote\">" +
          a[0].content.replace(/<\/?p[^>]*>/g, "") +
          "</p><p id=\"quoteAuthor\">— " +
          a[0].title +
          "</p>"
      );
      $("#tweet-quote").attr("href", "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" + $("#quoteQuote").html() );
    }
  );
}
