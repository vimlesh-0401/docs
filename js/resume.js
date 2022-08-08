(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#sideNav'
  });
  
  const skillClasses = [
    'java', 'nodejs', 'javascript', 'ruby_on_rails', 'mysql',
    'postgresql', 'debian', 'html5', 'nginx', 'css3', 'jquery', 'sass',
    'bootstrap', 'npm', 'terminal', 'code', 'netbeans', 'brackets', 'eclipse',
    'cloud9', 'scrum', 'mongodb', 'sublime', 'aws', 'sqllite', 'vim', 'react',
    'ubuntu', 'linux', 'windows', 'angular', 'database', 'ruby',
    'github', 'bitbucket', 'visualstudio', 'docker', 'backbone'
  ]
  var arr = []
  skillClasses.forEach((skill) => {
    arr.push('<li class="list-inline-item" title="',skill.toLocaleUpperCase(),'">')
    arr.push('<i class="devicons devicons-',skill,'"></i></li>')
  })
  $("#skills ul.list-icons").html(arr.join(''))
})(jQuery); // End of use strict
