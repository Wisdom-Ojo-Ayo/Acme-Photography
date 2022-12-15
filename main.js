// Animate smooth scrol
$('#view-work').on('click',function() {
  const images = $('#images').position().top;
  $('html,body').animate(
    {
    scrollTo: images
  },
   900
   );
});