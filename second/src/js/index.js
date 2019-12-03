let n = 1;
let sliding = false;
let map, header, filterBlock, list;
let stickAll;

const endSlide = (oldSlide, newSlide) => {
    sliding = false;
    oldSlide.setAttribute('class', 'description__img');
    newSlide.setAttribute('class', 'description__img description__img_active_semi');
}

const slide = (direct) => {
    const animationTime = 1000;
    if(sliding) return;
    sliding = true;
    const children = document.getElementById("main_bunner").children;
    const prevn = n;
    n = (n + direct + children.length)%children.length;
    if(direct === 1){
        setTimeout(() => endSlide(children[prevn], children[n]), animationTime);
        children[n].setAttribute('class', 'description__img description__img_active_move_r');
    } else{
        setTimeout(() => endSlide(children[prevn], children[n]), animationTime);
        children[prevn].setAttribute('class', 'description__img description__img_active_move_l');
        children[n].setAttribute('class', 'description__img description__img_active_semi');
    }
}

const openCloseFilter = (oc) => {
    document.getElementById("filter").style.display = oc ? ("block"):("none");
}

const openCloseMap = (event) => {
    const isMap = event.target.innerHTML === "Map";
    document.getElementById("map-container").style.display = isMap ? ("block"):("none");
    event.target.innerHTML = isMap ? ("List"):("Map");
}

const stickComponent = (sticked, stickedInitState, stickTo, nextBlock) => {       
    if(sticked.display === "none") return;

    const isPoint = Number.isInteger(stickTo);
    const stickConst = isPoint?(stickTo):(stickTo.clientHeight + stickTo.offsetTop);

    if (sticked.offsetTop - stickConst  <= scrollY){ 
        if(nextBlock)
            nextBlock.style.marginTop = sticked.clientHeight + "px";
        sticked.style.position = "fixed";
        if(!isPoint&&stickTo.style.position === "relative")
            sticked.style.top = stickConst - scrollY + "px";   
        else  sticked.style.top = stickConst + "px";
        sticked.style.right = 0;
    };
    
    if(stickedInitState - stickConst > scrollY){ 
        sticked.style.position = "relative" ;
        sticked.style.top = 0;
        nextBlock.style.marginTop = "0px";
    };
}

document.addEventListener('DOMContentLoaded', () => {
    const mobileWidth = 680;
    const mobileFilterOffset = -60;
    map = document.getElementById("map-container");
    header = document.getElementById("main-header");
    filterBlock = document.getElementById("filter-block");
    list = document.getElementById("sub-info");
    filterInitialOffset = filterBlock.offsetTop;
    mapInitialOffset = map.offsetTop;
    stickAll = () => {
        if(document.documentElement.clientWidth <= mobileWidth) 
        stickComponent(filterBlock, filterInitialOffset, mobileFilterOffset, list);
        else stickComponent(filterBlock, filterInitialOffset, header, list);
        stickComponent(map, mapInitialOffset, filterBlock);
    }

    document.addEventListener("scroll", () => {      
        stickAll();
    });

}, false);


window.addEventListener("resize", () => {
    stickAll()
  }, false);

const setFilterOption = (ev) => {
    ev.target.classList.toggle("sider-filter-block__option-ap_state_active");
}
