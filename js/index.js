// The Export Element 
import {Btns,Page,PageCommnet,Left,LeftHotel,Circles,personLogin,Body} from './Element.js';
// The Function
import {Parallax,SliderNext,SliderPre,SliderPreHotel,SliderNextHotel,CircleCenter,CircleRight,Circleleft,CircleCenterHotel,CircleRightHotel,CircleleftHotel,CommentSlider} from './Function.js'
// ---------Start---------------The Slider
// The Paralax in Header
document.addEventListener("mousemove",Parallax);
//  The Event
Btns.PreTour.addEventListener("click",SliderNext);
Btns.nextTour.addEventListener("click",SliderPre);
Btns.PreHotel.addEventListener("click",SliderNextHotel);
Btns.nextHotel.addEventListener("click",SliderPreHotel);
// ------------End----------------The Slider

//------------Start-------------------- The Circle
// The Event Circle
Circles.center[0].addEventListener("click",CircleCenter);
Circles.right[0].addEventListener("click",CircleRight);
Circles.left[0].addEventListener("click",Circleleft);

// ------------------------------------The Hotel

// The Event Circle

Circles.center[1].addEventListener("click",CircleCenterHotel);
Circles.right[1].addEventListener("click",CircleRightHotel);
Circles.left[1].addEventListener("click",CircleleftHotel);

// function test() {
//     if(LeftHotel.left=="0px"){
//         CircleRightHotel();
//     }
//     else if(LeftHotel.left=="-100%"){
//         CircleCenterHotel();

//     }
//     else if(LeftHotel.left=="-200%"){
//         CircleleftHotel();
//     }
//   }

//------------End---------------------------------------------------- The Circle


//-------------------------------------------------------------- The Slider Commnet
// The Page
// let x=0

 
  Body.onload=CommentSlider;

const data=JSON.parse(localStorage.getItem("User"));
personLogin.classList="bi bi-bookmark-check-fill";
personLogin.innerHTML+=`<small class="h6">${data.name}</small>`;


// The Test
function Login(){
  const DataLogin=localStorage.getItem("User");
  if(DataLogin){
      const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })
        
        Toast.fire({
          icon: 'success',
          title: 'شما داخل سایت عضو هستید'
        })
  }
  else{
      
      const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })
        
        Toast.fire({
          icon: 'info',
          title: ' هنوز داخل سایت ثبت نام نکردید'
        })

    
  }
}

Body.onload=Login();
