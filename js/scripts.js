$(document).ready(function() {
  $("button#cat").click(function() {
    $("ul#dog-list").prepend("<li>Meow meow meow!</li>");
  });
  $("button#dog").click(function() {
    $("ul#cat-list").prepend("<li>Woof woof woof!</li>");
  });
});