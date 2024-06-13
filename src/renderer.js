import './index.css';

window.onload = function () {
    function recognize() {
      let speechRecognition = webkitSpeechRecognition;
      let recognition = null;
      let e = document.getElementById("result_text");
      let currentHTML = ''
  
      function init(){
        console.log("starting")
        recognition = new speechRecognition();
        recognition.lang = 'ja-JP';
        recognition.continuous = false;
        recognition.interimResults = true;
  
        recognition.onresult = (event) => {
          console.log("event")
          let text = event.results[0][0].transcript;
          e.innerHTML = currentHTML + text;
  
          if (event.results[0].isFinal){
            restart();
          }
        }
  
        recognition.onspeechstart = (event) => {
          currentHTML = ''
        }
  
        recognition.onerror = (event) => {
          restart();
        }
  
        recognition.onsoundend = (event) => {
          restart();
        }
      }
  
      function restart(){
        recognition.stop();
        init();
        recognition.start();
      }
  
      init();
      recognition.start();
    }
    recognize();
  }