var s_duration = 600;
var b_duration1 = 600;
var b_duration2 = 300;
var erstspender_duration = 900;

var audio = new Audio('alert.mp3')

if (document.getElementById("menu_timer")) document.getElementById("menu_timer").addEventListener("click", timer);
if (document.getElementById("menu_stats")) document.getElementById("menu_stats").addEventListener("click", stats);
if (document.getElementById("menu_help")) document.getElementById("menu_help").addEventListener("click", help);
if (document.getElementById("home")) document.getElementById("home").addEventListener("click", home);

if (document.getElementById("reset_stats")) document.getElementById("reset_stats").addEventListener("click", stats_reset);

if (window.location.pathname.endsWith("stats.html")) {
	setInterval(function () {
		document.getElementById("stuhl_stats").innerHTML = localStorage.stuhl_stats;
		document.getElementById("bett_stats").innerHTML = localStorage.bett_stats;
		document.getElementById("erstspender_stats").innerHTML = localStorage.erstspender_stats;
		document.getElementById("total_stats").innerHTML = Number(localStorage.bett_stats) + Number(localStorage.stuhl_stats);
	}, 10
	)
}

function stats_reset() {
	if (confirm("Sind Sie sicher, dass Sie die Statistik löschen möchten?") == true) {
		localStorage.stuhl_stats = 0;
		localStorage.bett_stats = 0;
		localStorage.erstspender_stats = 0;
	}
}

if (!localStorage.stuhl_stats) {
	localStorage.stuhl_stats = 0;
}

if (!localStorage.bett_stats) {
	localStorage.bett_stats = 0;
}

if (!localStorage.erstspender_stats) {
	localStorage.erstspender_stats = 0;
}

function timer() {
	window.location.href = "timer.html";
}

function stats() {
	window.location.href = "stats.html";
}

function help() {
	window.location.href = "help.html";
}

function home() {
	window.location.href = "index.html";
}


if (window.location.pathname.endsWith("timer.html")) {

	window.onbeforeunload = () => "";

	document.getElementById("s0").addEventListener("click", function () {
		stuhl(0)
	});
	document.getElementById("s1").addEventListener("click", function () {
		stuhl(1)
	});
	document.getElementById("s2").addEventListener("click", function () {
		stuhl(2)
	});
	document.getElementById("s3").addEventListener("click", function () {
		stuhl(3)
	});
	document.getElementById("s4").addEventListener("click", function () {
		stuhl(4)
	});
	document.getElementById("s5").addEventListener("click", function () {
		stuhl(5)
	});
	document.getElementById("s6").addEventListener("click", function () {
		stuhl(6)
	});
	document.getElementById("s7").addEventListener("click", function () {
		stuhl(7)
	});
	document.getElementById("s8").addEventListener("click", function () {
		stuhl(8)
	});
	document.getElementById("s9").addEventListener("click", function () {
		stuhl(9)
	});

	document.getElementById("b0").addEventListener("click", function () {
		bett(0)
	});
	document.getElementById("b1").addEventListener("click", function () {
		bett(1)
	});
	document.getElementById("b2").addEventListener("click", function () {
		bett(2)
	});
	document.getElementById("b3").addEventListener("click", function () {
		bett(3)
	});

	document.getElementById("skip0").addEventListener("click", function () {
		skip(0)
	});
	document.getElementById("skip1").addEventListener("click", function () {
		skip(1)
	});
	document.getElementById("skip2").addEventListener("click", function () {
		skip(2)
	});
	document.getElementById("skip3").addEventListener("click", function () {
		skip(3)
	});

	document.getElementById("bs0").addEventListener("click", function () {
		bettStuhl(0)
	});
	document.getElementById("bs1").addEventListener("click", function () {
		bettStuhl(1)
	});
	document.getElementById("bs2").addEventListener("click", function () {
		bettStuhl(2)
	});
	document.getElementById("bs3").addEventListener("click", function () {
		bettStuhl(3)
	});

	document.getElementById("erstspender").addEventListener("click", erstspender);


	document.addEventListener("contextmenu", (e) => e.preventDefault());

	document.getElementById("s0").addEventListener("contextmenu", function () {
		s_options(0)
	});
	document.getElementById("s1").addEventListener("contextmenu", function () {
		s_options(1)
	});
	document.getElementById("s2").addEventListener("contextmenu", function () {
		s_options(2)
	});
	document.getElementById("s3").addEventListener("contextmenu", function () {
		s_options(3)
	});
	document.getElementById("s4").addEventListener("contextmenu", function () {
		s_options(4)
	});
	document.getElementById("s5").addEventListener("contextmenu", function () {
		s_options(5)
	});
	document.getElementById("s6").addEventListener("contextmenu", function () {
		s_options(6)
	});
	document.getElementById("s7").addEventListener("contextmenu", function () {
		s_options(7)
	});
	document.getElementById("s8").addEventListener("contextmenu", function () {
		s_options(8)
	});
	document.getElementById("s9").addEventListener("contextmenu", function () {
		s_options(9)
	});

	document.getElementById("b0").addEventListener("contextmenu", function () {
		b_options(0)
	});
	document.getElementById("b1").addEventListener("contextmenu", function () {
		b_options(1)
	});
	document.getElementById("b2").addEventListener("contextmenu", function () {
		b_options(2)
	});
	document.getElementById("b3").addEventListener("contextmenu", function () {
		b_options(3)
	});

	document.getElementById("bs0").addEventListener("contextmenu", function () {
		bs_options(0)
	});
	document.getElementById("bs1").addEventListener("contextmenu", function () {
		bs_options(1)
	});
	document.getElementById("bs2").addEventListener("contextmenu", function () {
		bs_options(2)
	});
	document.getElementById("bs3").addEventListener("contextmenu", function () {
		bs_options(3)
	});

	clock();
	setInterval(clock, 1000)
}

