document.addEventListener('DOMContentLoaded', (event) => {
  const slider = document.querySelector('.slider');
  const items = document.querySelectorAll('.item');
  const audio = document.getElementById('myAudio');


  function activate(e) {
    const items = document.querySelectorAll('.item');
    e.target.matches('.next') && slider.append(items[0]);
    e.target.matches('.prev') && slider.append(items[items.ngth -1]);
  }
  document.addEventListener('click',activate,false);
  

  document.body.addEventListener('click', () => {
      if (audio.paused) {
          audio.play().catch(error => {
              console.log('Error playing audio:', error);
          });
      }
  }, { once: true });
});
