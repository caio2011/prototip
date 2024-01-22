x = 0;
y = 0;
var drawApple = "";
var SpeechRecognition = window.webkitSpeechRecognition;  
var recognition = new SpeechRecognition();
var screen_Width = 0;
var screen_Height = 0;
var Apple = "";
var speakData = "";
var toNumber = "";


function preload()
{
  loadImage("apple.png");
}

function start()
{
  document.getElementById("status").innerHTML = "O sistema está ouvindo. Por favor, fale.";  
  recognition.start();
} 
 
recognition.onresult = function(event)
{
  console.log(event);
  content = event.results[0][0].transcript;
  document.getElementById("status").innerHTML = "A fala foi reconhecida: " + content;
  to_number = Number(content);
  if(Number.isInteger(to_number))
  {
    document.getElementById("status").innerHTML = toNumber + " A maçã começou a ser desenhada";
    drawApple = "set";
  }else
  {
    document.getElementById("status").innerHTML = toNumber + " O número não foi reconhecido";   
  }
}

function setup()
{
  screen_Width = window.innerWidth;
  screen_Height = window.innerHeight;
  canvas = createCanvas(screen_Width,screen_Height-150);
  canvas.position(0, 150);
}

function draw()
{
  if(drawApple == "set")
  {
    document.getElementById("status").innerHTML = toNumber + " maçãs desenhadas";
    drawApple = "";
    for(var i = 1; i <=to_number; i++)
    {
      x = Math.floor(Math.random() * 700);
      y = Math.floor(Math.random() * 400);
      image(apple, x, y, 50, 50);
      document.getElementbyId("status").innerHTML = to_number + "maças desenhadas"
    }
  }
}

function speak()
{
  var synth = window.speechSynthesis;
  var utterThis = new SpeechSynthesisUtterance(speakData);
  synth.speak(utterThis);
  speakData = "toNumber + Maçãs desenhadas";
}