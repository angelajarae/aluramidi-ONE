const teclas=document.querySelectorAll(".tecla");

for(const tecla of teclas){
    const soundId=`#sonido_${tecla.classList[1]}`;
    const soundElement=document.querySelector(soundId);

    tecla.onclick=()=> soundElement.play();
    tecla.onkeydown=(e)=>{
        if(e.code==="Space"||e.code==="Enter"){
            tecla.classList.add("activa");
        }
    };
    tecla.onkeyup=()=>tecla.classList.remove("activa");
}