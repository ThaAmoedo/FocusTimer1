

export default function(){

    const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
    const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")
    const bkAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/bg-audio.mp3?raw=true")
    
    bkAudio.loop = true

   function pressButton(){
        buttonPressAudio.play()
    }
    function timeEnd(){
        kitchenTimer.play()
    }

    //function bkAudioStart(){
    //  bkAudio.play()
    //}

    return{
        pressButton,
        timeEnd,
        bkAudio,
    }
}