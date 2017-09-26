$(document).ready(function() {
	//check SignIn
	$(function(){
    if (annyang) {

      var aboutMe = function(){
        scrollTo('#about')
      }

      var showAccomplishments = function(area) {
          alert(area)
      }

      var commands = {
        'about': aboutMe,
        'sujith\'s *area': showAccomplishments,
      };

      annyang.debug();
      annyang.addCommands(commands);
      annyang.setLanguage('en');
      annyang.start();

      var scrollTo = function(identifier) {
                $('html, body').stop().animate({
                          scrollTop: ($(identifier).offset().top  - 50)
                }, , 1250, 'easeInOutExpo');
      }
    }
  });
});
