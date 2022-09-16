$.getJSON('https://stoplight.io/mocks/test-csm/api-example/90119274/users/142', function( data ) {
  console.log(data);
  $('#titolo').html('Ciao '+data.firstName);
});