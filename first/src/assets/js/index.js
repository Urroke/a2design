const OpenSubMenu = (ev) => {
    const menuItem = ev.target.parentNode;
    const filter = menuItem.parentNode;
    if(filter.className !== 'sub_filter_menu'){
        filter.setAttribute('class', 'sub_filter_menu');
        ev.target.setAttribute('class', 'left_arrow');
    } else {
        filter.setAttribute('class', 'sub_filter_menu sub_filter_menu_open');
        ev.target.setAttribute('class', 'down_arrow');
    }
}

const SetFilterOption = (ev) => {
    if(ev.target.className === "green_chose_flag")
        ev.target.setAttribute('class', 'green_no_chose_flag');
    else 
        ev.target.setAttribute('class', 'green_chose_flag');    
}