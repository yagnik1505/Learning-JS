const temp = document.getElementById('clock')

setInterval(function(){
    let date = new Date()
    temp.innerHTML = date.toLocaleTimeString()
},1000)