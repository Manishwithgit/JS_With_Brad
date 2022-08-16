//  console.log('manish')

 const boxes=document.querySelectorAll('.diba');

 window.addEventListener('scroll',checkBox)

 checkBox()

 // we need to trigger point where is the triggerPoint or where we want to start
 function checkBox(){
    // console.log(window.innerHeight)
    const triggerBottom=window.innerHeight/5*4
 
    boxes.forEach(box=>{
        const boxTop=box.getBoundingClientRect().top;

        if(boxTop<triggerBottom){
            box.classList.add('appear')
        } else{
            box.classList.remove('appear')
        }
    })
}
