$(document).off('.data-api')
$(document).off('.alert.data-api')
$('.btn.danger').button('toggle').addClass('fat')
$('#myModal').modal()                      // initialized with defaults
$('#myModal').modal({ keyboard: false })   // initialized with no keyboard
$('#myModal').modal('show') 


$('#myButton').on('click', function () {
  var $btn = $(this).button('loading')
  // business logic...
  $btn.button('reset')
})

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })