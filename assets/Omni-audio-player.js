const playBtn = document.getElementById('play');

let audio = new Audio ();
audio.src = {{ card_product.metafields.product.audio.value.url }}

playBtn.addEventListener('click', function(){
  audio.play();
})