// ---------Start---------------The Slider
// The Slider Btn
let Btns={
    nextTour:document.getElementById("btn-Slider-Next"),
    PreTour:document.getElementById("btn-Slider-Pre"),
    nextHotel:document.getElementById("btn-Slider-Hotel-Next"),
    PreHotel:document.getElementById("btn-Slider-Hotel-Pre")
}
// The Slider Page
let Page={
    MainSlider:document.querySelectorAll(".Slider-Scroll")
}


// The Function Slider
function SliderNext() { 
    let Left=Page.MainSlider[0].style;
    if(Left.left=="" || Left.left=="0px"){
        
      return  Left.left="-100%"

    }
    else if(Left.left=="-100%"){
    return    Left.left="-200%"
    }
   
   

 }
 function SliderPre() { 
    let Left=Page.MainSlider[0].style;
        if(Left.left=="-200%"){
            
       return     Left.left="-100%"
    
        }
        else if(Left.left=="-100%"){
           return Left.left="0"
        }
       
    
  }

  function SliderNextHotel() { 
    let Left=Page.MainSlider[1].style;
    if(Left.left=="" || Left.left=="0px"){
        
      return  Left.left="-100%"

    }
    else if(Left.left=="-100%"){
    return    Left.left="-200%"
    }
   
   

 }
 function SliderPreHotel() { 
    let Left=Page.MainSlider[1].style;
        if(Left.left=="-200%"){
            
       return     Left.left="-100%"
    
        }
        else if(Left.left=="-100%"){
           return Left.left="0"
        }
       
    
  }
//  The Event
Btns.PreTour.addEventListener("click",SliderNext);
Btns.nextTour.addEventListener("click",SliderPre);
Btns.PreHotel.addEventListener("click",SliderNextHotel);
Btns.nextHotel.addEventListener("click",SliderPreHotel);
// ------------End----------------The Slider

//------------Start-------------------- The Circle
let Circles={
    left:document.querySelectorAll("#circle-Left"),
    center:document.querySelectorAll("#circle-Center"),
    right:document.querySelectorAll("#circle-Right")
};
let Left=Page.MainSlider[0].style;
// The Function Circle
function CircleRight() {  
    Left.left="0px";
    Circles.left[0].className="Disactive";
    Circles.right[0].className="Active";
    Circles.center[0].className="Disactive";

}
function CircleCenter() { 
    Left.left="-100%";
    Circles.left[0].className="Disactive";
    Circles.right[0].className="Disactive";
    Circles.center[0].className="Active";
 }
function Circleleft() {
    Left.left="-200%";
    Circles.left[0].className="Active";
    Circles.right[0].className="Disactive";
    Circles.center[0].className="Disactive";
  }


// The Event Circle
Circles.center[0].addEventListener("click",CircleCenter);
Circles.right[0].addEventListener("click",CircleRight);
Circles.left[0].addEventListener("click",Circleleft);

// ------------------------------------The Hotel
let LeftHotel=Page.MainSlider[1].style;
// The Function Circle
function CircleRightHotel() {  
    LeftHotel.left="0px";
    Circles.left[1].className="Disactive";
    Circles.right[1].className="Active";
    Circles.center[1].className="Disactive";

}
function CircleCenterHotel() { 
    LeftHotel.left="-100%";
    Circles.left[1].className="Disactive";
    Circles.right[1].className="Disactive";
    Circles.center[1].className="Active";
 }
function CircleleftHotel() {
    LeftHotel.left="-200%";
    Circles.left[1].className="Active";
    Circles.right[1].className="Disactive";
    Circles.center[1].className="Disactive";
  }


// The Event Circle
Circles.center[1].addEventListener("click",CircleCenterHotel);
Circles.right[1].addEventListener("click",CircleRightHotel);
Circles.left[1].addEventListener("click",CircleleftHotel);

//------------End---------------------------------------------------- The Circle


//-------------------------------------------------------------- The Slider Commnet
// The Page
let PageCommnet=document.getElementById("Scroll");
let x=0
// The Function
function CommentSlider() {
const Left=PageCommnet.style;
setInterval(()=>{
if(Left.left=="230%"){
    return Left.left="0px"

}
else if(Left.left=="0px" || Left.left==null || Left.left==""){
    return Left.left="70%";

}
else if(Left.left=="70%"){
    return Left.left="150%";
}
else if(Left.left=="150%"){
    return Left.left="230%";
}
},4000)

  }

  CommentSlider();

//   The Link
const Link=document.querySelectorAll("a");
Link.forEach(element => {
    element.addEventListener("click",(e)=>{
        e.preventDefault();
    })
});