function clock() {
	var now = new Date();
	var h = now.getHours();
	var m = now.getMinutes();
	var s = now.getSeconds();
	if (s < 10) {
		s = "0" + s;
	}
	if (m < 10) {
		m = "0" + m;
	}
	document.getElementById("clock").innerHTML = h + ":" + m + ":" + s;
}


var state_s = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
var countdown_interval_s = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

function stuhl(nr) {

	let button = document.getElementById("s" + nr);

	if (state_s[nr] == -2) {
		button.classList.add("red");
		button.innerHTML = "XX:XX";
		state_s[nr] = -1;
		return;
	}

	if (state_s[nr] == -1) {
		button.classList.remove("red");
		button.innerHTML = nr + 1;
		state_s[nr] = 0;
		return;
	}

	if (state_s[nr] == 0) {

		localStorage.stuhl_stats = Number(localStorage.stuhl_stats) + 1;

		state_s[nr] = 1;
		button.innerHTML = "10:00";
		button.classList.add("red");
		const startTime = Date.now();
		countdown_interval_s[nr] = setInterval(function () {
			let elapsedTime = Date.now() - startTime;
			let time_left = Math.round(s_duration - elapsedTime / 1000);

			button.innerHTML = timeFormatting(time_left);

			if (time_left <= 0) {
				clearInterval(countdown_interval_s[nr]);
				state_s[nr] = 2;
				button.classList.remove("red");
				button.classList.add("blink_s");

				const animations = button.getAnimations();
				animations.forEach(anim => {
					if (anim.animationName === "blink_s") {
						const syncTime = document.timeline.currentTime % 1000;
						anim.currentTime = syncTime;
					}
				});

				button.innerHTML = nr + 1;
				audio.play();
			}

		}, 1000);
	}

	if (state_s[nr] == 2) {
		button.classList.remove("red");

		button.classList.remove("blink_s");
		button.innerHTML = nr + 1;
		clearInterval(countdown_interval_s[nr]);
		state_s[nr] = 0;

	}
}


function s_options(nr) {

	if (state_s[nr] == 0) {

		state_s[nr] = -2;
		stuhl(nr);
		return;

	}
	if (state_s[nr] !== -1) {

		s_reset(nr);
	}
}


async function s_reset(nr) {

	let confirmed = await customConfirm("Achtung", "Sind Sie sicher, dass Sie den Timer zurücksetzen möchten?", "Abbrechen", "Zurücksetzen");
	if (confirmed == true) {
		state_s[nr] = 2;
		stuhl(nr);

		confirmed = await customConfirm("Achtung", "Möchten Sie den Spender aus der Statistik löschen?", "Nein", "Löschen");
		if (confirmed == true) {
			localStorage.stuhl_stats = Number(localStorage.stuhl_stats) - 1;
		}
	}
}


var state_b = [0, 0, 0, 0];
var state_bs = [0, 0, 0, 0];
var countdown_interval_b = [0, 0, 0, 0];
var countdown_interval_bs = [0, 0, 0, 0];

function bett(nr) {

	let button = document.getElementById("b" + nr);

	if (state_b[nr] == 0) {

		if (state_erstspender == 1) {
			var duration = erstspender_duration;
			localStorage.erstspender_stats = Number(localStorage.erstspender_stats) + 1;
			button.innerHTML = "15:00";

			erstspender();
		}

		else {
			var duration = b_duration1;
			button.innerHTML = "10:00";
		}

		localStorage.bett_stats = Number(localStorage.bett_stats) + 1;

		state_b[nr] = 1;
		button.classList.add("red");
		const startTime = Date.now();
		countdown_interval_b[nr] = setInterval(function () {
			let elapsedTime = Date.now() - startTime;
			let time_left = Math.round(duration - elapsedTime / 1000);

			button.innerHTML = timeFormatting(time_left);

			if (time_left <= 0) {
				clearInterval(countdown_interval_b[nr]);
				state_b[nr] = 2;
				button.classList.remove("red");
				button.classList.add("blink_b1");

				const animations = button.getAnimations();
				animations.forEach(anim => {
					if (anim.animationName === "blink_b1") {
						const syncTime = document.timeline.currentTime % 1000;
						anim.currentTime = syncTime;
					}
				});

				button.innerHTML = nr + 1;

				audio.play();
			}

		}, 1000);
	}

	if (state_b[nr] == 2) {

		if (state_bs[nr] == 0) {

			state_b[nr] = 0;

			button.classList.remove("red");
			button.classList.remove("blink_b1");
			button.innerHTML = nr + 1;
			clearInterval(countdown_interval_b[nr]);

			bettStuhl(nr);
		}
	}

	if (state_b[nr] == 3) {

		state_b[nr] = 0;

		button.classList.remove("red");
		button.classList.remove("blink_b1");
		button.innerHTML = nr + 1;
		clearInterval(countdown_interval_b[nr]);
	}
}

