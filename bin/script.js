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


function searchDisplay(idsearch){
  document.getElementById("searchbar").style.display="block";
  document.getElementById(idsearch).style.display="none";
  document.getElementById("close-btn").style.display="block";
}

function searchClose(idsearch){
  document.getElementById("searchbar").style.display="none";
  document.getElementById(idsearch).style.display="none";
  document.getElementById("search-btn").style.display="block";
}

function increaseQuantity() {
  let quantityInput = document.querySelector('input[name="quantity"]');
  let quantity = parseInt(quantityInput.value);
  quantityInput.value = quantity + 1;
}

function decreaseQuantity() {
  let quantityInput = document.querySelector('input[name="quantity"]');
  let quantity = parseInt(quantityInput.value);
  if (quantity > 1) {
    quantityInput.value = quantity - 1;
  }
}

function openCity(cityName) {
  var i;
  var x = document.getElementsByClassName("city");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(cityName).style.display = "block";

}
  function changeImage(linkimg)
  {
      
  var img = document.getElementById("img1");
  img.src=""+linkimg+"";
  return false;
  }

  function drops() {
    var x = document.getElementById("Demo");
    if (x.className.indexOf("w3-show") == -1) { 
      x.className += " w3-show";
    } else {
      x.className = x.className.replace(" w3-show", "");
    }
  }

  function openRightMenu() {
    document.getElementById("rightMenu").style.display = "block";
  }
  
  function closeRightMenu() {
    document.getElementById("rightMenu").style.display = "none";
  }