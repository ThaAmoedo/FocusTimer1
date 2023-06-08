
import sounds from "./sounds.js"
import Sounds from "./sounds.js"

//const sound = Sounds();


export default function Timer({
    minutesDisplay,
    secondsDisplay,
    //timerTimeOut,
    resetControls,
   // minutes,
}){

    
    let timerTimeOut
    let minutes = Number(minutesDisplay.textContent)

 function updateDisplay(newMinutes, seconds){

   // se o newMinutes for iguala undefined(===) se sim(?) coloca minutes, se não(:) coloca newMinutes
    newMinutes = newMinutes === undefined ? minutes : newMinutes
    seconds = seconds === undefined ? 0 : seconds


    minutesDisplay.textContent = String(newMinutes).padStart(2, 0)  // .textContent pega o conteudo
    secondsDisplay.textContent = String(seconds).padStart(2, 0)
    
}


 function reset(){
    updateDisplay (minutes, 0)
    clearTimeout(timerTimeOut)
}


 function countdonw(){
    timerTimeOut = setTimeout(function(){
        let seconds = Number(secondsDisplay.textContent);
        let minutes = Number(minutesDisplay.textContent);
        let isFinished = minutes <= 0 && seconds <= 0;
       
        //secondsDisplay.textContent = "00"
        updateDisplay(minutes, 0)

        if(isFinished){ //passa por essas condições e dps reseta os controles
           
            resetControls()
            updateDisplay()
            Sounds().timeEnd()
            return
        }
        
        if(seconds <= 0){
            seconds = 60
            --minutes
            //minutesDisplay.textContent = String(minutes - 1).padStart(2, 0)
        }

        //secondsDisplay.textContent = StringString(seconds - 1).padStart(2, "0")
        updateDisplay(minutes, String(seconds - 1))

        countdonw()
    }, 1000) //1000 = 1seg ....depois de 1seg quero q ele diminua 1
}

function updateMinutes(newMinutes){
    minutes = newMinutes
}

function hold(){

    clearTimeout(timerTimeOut) //vai parar tudo


}

return{
    countdonw,
    reset,
    updateDisplay,
    updateMinutes,
    hold,
}
}