//Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon
function navBarShow() {
    var x = document.getElementById("navMenu");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

//Clipboard function
var clipboard = new ClipboardJS('.button');

//Copy success event (Not in use, for future use)
/*clipboard.on('success', function (e) {
  console.info('Action:', e.action);
  console.info('Text:', e.text);
  console.info('Trigger:', e.trigger);
  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copied !&nbsp;";
});

//Copy fail event (Not in use, for future use)
clipboard.on('error', function (e) {
  console.info('Action:', e.action);
  console.info('Text:', e.text);
  console.info('Trigger:', e.trigger);
  var tooltip = document.getElementById("myTooltip");
  alert("Copy failed, please check your browser setting, or do it manually");
});*/

//Top Button function:
// Get the button:
let mybutton = document.getElementById("topBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

//Expandable card function
document.addEventListener('DOMContentLoaded', function() {
	let cardToggles = document.getElementsByClassName('card-toggle');
	for (let i = 0; i < cardToggles.length; i++) {
		cardToggles[i].addEventListener('click', e => {
			e.currentTarget.parentElement.parentElement.childNodes[3].classList.toggle('is-hidden');
		});
	}
});

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//Load Darkmode localstorage when page loaded
function themeOnLoad() {
  var isDarkMode = localStorage.getItem("isDarkMode");
  if (isDarkMode == "true") {
    darkMode();
  }else{
    lightMode();
  }
}

//dark mode button trigger
function darkModeTrig() {
  var element = document.body;
  var isDarkMode = localStorage.getItem("isDarkMode");
  element.classList.toggle("dark-mode");
  if (isDarkMode === "true") {
    localStorage.setItem("isDarkMode", false);
    document.getElementById("checkbox").checked = false; //Switch the dark button by default if it is in dark mode
    document.getElementById("mobileSwitch").checked = false;
  }else{
    localStorage.setItem("isDarkMode", true);
    document.getElementById("checkbox").checked = true; //Switch the dark button by default if it is in dark mode
    document.getElementById("mobileSwitch").checked = true; //sync both switch into same status
  } 
}

//dark mode onload checking
function darkMode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
  document.getElementById("checkbox").checked = true; //Switch the dark button by default if it is in dark mode
  document.getElementById("mobileSwitch").checked = true;
}

//light mode
function lightMode() {
  var element = document.body;
  element.classList.toggle("light-mode");
}

