 //hours
 setInterval(() => {
  let hour = document.getElementById('hour')
  let date = new Date()
  let hora = date.getHours()

  hour.innerHTML = `${hora}`
},1000)

//minutes
setInterval(() => {
 let date = new Date()
 let minutes = date.getMinutes()

 let min = document.getElementById('min')

 min.innerHTML = `${minutes}`
},1000)

//seconds
setInterval(() => {
 let sec = document.getElementById('sec')

 let date = new Date()
 let seconds = date.getSeconds()

 sec.innerHTML = `${seconds}`
},1000)
