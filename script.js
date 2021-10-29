const panels = document.querySelectorAll('.panel');

panels.forEach(function(card){
    card.addEventListener("click",function()
    {
        removeActiveClasses()
        card.classList.add('active')
    })
})

    function removeActiveClasses(){
        panels.forEach(function(card){
            card.classList.remove('active')
        })
    }
