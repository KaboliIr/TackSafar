// The Var
let Body= document.querySelector("body");

// The Function Login
function Login(){
    const DataLogin=localStorage.getItem("User");
    if(DataLogin==true){
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
            title: ' داخل سایت ثبت نام نکردی بلا'
          })
    }
}

Body.onload=Login();




// The Login And SingUp
let Log=document.getElementById("Login");
