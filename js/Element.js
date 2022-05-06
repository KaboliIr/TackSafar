export let Btns={
    nextTour:document.getElementById("btn-Slider-Next"),
    PreTour:document.getElementById("btn-Slider-Pre"),
    nextHotel:document.getElementById("btn-Slider-Hotel-Next"),
    PreHotel:document.getElementById("btn-Slider-Hotel-Pre")
}
// The Circle
export let Circles={
    left:document.querySelectorAll("#circle-Left"),
    center:document.querySelectorAll("#circle-Center"),
    right:document.querySelectorAll("#circle-Right")
};
// The Slider Page
export let Page={
    MainSlider:document.querySelectorAll(".Slider-Scroll")
}
export let Left=Page.MainSlider[0].style;
export let LeftHotel=Page.MainSlider[1].style;
// The Page
 export let PageCommnet=document.getElementById("Scroll");
let x=0