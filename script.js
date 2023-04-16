const title_Time = document.querySelector('#TitleTime1')
const sub_title_Time = document.querySelector('#titleTime')
const body_title_Time = document.querySelector('#bodyTime')

const Button_Start = document.querySelector('#button_Start')
const button_Stop = document.querySelector('#button-Stop')
const button_Reset = document.querySelector('#button-Reset')


let mil_sec = 0, sec = 0, min = 0;
let choice_Bool = true

function stop_Watch(){
    const Class_Inter_Time = setInterval(() => {       
        mil_sec = mil_sec + 1

        body_title_Time.textContent = mil_sec

        if(mil_sec === 60){
            mil_sec = 0

            sec = sec + 1          
            sub_title_Time.textContent = sec

            if(sec === 60){
                sec = 0

                min = min + 1
                title_Time.textContent = x
            }
        }
    }, 10);    
    button_Stop.onclick = () => {

        clearInterval(Class_Inter_Time)  

        choice_Bool = true
    }
}
Button_Start.onclick = () => {

    if(choice_Bool === true){
        stop_Watch()

        choice_Bool = false
    }
}
button_Reset.onclick = () => {

    mil_sec = 0, sec = 0, min = 0

    title_Time.textContent = min
    sub_title_Time.textContent = sec
    body_title_Time.textContent = mil_sec

    choice_Bool = true
}


