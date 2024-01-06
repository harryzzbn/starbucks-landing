function imgSlider(anything){
  document.querySelector('.starbucks').src = anything;
}
function changeCircleColor(color){
  const circle = document.querySelector('.circle');
  circle.style.background = color;
}

function toggleMenu(){
  const menuToggle = document.querySelector('.toggle');
  const navigation = document.querySelector('.navigation');
  menuToggle.classList.toggle('active');
  navigation.classList.toggle('active');
}