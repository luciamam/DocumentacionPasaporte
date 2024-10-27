let input_radios=document.querySelectorAll('.radios')




input_radios.forEach(input_radio=>{
    input_radio.addEventListener('change',()=>{
        if(input_radio.checked){
            window.location.href=input_radio.value;


        }

    })
})


//recorrer muchos elementos que van a realizar lo mismo 













/* input_radio_adulto.addEventListener('change',()=>{

    if(input_radio_adulto.checked){
        window.location.href =input_radio_adulto.value;
    }
    if(input_radio_menor.checked){
        window.location.href=input_radio_menor.value;
        

    }
}) */







