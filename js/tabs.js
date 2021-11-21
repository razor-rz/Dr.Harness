function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("products");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("catalog__btn");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" catalog__btn_active", "");
  }
  document.getElementById(cityName).style.display = "flex";
  evt.currentTarget.className += " catalog__btn_active";
}

document.getElementById("defaultOpen").click();