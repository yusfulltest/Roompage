function MenuList(){
    let OpenMenu = document.getElementById('openmenu');
    let InsideMenu = document.getElementById('Mymenus');

    if (InsideMenu.style.display == 'flex'){
        InsideMenu.style.display = 'none'
    }

    else{
        InsideMenu.style.display = 'flex';
    }

   

}

function CloseList(){
let close = document.getElementById('closemenu');
let menu = document.getElementById('Mymenus');

if(menu.style.display =='flex'){
    menu.style.display ='none';
}

else{
    menu.style.display ='flex';
}


}


let InitSlider = () => {

    
    let sectionlist = document.querySelector('.headerWrap')
    let slideClick = document.querySelectorAll('.leftright .butts');
    
    
    slideClick.forEach(div =>{
      div.addEventListener("click", () =>{
    let direction = div.id ==="prev" ? -1 : 1;
    let scrollAmount = sectionlist.clientWidth * direction;
    sectionlist.scrollBy({left: scrollAmount, behavior: "smooth"});
    
    
    
    
      })
    })
    
    
    }
    
     
    window.addEventListener('load', InitSlider);









