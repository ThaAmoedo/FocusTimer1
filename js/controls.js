
export default function Controls({
    buttonPause,
    buttonPlay,
    buttonSet,
    buttonStop,
}){


    function Play(){
        buttonPlay.classList.add('hide')
        buttonPause.classList.remove('hide')
    
        buttonSet.classList.add('hide')
        buttonStop.classList.remove('hide')
    
        //timer.countdonw()//declarativa
    }
    function Pause(){
        buttonPause.classList.add('hide')
        buttonPlay.classList.remove('hide')
        //clearTimeout(timerTimeOut) //vai parar tudo
    }

    function reset(){
       buttonPlay.classList.remove('hide')
       buttonPause.classList.add('hide')
       buttonSet.classList.remove('hide')
       buttonStop.classList.add('hide')
    }

    function getMinutes(){
        // minutes = prompt('Quantos minutos?') || 0    // pra tirar o Null
        let newMinutes = prompt('Quantos minutos?') ;
        if(!newMinutes){
         return false
        }

      return newMinutes
     }


    return {reset, Play, Pause, getMinutes}
}



