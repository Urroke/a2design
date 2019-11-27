let n = 1;

let sliding = false;

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
    console.log(n);
}

const openCloseFilter = (oc) => {
    document.getElementById("filter").style.display = oc ? ("block"):("none");
}