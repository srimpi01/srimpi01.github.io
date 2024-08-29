function ExecuteScript(strId)
{
  switch (strId)
  {
      case "60pgGQ2QUvA":
        Script1();
        break;
      case "6O2tusUJBmi":
        Script2();
        break;
      case "5aAzF83NsJp":
        Script3();
        break;
      case "5aMAWGEE8eK":
        Script4();
        break;
      case "6OtG2JvHqJU":
        Script5();
        break;
      case "5qhlpIap8Kf":
        Script6();
        break;
      case "5zVdOygsTcP":
        Script7();
        break;
      case "6njbLDtt823":
        Script8();
        break;
  }
}

function Script1()
{
  //load the scripts dynamically into the head of the document
function add_line() {
 var line = document.createElement("audio");
 var head=document.getElementsByTagName('body')[0];
 line.type = "audio/mp3";
 line.src="";
 line.id="bgSong" ;
 line.autoplay = true;
 line.loop = true;
 head.appendChild(line);
}
//but we only want to add these once!
if(document.getElementById('bgSong')==null){
 add_line();
var audio = document.getElementById('bgSong');
audio.volume = 0.3;
}
var player = GetPlayer();
this.Location= player.GetVar("location");

var audio = document.getElementById('bgSong');
audio.src=Location+"audio.mp3";
audio.load();
audio.play();
}

function Script2()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.1;
}

function Script3()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.2;
}

function Script4()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.3;
}

function Script5()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.4;
}

function Script6()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.5;
}

function Script7()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.0;
}

function Script8()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.3;
}

