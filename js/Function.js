// The Export Varable
import {Btns,Circles,PageCommnet,LeftHotel,Left,Page} from './Element.js'

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

  // The Function CommentSlider
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

      // The Function Header Motion
      function Parallax(e){
        const allLayers=this.querySelectorAll(".layer");
        allLayers.forEach(layer => {
          const Speed=layer.getAttribute("data-speed");
          const x=(window.innerWidth - e.pageX * Speed)/100;
          const y=(window.innerHeight - e.pageY * Speed)/100;
          layer.style.transform=`translateX(${x}px) translateY(${y}px)`;
        });
         
      }
     export {SliderNext,SliderPre,SliderNextHotel,SliderPreHotel};
     export {CircleCenter,CircleRight,Circleleft};
     export {CircleCenterHotel,CircleRightHotel,CircleleftHotel};
     export {CommentSlider};
     export {Parallax};