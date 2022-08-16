const unlocked=document.getElementById('open')

const locked=document.getElementById('close')

const container=document.querySelector('.diba')

unlocked.addEventListener('click',()=>container.classList.add('show-nav'))

locked.addEventListener('click',()=>container.classList.remove('show-nav'))
