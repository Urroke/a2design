let n = 1;
let sliding = false;
let map, header, filterBlock;
let stickAll;

const endSlide = (oldSlide, newSlide) => {
    sliding = false;
    oldSlide.setAttribute('class', 'description__img');
    newSlide.setAttribute('class', 'description__img description__img_active_semi');
}

const slide = (direct) => {
    if(sliding) return;
    sliding = true;
    const children = document.getElementById("main_bunner").children;
    const prevn = n;
    n = (n + direct + children.length)%children.length;
    if(direct === 1){
        setTimeout(() => endSlide(children[prevn], children[n]), 2000);
        children[n].setAttribute('class', 'description__img description__img_active_move_r');
    } else{
        setTimeout(() => endSlide(children[prevn], children[n]), 2000);
        children[prevn].setAttribute('class', 'description__img description__img_active_move_l');
        children[n].setAttribute('class', 'description__img description__img_active_semi');
    }
}

const openCloseFilter = (oc) => {
    document.getElementById("filter").style.display = oc ? ("block"):("none");
}

const stickComponent = (sticked, stickedInitState, stickTo) => {           /// Хотелось сделать, так чтобы работало с адаптивными элементами без css
    if(sticked.display === "none") return;
    const stickConst = stickTo.clientHeight + stickTo.offsetTop;
    if (sticked.offsetTop - stickConst  <= scrollY){ 
    sticked.style.position = "fixed";
    if(stickTo.style.position === "relative")
        sticked.style.top = stickConst - scrollY + "px";   
    else  sticked.style.top = stickConst + "px";
    sticked.style.right = 0;};
    if(stickedInitState - stickConst > scrollY){ sticked.style.position = "relative" ;sticked.style.top = 0;};
}

document.addEventListener('DOMContentLoaded', () => {
    map = document.getElementById("map-container");
    header = document.getElementById("main-header");
    filterBlock = document.getElementById("filter-block");
    filterInitialOffset = filterBlock.offsetTop;
    mapInitialOffset = map.offsetTop;

    stickAll = () => {
        stickComponent(filterBlock, filterInitialOffset, header);
        stickComponent(map, mapInitialOffset, filterBlock);
    }

    document.addEventListener("scroll", () => {      
        stickAll();
    });

}, false);


window.addEventListener("resize", () => {
    stickAll()
  }, false);

