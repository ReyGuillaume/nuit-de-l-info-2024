


onload = _ => {



  let canvas = document.getElementById('jeu');
  var ctx = canvas.getContext('2d');
  console.log(canvas.width + ', ' + canvas.height)

  canvas.width = canvas.clientWidth;
  canvas.height = canvas.clientHeight;

  
  
  var loop = () => {
    ctx.fillStyle = 'lightblue';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    const image = document.getElementById("image");
    ctx.drawImage(image, 150, 500, 1575, 1000, canvas.width/2, canvas.height/2, 120, 80);
    image.addEventListener("load", (e) => {
    });

    requestAnimationFrame(loop);
  }
  requestAnimationFrame(loop);



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

