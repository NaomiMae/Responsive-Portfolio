$( document ).ready(function() {
	$(".dropdown-trigger").dropdown({ hover: false });

	

});
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.materialboxed');
    var instances = M.Materialbox.init(elems, options);
  });
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
	var instances = M.Modal.init(elems, options);
});

M.AutoInit();