// The Element
let Body= document.querySelector("body");
let Log=document.getElementById("Login");
let inputValidate={
  userName:document.getElementById("UserName"),
  passWord:document.getElementById("passWord"),
  btn:document.getElementById("btnValid"),
  
}

// The Function Login
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

// The Function SingUp
function SingUp(a,b) { 
  if(a=="" || b==""){
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
      icon: 'error',
      title: ' هنوز داخل سایت ثبت نام نکردید'
    })

  } 
  else{
    // The get localStorage
    const DataLogin=localStorage.setItem("User",`{"name":"${a}","pass":"${b}"}`);


    // The Redirect
    // The get main url
let getUrl=document.URL;
// The redirect Url
const newUrl=getUrl.slice(0,-12);
location.replace(newUrl);
console.log(inputValidate.personLogin);
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


}



// -----------------------------------------------------The Event

// The Login And SingUp Event
Body.onload=Login();
// The Event invalid
inputValidate.btn.addEventListener("click",(e)=>{
 e.preventDefault();
  SingUp(inputValidate.userName.value,inputValidate.passWord.value);


});
