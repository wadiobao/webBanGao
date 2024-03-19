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

function filter(elementId) {
  // Lắng nghe sự kiện click trên tất cả các ô đánh dấu
  $(document).on("click", 'input[type="checkbox"]', function () {
    // Lấy ra tất cả các ô đánh dấu trừ ô đang được click và gỡ chọn chúng
    $('input[type="checkbox"]').not(this).prop("checked", false);
    
    // Kiểm tra xem ô đang được click có được chọn hay không
    if ($(this).prop("checked")) {
      // Ẩn tất cả các phần tử div trong #sp trừ phần tử có id là "elementId" và tất cả các div con của nó
      $("#sp  div").not("#" + elementId + ", #" + elementId + "  *").hide();
      // Hiển thị div có id là "elementId" và tất cả các div con bên trong nó
      $("#" + elementId).show().find('div').show();
    } else {
      // Nếu không có ô đánh dấu nào được chọn, hiển thị tất cả các phần tử div trong #sp
      $("#sp  div").show();
    }
  });
}




