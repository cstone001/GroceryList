$('#add').click( function() {
   var list = $('items');
   var input = $('#Input').val();
  if($("#Input").val() == '') {
    $('#alert').html("<strong>Warning!</strong> You didn't add an item");
    $('#alert').fadeIn().delay(1500).fadeOut();
    return false;
   }
   $("#items").append('<li class="show">' + input + '</li>');

   $('#form')[0].reset();
   var items = $('#items').html();
   localStorage.setItem('items', items);
   return false;
});

if(localStorage.getItem('items')) {
$('#items').html(localStorage.getItem('items'));
}

$('#clear').click( function() {
window.localStorage.clear();
location.reload();
return false;
});

var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.remove('need');
  }
});      
