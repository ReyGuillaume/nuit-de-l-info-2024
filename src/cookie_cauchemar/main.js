


onload = _ => {



  let canvas = document.getElementById('jeu');
  var ctx = canvas.getContext('2d');
  ctx.globalCompositeOperation = 'destination-over'
  ctx.fillStyle = 'lightblue';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = 'red';
  ctx.fillRect(200, 200, 150, 100);
  ctx.fill();


  function Counter(element, compte) {
    let counter = 0;
  
    const setCounter = (count) => {
      counter = count;
      compte.innerHTML = counter; 
    };
  
    element.addEventListener('click', () => setCounter(counter + 1));
    setCounter(0);
  }
  
  const poisson = document.getElementById('jeu');
  const cpt = document.getElementById('cpt');
  
  if (poisson && cpt) {
    Counter(poisson, cpt);
  }
}

