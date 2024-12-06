


onload = _ => {



  let canvas = document.getElementById('jeu');
  var ctx = canvas.getContext('2d');
  console.log(canvas.width + ', ' + canvas.height)

  canvas.width = canvas.clientWidth;
  canvas.height = canvas.clientHeight;

  
  
  let deltaTime = 0;
  let currentTime = performance.now();

  let positionPoissonX;
  let positionPoissonY;

  var loop = () => {

    deltaTime = -currentTime + (currentTime = performance.now());

    ctx.fillStyle = 'lightblue';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    
    const image = document.getElementById("image");

    positionPoissonX = canvas.width/2 + 500*Math.sin(currentTime * 0.001);
    positionPoissonY = canvas.height/2 + 100*Math.sin(currentTime * 0.005);
    


    ctx.drawImage(image, 150, 500, 1575, 1000, positionPoissonX, positionPoissonY, 120, 80);
    image.addEventListener("load", (e) => {
    });

    requestAnimationFrame(loop);
  }
  requestAnimationFrame(loop);

  let counter = 0;
  canvas.addEventListener('click', (event) => {
    console.log(getMousePos(canvas, event))
    let mousePos = getMousePos(canvas, event);
    if (
      mousePos.x >= positionPoissonX && 
      mousePos.y >= positionPoissonY && 
      mousePos.x <= positionPoissonX + 120 && 
      mousePos.y <= positionPoissonY + 80
    )
    setCounter(1)
    else 
    setCounter(-1)
  });

  function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
    };
  }


  const poisson = document.getElementById('jeu');
  const cpt = document.getElementById('cpt');

  const setCounter = (number) => {
    counter += number;
    if (counter < 0)
      counter = 0;
    cpt.innerHTML = counter; 
  };
  
}

