const temp = document.querySelectorAll('.button')
const body = document.querySelector('body')


temp.forEach(function(button){
    console.log(button)
    button.addEventListener('mouseover',function(e){
    
        console.log(e)
        console.log(e.target) // it will simply tell from where this event has occur.
        body.style.backgroundColor = e.target.id // it will change bgcolor as block color.
    })
});