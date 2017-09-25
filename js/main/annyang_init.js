$(document).ready(function() {
	//check SignIn
	$(function(){
    if (annyang) {

         var commands = {
            'about': aboutMe,
            'sujith\'s *area': showAccomplishments,
          };

          var aboutMe = function(){
            alert('About Me !!!')
          }

          var showAccomplishments = function(area) {
              alert(area)
          }

          // OPTIONAL: activate debug mode for detailed logging in the console
          annyang.debug();

          // Add voice commands to respond to
          annyang.addCommands(commands);

          // OPTIONAL: Set a language for speech recognition (defaults to English)
          // For a full list of language codes, see the documentation:
          // https://github.com/TalAter/annyang/blob/master/docs/FAQ.md#what-languages-are-supported
          annyang.setLanguage('en');

          // Start listening. You can call this here, or attach this call to an event, button, etc.
          annyang.start();
        } else {
            $(document).ready(function() {
                $('#unsupported').fadeIn('fast');
            });
        }
  });
});
