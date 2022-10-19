const cols =document.querySelectorAll('.col');
document.addEventListener('keydown',(event)=>{
    event.preventDefault();
     if(event.code==='Space'){
 setRandomColor();
 
}
       });
document.addEventListener('click',event=>{
    const type=event.target.dataset.type;
    if(type==='lock'){
        const node =event.target.tagName.toLowerCase()==='i' 
        ? event.target
        :event.target.children[0]
        node.classList.toggle('fa-lock-open');
        node.classList.toggle('fa-lock');
     } else if(type==='copy'){
        copyToclickboard(event.target.textCotent)
     }
    
})

function generateRandomColor(){
    const hexCodes ="0123456789ABCDEF";
    color=''
    for(let i=0;i<6;i++){
        color+=hexCodes[Math.floor(Math.random()*hexCodes.length)];
    }
    return '#'+color
};
function copyToclickboard(text){
    return navigator.clipboard.writeText(text)
    
}
function setRandomColor(){
         cols.forEach((col)=> {
            const text=col.querySelector('h2');
            const color=chroma.random();
            text.textCotent=color;
            const isLocked=col.querySelector('i').classList.contains('fa-lock');
        const button=col.querySelector('button') ;
        
        
        if (isLocked){
            return
        }
         
         col.style.background=color;
        setTextColor(text,color);
        setTextColor(button ,color);
        

    })
};
function setTextColor(text,color){
    const luminance=chroma(color).luminance();
    text.style.color=luminance>0.5?'black':'white';
}








setRandomColor();

// const text=document.querySelectorAll('h2');
// function generateRandomText(){
//     const hexCodes2 ="0123456789ABCDEF";
//     color2=''
//     for(let i=0;i<6;i++){
//         color2+=hexCodes2[Math.floor(Math.random()*hexCodes2.length)];
//     }
//     return '#'+text;
// }
// generateRandomText()