// programação imperativa, vc passa passo á passo
// EcmaScript - 2015 ... ES6 Modules
import  Controls  from "./controls.js"  
import  Timer  from "./timer.js"
import Sounds from "./sounds.js"
import Events  from "./events.js"
import {  buttonPlay,
          buttonPause,
          buttonStop,
          buttonSet,
          minutesDisplay,
          secondsDisplay, } from "./elements.js"

          
          
          
 const controls = Controls({
 buttonPause,
 buttonPlay,
 buttonSet,
 buttonStop,
 })
     
 
 const timer = Timer({
 minutesDisplay,
 secondsDisplay,
 resetControls: controls.reset,
 //timerTimeOut,
  // minutes,
 })
            

 const sound = Sounds()
           
 
 Events ({controls, timer, sound})
            
            



            /*
            const configTimer = {
                minutesDisplay,
                secondsDisplay,
                timerTimeOut,
                resetControls,
            }
            const timer = Timer (configTimer)
            */
            
            
            // dentro do {} eu vou colocar os elementos que eu quero retirar de la
            /*const { buttonPlay,
                buttonPause,
                buttonStop,
                buttonSet,
                buttonSoundOn,
                buttonSoundOff,
                minutesDisplay,
                secondsDisplay,} = elements*/






/*
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

    sound.bkAudio.play()
})


buttonSoundOff.addEventListener('click', function(){
    buttonSoundOff.classList.add('hide')
    buttonSoundOn.classList.remove('hide')

    sound.bkAudio.pause()
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

*/
