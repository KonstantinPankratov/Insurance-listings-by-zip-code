(function()
{
	var form = document.getElementById('main-form');
		form.addEventListener("submit", function() {
			handle(event);
		}, false);

	function handle(e) {
		e.preventDefault();
		var zip       = document.getElementsByName('zip')[0].value;
		var ci;
		var homeowner;
		var age       = document.getElementsByName('age')[0].value;

		var ci_radio        = document.getElementsByName('ci');
		var homeowner_radio = document.getElementsByName('homeowner');

		for (var i = 0; i < ci_radio.length; i++) {
			if (ci_radio[i].checked) {
				ci = ci_radio[i].value;
				break;
			}
		}

		for (var i = 0; i < homeowner_radio.length; i++) {
			if (homeowner_radio[i].checked) {
				homeowner = homeowner_radio[i].value;
				break;
			}
		}

		run(zip, ci, homeowner, age);
	}
})();