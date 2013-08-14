$(document).ready(function() {
  // This is called after the document has loaded in its entirety
  // This guarantees that any elements we bind to will exist on the page
  // when we try to bind to them

  // See: http://docs.jquery.com/Tutorials:Introducing_$(document).ready()

  $('form').submit( function(e) {

    e.preventDefault();
    var data = $(this).serialize();

    var request = $.ajax({
      type: 'post',
      url:  '/grandma',
      data: data,
    });

    request.done( function(data) {

      console.log('Grandma said: ' + data);

      $('#grandma-says').text(data);
      $('#grandma-response').show();

    });
    
    request.fail( function() {
      alert("Grandma hit you with a shoe");
    });

    request.always(function(arg1, arg2, arg3){
      console.log("This will always run: " + arg1 + "," + arg2 + "," + arg3);
    });

  });
});