async function skip(nr) {

	if (state_b[nr] == 1 && state_bs[nr] == 0) {

		let confirmed = await customConfirm("Achtung", "Möchten Sie den Spender vom Bett auf den Stuhl verschieben?", "Nein", "Ja")
		if (confirmed == true) {
			state_b[nr] = 2;
			bett(nr);
		}
	}
}


function bettStuhl(nr) {

	let button = document.getElementById("bs" + nr);

	if (state_bs[nr] == 0) {


		state_bs[nr] = 1

		button.innerHTML = "05:00";
		button.classList.add("yellow");

		const startTime = Date.now();
		countdown_interval_bs[nr] = setInterval(function () {
			let elapsedTime = Date.now() - startTime;
			let time_left = Math.round(b_duration2 - elapsedTime / 1000);

			button.innerHTML = timeFormatting(time_left);

			if (time_left <= 0) {
				clearInterval(countdown_interval_bs[nr]);
				state_bs[nr] = 2;

				button.classList.remove("yellow");
				button.classList.add("blink_b2");

				const animations = button.getAnimations();
				animations.forEach(anim => {
					if (anim.animationName === "blink_b2") {
						const syncTime = document.timeline.currentTime % 1000;
						anim.currentTime = syncTime;
					}
				});

				button.innerHTML = nr + 1;

				audio.play();
			}

		}, 1000);
	}

	if (state_bs[nr] == 2) {

		state_bs[nr] = 0;

		button.classList.remove("yellow");
		button.classList.remove("blink_b2");
		button.innerHTML = nr + 1;
		clearInterval(countdown_interval_bs[nr]);
	}
}

var state_erstspender = 0;

function erstspender() {

	let button = document.getElementById("erstspender");

	if (state_erstspender == 0) {
		state_erstspender = 1;
		button.classList.add("blink_b1");
	}

	else {
		state_erstspender = 0;
		button.classList.remove("blink_b1");
	}
}

async function b_options(nr) {

	if (state_b[nr] !== 0 && state_b[nr] !== -1) {

		let confirmed = await customConfirm("Achtung", "Sind Sie sicher, dass Sie den Timer zurücksetzen möchten?", "Abbrechen", "Ja")
		if (confirmed == true) {
			state_b[nr] = 3;
			bett(nr);

			confirmed = await customConfirm("Achtung", "Möchten Sie den Spender aus der Statistik löschen?", "Nein", "Ja")
			if (confirmed == true) {
				localStorage.bett_stats = Number(localStorage.bett_stats) - 1;
			}
		}
	}
}

async function bs_options(nr) {

	if (state_bs[nr] !== 0 && state_bs[nr] !== -1) {

		let confirmed = await customConfirm("Achtung", "Sind Sie sicher, dass Sie den Timer zurücksetzen möchten?", "Abbrechen", "Ja");
		if (confirmed == true) {
			state_bs[nr] = 2;
			bettStuhl(nr);
			confirmed = await customConfirm("Achtung", "Möchten Sie den Spender aus der Statistik löschen?", "Nein", "Ja");
			if (confirmed == true) {
				localStorage.bett_stats = Number(localStorage.bett_stats) - 1;
			}
		}
	}
}

function timeFormatting(time_input) {

	const minutes = Math.floor(time_input / 60);
	const seconds = time_input % 60;

	const formattedMinutes = minutes.toString().padStart(2, '0');
	const formattedSeconds = seconds.toString().padStart(2, '0');

	return formattedMinutes + ":" + formattedSeconds;

}

function customConfirm(title, subtitle, cancel, confirm) {

	return new Promise((resolve) => {

		document.getElementById("popupBackground").classList.remove("hidden");
		document.getElementById("popupWindow").classList.remove("hidden");
		document.getElementById("popupTitle").innerHTML = '<img class="tobi" src="images/tobi.png" style="float:left; padding-left: 20px"><img class="tobi" src="images/tobi.png" style="float:right; padding-right:20px"></img>' + title;
		document.getElementById("popupSubtitle").innerText = subtitle;
		document.getElementById("cancelButton").innerText = cancel;
		document.getElementById("confirmButton").innerText = confirm;

		document.getElementById("confirmButton").onclick = function () {
			document.getElementById("popupBackground").classList.add("hidden");
			document.getElementById("popupWindow").classList.add("hidden");

			resolve(true);
		}

		document.getElementById("cancelButton").onclick = function () {
			document.getElementById("popupBackground").classList.add("hidden");
			document.getElementById("popupWindow").classList.add("hidden");

			resolve(false);
		}
	})
}