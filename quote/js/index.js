$(document).ready(function() {
  $('#new-quote-button').on('click', function(e) {
    e.preventDefault();
    $.ajax({
      url: 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',
      success: function(data) {
        $('.qod-text').html(data[0].content);
        $('.qod-author a').attr("href", data[0].link);
        $('.qod-author a').text(data[0].title);
        $('#tweet-button').attr('href', 'https://twitter.com/intent/tweet?text=' + $('.qod-text').text());
      },
      cache: false
    });
  });

  $('#tweet-button').on('click', function tweetQuote(e) {
    var twitterURL = 'https://twitter.com/intent/tweet';
    var text = $('.qod-text').text() + ' - ' + $('.qod-author a').text();
    if(text.length > 140) {
      text = text.substr(0, 137) + '...';
    }
    text = encodeURIComponent(text);
    window.open(twitterURL + '?text=' + text, '_blank');
  });
});