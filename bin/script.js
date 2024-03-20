var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs((slideIndex += n));
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex - 1].style.display = "block";
}

var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {
    myIndex = 1;
  }
  x[myIndex - 1].style.display = "block";
  setTimeout(carousel, 5000);
}

function sbt() {
  document.getElementById("myForm").submit();
}

function dropDown(list) {
  var x = document.getElementById(list);
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else {
    x.className = x.className.replace(" w3-show", "");
  }a
}


function change(inputID) {
  let results = Array.from(document.querySelectorAll('#sp > div'));
  $('input[type="checkbox"]').not("#"+inputID).prop("checked", false);
  // Hide all results
  results.forEach(function(result) {
    result.style.display = 'none';
  });
  // Filter results to only those that meet ALL requirements:
  Array.from(document.querySelectorAll('.filter input[rel]:checked'), function(input) {
    const attrib = input.getAttribute('rel');
    results = results.filter(function(result) {
      return result.classList.contains(attrib);
    });
  });
  // Show those filtered results:
  results.forEach(function(result) {
    result.style.display = 'block';
  });
}
// Initially run the change function to apply any initial filters
change();
