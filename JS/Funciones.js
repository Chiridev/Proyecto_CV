'use strict'

const li        = document.querySelectorAll('.li')
const bloque    = document.querySelectorAll('.bloque')
const boton    = document.querySelectorAll('.boton')



li.forEach( ( cadaLi , i )=>{
    
    li[i].addEventListener('click',()=>{

        
        li.forEach( ( cadaLi , i )=>{
            
            li[i].classList.remove('activo')
            bloque[i].classList.remove('activo')
            boton[i].classList.remove('activo')
        })

        
        li[i].classList.add('activo')
        bloque[i].classList.add('activo')
        boton[i].classList.add('activo')

    })
});






