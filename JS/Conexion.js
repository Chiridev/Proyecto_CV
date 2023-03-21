


 const conexion = fetch('https://randomuser.me/api/')
                  .then(response => response.json())
                  .then(json => console.log(json))
                 
const age = conexion.find('age')

console.log(JSON.strigify(age))
  

                 

// const datos = conexion['results']


// console.log(datos)

// const data = JSON.stringify(datos)
// console.log(data)