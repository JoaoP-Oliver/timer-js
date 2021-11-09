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
 
  if(seconds === 1) {
  new Notification("Timer", {
              body:"Se passaram um minuto",
              image:'https://avatars.githubusercontent.com/u/88394758?s=40&v=4'
          })
}
 
},1000)
