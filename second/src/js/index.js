var n = 1;
var sliding = false;
var map, header, filterBlock, nextBlock, mobileFilter;
var mobileWidth = 760;
var mapActive = false;
var stickAll;

function endSlide(oldSlide, newSlide) {
  sliding = false;
  oldSlide.setAttribute("class", "description__img");
  newSlide.setAttribute(
    "class",
    "description__img description__img_active_semi"
  );
}

function slide(direct) {
  var animationTime = 1000;
  if (sliding) return;
  sliding = true;
  var children = document.getElementById("main_bunner").children;
  var prevn = n;
  n = (n + direct + children.length) % children.length;
  if (direct === 1) {
    setTimeout(function() {
      endSlide(children[prevn], children[n]);
    }, animationTime);
    children[n].setAttribute(
      "class",
      "description__img description__img_active_move_r"
    );
  } else {
    setTimeout(function() {
      endSlide(children[prevn], children[n]);
    }, animationTime);
    children[prevn].setAttribute(
      "class",
      "description__img description__img_active_move_l"
    );
    children[n].setAttribute(
      "class",
      "description__img description__img_active_semi"
    );
  }
}

function openCloseFilter(oc) {
  mobileFilter.style.display = oc ? "block" : "none";
}

function openCloseMap(event) {
  var isMap = event.target.innerHTML !== "List";
  map.style.display = isMap ? "block" : "none";
  event.target.innerHTML = isMap ? "List" : "Map";
  mapActive = isMap;
  if (mapActive) stickAll();
}

function stickComponent(sticked, stickTo, nextBlock) {
  if (sticked.display === "none") return;

  var isPoint = Number.isInteger(stickTo);
  var stickConst = isPoint ? stickTo : stickTo.clientHeight + stickTo.offsetTop;

  if (sticked.offsetTop - stickConst <= scrollY || !nextBlock) {
    if (nextBlock) nextBlock.style.marginTop = sticked.clientHeight + "px";
    sticked.style.position = "fixed";
    if (!isPoint && stickTo.style.position === "relative")
      sticked.style.top = stickConst - scrollY + "px";
    else sticked.style.top = stickConst + "px";
    sticked.style.right = 0;
  }

  if (!nextBlock) return;

  if (nextBlock.offsetTop - sticked.clientHeight - stickConst > scrollY) {
    sticked.style.position = "relative";
    sticked.style.top = 0;
    if (nextBlock) nextBlock.style.marginTop = "0px";
  }
}

document.addEventListener(
  "DOMContentLoaded",
  function() {
    var mobileFilterOffset = -60;
    map = document.getElementById("map-container");
    header = document.getElementById("main-header");
    filterBlock = document.getElementById("filter-block");
    nextBlock = document.getElementById("sub-info");
    mobileFilter = document.getElementById("mobile-filter");

    stickAll = function() {
      if (document.documentElement.clientWidth <= mobileWidth)
        stickComponent(filterBlock, mobileFilterOffset, nextBlock);
      else stickComponent(filterBlock, header, nextBlock);
      stickComponent(map, filterBlock);
    };

    document.addEventListener("scroll", function() {
      stickAll();
    });
  },
  false
);

window.addEventListener(
  "resize",
  function() {
    stickAll();
    if (document.documentElement.clientWidth < mobileWidth && !mapActive)
      map.style.display = "none";
    else map.style.display = "block";
    if (document.documentElement.clientWidth > mobileWidth)
      mobileFilter.style.display = "none";
  },
  false
);

function setFilterOption(ev) {
  ev.target.classList.toggle("sider-filter-block__option-ap_state_active");
}
