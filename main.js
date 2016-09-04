$.getJSON( "uppl.json", function( data ) {
  var temp = $("#itemTemplate").html();
  var renderer = Handlebars.compile(temp);
  var result = renderer(data);
  $("#container").html(result);
});
