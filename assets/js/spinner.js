// (A) SHOW & HIDE SPINNER
function showLoadSpinner () {
  document.getElementById("SpinnerLoad").classList.add("show");
}
function hideLoadSpinner () {
  document.getElementById("SpinnerLoad").classList.remove("show");
}

// (B) AJAX DEMO - USE HTTP:// NOT FILE://
function demoAJAX () {
  showLoadSpinner(); // BLOCK PAGE WHILE LOADING
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "page.html");
  xhr.onload = function(){
    document.getElementById("SpinnerLoad").innerHTML = this.response;
    hideLoadSpinner(); // UNBLOCK PAGE
  };
  xhr.send();
}

// (C) AJAX DEMO - WITH FETCH
function demoFETCH () {
  showLoadSpinner(); // BLOCK PAGE WHILE LOADING
  fetch("page.html")
  .then(res => res.text)
  .then((txt) => { document.getElementById("SpinnerLoad").innerHTML = txt; })
  .catch((err) => { console.error(err); })
  .finally(() => { hideLoadSpinner(); }); // UNBLOCK PAGE
}
