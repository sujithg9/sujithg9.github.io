$(document).ready(function() {

  $(function() {
    // Check if annyang is present
    if (annyang) {

      // Callback function for the command about
      var aboutMe = function() {
        scrollTo('#about')
      }

      // Callback function for the command showAccomplishments
      var showAccomplishments = function(area) {
        if (area.toLowerCase().indexOf("skill") >= 0) {
          scrollTo('#skills')
        } else if (area.toLowerCase().indexOf("education") >= 0) {
          scrollTo('#education')
        } else if (area.toLowerCase().indexOf("experience") >= 0) {
          scrollTo('#experience')
        } else if (area.toLowerCase().indexOf("portfolio") >= 0 || area.toLowerCase().indexOf("projects") >= 0) {
          scrollTo('#portfolio')
        } else if (area.toLowerCase().indexOf("contact") >= 0) {
          scrollTo('#contact')
        }
      }

      // Dict of commands that annyang responds to with callback fucntionality
      var commands = {
        'about': aboutMe,
        'show me his *area': showAccomplishments,
        'take me to his *page': redirectToPages,
      };

      // Activate debug to check for log event on web console to debug issues if any
      annyang.debug();

      // Registering the above commands with annyang
      annyang.addCommands(commands);

      // Setting English as the default lang for SpeechRecognition
      annyang.setLanguage('en');

      // Initializing annyang to start listening to voice commands
      annyang.start();

      var scrollTo = function(identifier) {
        $('html, body').stop().animate({
          scrollTop: ($(identifier).offset().top - 50)
        }, 1250, 'easeInOutExpo');
      }
    }
  });
});
