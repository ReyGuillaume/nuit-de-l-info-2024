


onload = _ => {



  let canvas = document.getElementById('jeu');
  var ctx = canvas.getContext('2d');
  console.log(canvas.width + ', ' + canvas.height)

  canvas.width = canvas.clientWidth;
  canvas.height = canvas.clientHeight;
  console.log(canvas.width)
  console.log(canvas.height)

  

  let taillePoissonClown = {
    x: 120,
    y: 80
  }

  let taillePoissonBlob = {
    x: 200,
    y: 100
  }

  let imagePoissonClown = {
    x: 150,
    y: 500,
    width: 1575,
    height: 1000
  }

  let imagePoissonBlob = {
    x: 0,
    y: 0,
    width: 1280,
    height: 624
  }
  
  
  let deltaTime = 0;
  let currentTime = performance.now();

  let positionPoissonClownX;
  let positionPoissonClownY;

  let positionPoissonBlobX;
  let positionPoissonBlobY;

  let flipClown = true;
  var loop = () => {

    deltaTime = -currentTime + (currentTime = performance.now());

    ctx.fillStyle = 'lightblue';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    
    const clown = document.getElementById("clown");
    const clownFlip = document.getElementById("clown-flip");
    const blob = document.getElementById("blob");

    positionPoissonClownX = canvas.width/2 + (canvas.width/2 + taillePoissonClown.x)*Math.sin(currentTime * 0.001) - taillePoissonClown.x/2;
    if (positionPoissonClownX <= -taillePoissonClown.x)
      {
        flipClown = true;
      }
    if (positionPoissonClownX >= canvas.width) {
        flipClown = false;
    }
    positionPoissonClownY = canvas.height/2 + 100*Math.sin(currentTime * 0.005);

    if (positionPoissonBlobY > canvas.height)
      positionPoissonBlobX = Math.random() * (canvas.width - taillePoissonBlob.x);
    positionPoissonBlobY = canvas.height + 100*(Math.sin(currentTime * 0.005) - Math.abs(Math.sin(currentTime*0.005)) + 1);
    
  console.log(flipClown)
    ctx.drawImage(flipClown ? clownFlip : clown, imagePoissonClown.x, imagePoissonClown.y, imagePoissonClown.width, imagePoissonClown.height, positionPoissonClownX, positionPoissonClownY, taillePoissonClown.x, taillePoissonClown.y);

    ctx.drawImage(blob, imagePoissonBlob.x, imagePoissonBlob.y, imagePoissonBlob.width, imagePoissonBlob.height, positionPoissonBlobX, positionPoissonBlobY, taillePoissonBlob.x, taillePoissonBlob.y);


    requestAnimationFrame(loop);
  }
  requestAnimationFrame(loop);

  let counter = 0;
  canvas.addEventListener('click', (event) => {
    console.log(getMousePos(canvas, event))
    let mousePos = getMousePos(canvas, event);
    if (
      mousePos.x >= positionPoissonClownX && 
      mousePos.y >= positionPoissonClownY && 
      mousePos.x <= positionPoissonClownX + taillePoissonClown.x && 
      mousePos.y <= positionPoissonClownY + taillePoissonClown.y
    )
      setCounter(1)
    else if (
      mousePos.x >= positionPoissonBlobX && 
      mousePos.y >= positionPoissonBlobY && 
      mousePos.x <= positionPoissonBlobX + taillePoissonBlob.x && 
      mousePos.y <= positionPoissonBlobY + taillePoissonBlob.y
    )
      setCounter(5)
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


  const cpt = document.getElementById('cpt');

  const setCounter = (number) => {
    counter += number;
    if (counter < 0)
      counter = 0;
    cpt.innerHTML = counter; 
  };
  
}

