// Check Off Specific Todos By Clicking
$("ul").on("click", "li", function() {
  $(this).toggleClass("completed");  // this is li
});

// Delete Todos By Clicking on X
$("ul").on("click", "span", function(event) {
  $(this).parent().addClass("completed");
  $(this).parent().fadeOut(function() {
    $(this).remove();  // this has become the span parent now (the li)
  });
  event.stopPropagation();
});

// Inserting new Todos when we hit Enter Key
$("input[type='text']").on("keypress", function(event) {
  if (event.which === 13 && $(this).val() != "") {
    const newTodo = $(this).val();
    $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + newTodo + "</li>");
    $(this).val("");
  }
});

// Toggling Input when clicking pencil icon
$("#toggle-form").on("click", function() {
  $("input[type='text']").fadeToggle();
});
