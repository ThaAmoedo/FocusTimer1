import { 
    buttonPlay,
    buttonPause,
    buttonSet,
    buttonSoundOn,
    buttonSoundOff,
    buttonStop,
 } from "./elements.js";

export default function({
    controls,
    timer,
    sound,
}){


buttonPlay.addEventListener('click', function(){

    controls.Play()
    timer.countdonw()//declarativa
    sound.pressButton()

})


buttonPause.addEventListener('click', function(){

    timer.hold()
    controls.Pause()
    sound.pressButton()
})


buttonStop.addEventListener('click', function() {
   controls.reset()
    timer.reset()
    sound.pressButton()
})


buttonSoundOn.addEventListener('click', function(){
    buttonSoundOn.classList.add('hide')
    buttonSoundOff.classList.remove('hide')

    sound.bkAudio.pause()
})


buttonSoundOff.addEventListener('click', function(){
    buttonSoundOff.classList.add('hide')
    buttonSoundOn.classList.remove('hide')

    sound.bkAudio.play()
})


buttonSet.addEventListener('click', function(){
    
   let newMinutes = controls.getMinutes()

   if(!newMinutes){
    timer.reset()
    return
   }

   timer.updateDisplay(newMinutes, 0)
   timer.updateMinutes(newMinutes)
   
   //minutes = newMinutes
})


}