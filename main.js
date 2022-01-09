 //hours
 setInterval(() => {
  let date = new Date()
  let hour = document.getElementById('hour')
  let hora = date.getHours()

  hour.innerHTML = `${hora < 10 ? '0' + hora : hora}`
},1000)

//minutes
setInterval(() => {
 let date = new Date()
 let minutes = date.getMinutes()

 let min = document.getElementById('min')

 min.innerHTML = `${minutes < 10 ? '0' + minutes : minutes}`
},1000)

//seconds
setInterval(() => {
 let date = new Date()
 let sec = document.getElementById('sec')
 let seconds = date.getSeconds()

 sec.innerHTML = `${seconds < 10 ? '0' + seconds : seconds}`
},1000)
