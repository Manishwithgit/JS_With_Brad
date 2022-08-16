const level=document.querySelectorAll('.formControl label')

// nodelist for all labels

level.forEach(label=>{
    label.innerHTML=label.innerText
     .split('')
     .map((letter, idx)=>`<span style="transition-delay:${idx*55}ms">${letter}</span>`)
     .join('')
})