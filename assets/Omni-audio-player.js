const playBtn = document.getElementById('play');
const audioUrl = "{{ card_product.metafields.product.audio.value.url }}";

let audio = new Audio(audioUrl);

playBtn.addEventListener('click', function(){
  audio.play();
});