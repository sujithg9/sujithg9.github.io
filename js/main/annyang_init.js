$(document).ready(function() {
	//check SignIn
	$(function(){
    if (annyang) {

      var aboutMe = function(){
        scrollTo('#about')
      }

      var showAccomplishments = function(area) {
          if (area.toLowerCase().indexOf("skill") >= 0){
              scrollTo('#skills')
          }else if (area.toLowerCase().indexOf("education") >= 0) {
              scrollTo('#education')
          }else if (area.toLowerCase().indexOf("experience") >= 0) {
              scrollTo('#experience')
          }else if (area.toLowerCase().indexOf("portfolio") >= 0 || area.toLowerCase().indexOf("projects") >= 0) {
              scrollTo('#portfolio')
          }else if (area.toLowerCase().indexOf("contact") >= 0) {
              scrollTo('#contact')
          }
      }

      var commands = {
        'about': aboutMe,
        'show me his *area': showAccomplishments,
      };

      annyang.debug();
      annyang.addCommands(commands);
      annyang.setLanguage('en');
      annyang.start();

      var scrollTo = function(identifier) {
                $('html, body').stop().animate({
                          scrollTop: ($(identifier).offset().top  - 50)
                }, 1250, 'easeInOutExpo');
      }
    }
  });
});
