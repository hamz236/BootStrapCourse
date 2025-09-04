// Wait until page loads
$(document).ready(function () {
  
  // Initialize Isotope after images are loaded
  var $grid = $('.xgrid').imagesLoaded(function() {
    // Initialize Isotope
    $grid.isotope({
      itemSelector: '.card',
      layoutMode: 'fitRows',
      percentPosition: true
    });
  });

  // Filter buttons click event
  $('.filter-button-group').on('click', 'button', function () {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
    
    // Add active class to clicked button
    $('.filter-button-group button').removeClass('active');
    $(this).addClass('active');
  });

  // Set initial active state
  $('.filter-button-group button[data-filter="*"]').addClass('active');

});


