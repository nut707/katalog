//filter open submenues
$('.filter__toggle').click(function(event) {
  $(this).next().slideToggle()
  $(this).find('.filter__arrow').toggleClass('filter__arrow-open');
  $(this).toggleClass('filter__toggle_closed');
});

//laptop price slider
$('.slider__price').slider({
  max:20000,
  min:6000,
  step:100,
  range:true,
  values: [ 9300, 15000 ],
  slide: function(event,ui){
    $('.price-min').val(ui.values[0]);
    $('.price-max').val(ui.values[1]);
  }
});
$('.price-min').val($( ".slider__price" ).slider( "values", 0 )),
$('.price-max').val($( ".slider__price" ).slider( "values", 1 )),
$(".price-min,.price-max").change(function() {
  $(".slider__price").slider("option", "values", [ $('.price-min').val(), $('.price-max').val() ] );
});

//laptop display slider
$('.slider__display-size').slider({
  max:26,
  min:11,
  range:true,
  values: [ 14, 20 ],
  slide: function(event,ui){
    $('.display-size-min').val(ui.values[0]);
    $('.display-size-max').val(ui.values[1]);
  }
});
$('.display-size-min').val($( ".slider__display-size" ).slider( "values", 0 )),
$('.display-size-max').val($( ".slider__display-size" ).slider( "values", 1 )),
$(".display-size-min,.display-size-max").change(function() {
  $(".slider__display-size").slider("option", "values", [ $('.display-size-min').val(), $('.display-size-max').val() ] );
});

//laptop ram slider
$('.slider__ram').slider({
  max:4096,
  min:512,
  range:true,
  values: [ 1024, 2048 ],
  slide: function(event,ui){
    $('.ram-min').val(ui.values[0]);
    $('.ram-max').val(ui.values[1]);
  }
});
$('.ram-min').val($( ".slider__ram" ).slider( "values", 0 )),
$('.ram-max').val($( ".slider__ram" ).slider( "values", 1 )),
$(".ram-min,.ram-max").change(function() {
  $(".slider__ram").slider("option", "values", [ $('.ram-min').val(), $('.ram-max').val() ] );
});

//smart price slider
$('.slider__price-smart').slider({
  max:129999,
  min:1200,
  range:true,
  values: [ 1200, 78262 ],
  slide: function(event,ui){
    $('.smart-price-min').val(ui.values[0]);
    $('.smart-price-max').val(ui.values[1]);
  }
});

$('.smart-price-min').val($( ".slider__price-smart" ).slider( "values", 0 )),
$('.smart-price-max').val($( ".slider__price-smart" ).slider( "values", 1 )),
$(".smart-price-min,.smart-price-max").change(function() {
  $(".slider__price-smart").slider("option", "values", [ $('.smart-price-min').val(), $('.smart-price-max').val() ] );
});

var max = $( ".slider__price-smart" ).slider( "option", "max" );
var min = $( ".slider__price-smart" ).slider( "option", "min" );

$('.division__0').text(min)
$('.division__25').text(Math.round((max-min)/4))
$('.division__50').text(Math.round((max-min)/2))
$('.division__75').text(Math.round((3*(max-min))/4))
$('.division__100').text(max)