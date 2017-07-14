//Listen when a button, with a class of "myButton", is clicked
//You can use any jQuery/JavaScript event that you'd like to trigger the call
$('#frontchime').click(function() {
//Send the AJAX call to the server
  $.ajax({
  //The URL to process the request
    'url' : '/api/v0.1/ring_chime/front',
  //The type of request, also known as the "method" in HTML forms
  //Can be 'GET' or 'POST'
    'type' : 'GET',
  //The response from the server
    'success' : function(data) {
    //You can use any jQuery/JavaScript here!!!
      if (data == "success") {
        alert('request sent!');
      }
    }
  });
});

$('#backchime').click(function() {
//Send the AJAX call to the server
  $.ajax({
  //The URL to process the request
    'url' : '/api/v0.1/ring_chime/back',
  //The type of request, also known as the "method" in HTML forms
  //Can be 'GET' or 'POST'
    'type' : 'GET',
  //The response from the server
    'success' : function(data) {
    //You can use any jQuery/JavaScript here!!!
      if (data == "success") {
        alert('request sent!');
      }
    }
  });
});

