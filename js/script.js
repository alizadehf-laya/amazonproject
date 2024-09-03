var btn=document.getElementById("txt").addEventListener("click",()=>{
    var dropDown=document.getElementById("drop");
    dropDown.style.display=dropDown.style.display===`none`?`block`:`none`;
})
///////////////////////////////////////
function myFunction() {
    var dropDown = document.getElementById("drop");
    dropDown.classList.toggle("in-drop");
    const drop=document.getElementById("drop").style.display=`block`  
  }
  ////////////////////change slide ///////////////////////////
  const imgs=document.querySelectorAll(`.header-slider ul img`);
  const prev_btn=document.querySelector(`.control-prev`);
  const next_btn=document.querySelector(`.control-next`);
  let n=0;
  function changeslide(){
    for(let i=0 ; i<imgs.length ; i++){
        imgs[i].style.display=`none`;
    }
    imgs[n].style.display=`block`;
  }
  changeslide()
  prev_btn.addEventListener("click",(e)=>{
    if(n > 0){
        n--;
    }else{
        n=imgs.length - 1;
    }
    changeslide();
  })
  next_btn.addEventListener("click",(e)=>{
    if(n <imgs.length - 1){
        n++;
    }else{
        n = 0;
    }
    changeslide();
  })
  /////////////////////////mousewheel Y /////////////////////////////////////
  const scrollContainer =document.querySelectorAll(`.prouducts`);
  for(const item of scrollContainer){
    item.addEventListener("wheel",(evt)=>{
      evt.preventDefault();
      item.scrollLeft+=evt.deltaY;
    })
  }
  //////////////////////////////////////////////////submenu///////////////////////
  let submenu=document.getElementById("submenu");

  function togglemenu(){
    submenu.classList.toggle("open-menu");   
  }
///////////////////////index2//////////////////
// document.getElementById("number").onkeydown=function(){chnme()}
// function chnme(){
//   document.getElementById("number").style.border="2px solid blue";
// }

// function chngclr(border,clr){
// border.style.color=clr;
// }
////////////////////////////////submenu for EN ////////////
let submenuEn=document.getElementById("sub-menuEn");

function toggleEn(){
  submenuEn.classList.toggle("open-menu-en");   
}
////////////////////////////slidbar-container-navigation/////////////////////l//////////////////
const slidebarnavigationEl=document.getElementById("slidbar-container-navigation-id")
const slidebaropenNavigationEl=document.getElementById("open-nav-slider")
const sidebarcloseNavigationEl=document.getElementById("slidbar-navigation-close")


slidebaropenNavigationEl.addEventListener("click",()=>{
  slidebarnavigationEl.classList.toggle("slidbar-show")
})
sidebarcloseNavigationEl.addEventListener("click",()=>{
  slidebarnavigationEl.classList.toggle("slidbar-show")
})
