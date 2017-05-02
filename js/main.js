$ ('.signin').click(function () {
  $ ('.modal').fadeIn('slow');
});

$ ('.close').click(function () {
  $ ('.modal').fadeOut('slow');
});

$ ('button.submit').click(function (){
  $ ('input').addClass('error');
});

$ ('input').mouseover(function (){
  $ (this).removeClass('error');
});
