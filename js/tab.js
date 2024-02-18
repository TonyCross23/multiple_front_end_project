$('#tabs-nav li:first-child').addClass('active');
$('.hap-photo').hide();
$('.hap-photo:first').show();

// click function
$('#tabs-nav li').click(function () {
  $('#tabs-nav li').removeClass('active');
  $(this).addClass('active');
  $('.hap-photo').hide();

  var activeTab = $(this).find('a').attr('href');
  $(activeTab).fadeIn();
  return false;
});

$('#tabs-news li:first-child').addClass('active');
$('.tab-content').hide();
$('.tab-content:first').show();

// click function
$('#tabs-news li').click(function () {
  $('#tabs-news li').removeClass('active');
  $(this).addClass('active');
  $('.tab-content').hide();

  var activeTab = $(this).find('a').attr('href');
  $(activeTab).fadeIn();
  return false;
});
