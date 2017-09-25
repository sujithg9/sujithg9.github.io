$(document).ready(function() {
	//check SignIn
	$(function(){
    if (annyang) {

      var aboutMe = function(){
        alert('About Me !!!')
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

    }
  });
});
