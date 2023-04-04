let infoArr=[];
let UserValidate=function(string){
    let pattern=/\s/g;
    return !pattern.test(string)
}
let PassWordValidate=function(string){
    let pattern=/(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/g;
    return pattern.test(string)
}
let emailValidate=function(string){
    let pattern = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/g;
  return pattern.test(string);
}

let phoneValidate = function (number) {
    let pattern = /07\d{8}$/g;
    return pattern.test(number);
  };

function User(user,passWord,phoneNumber,email){
this.user=user;

}
const form=document.getElementById("form")
form.addEventListener("submit",handelSubmit) 
 function handelSubmit(e){
    e.preventDefault();

const user=
     {user:e.target.user.value,
     passWord:e.target.password.value,
     phoneNumber:e.target.phone.value,
     email:e.target.email.value
    }
 
      if(
        
        UserValidate(user.user)&&
        phoneValidate(user.phoneNumber)&&
        emailValidate(user.email)&&
        PassWordValidate(user.passWord)
        ){
          let infoUser=new User(user.user,user.passWord,user.phoneNumber,user.email)
         infoArr.push(infoUser)
            let infoToString=JSON.stringify(infoArr)
          sessionStorage.setItem("userInfo",infoToString)
          
          console.log(infoArr)
      
          
          console.log(localStorage)
         
        }
        let checking = infoArr.map(function(item){ return item.name });
let isDuplicate = checking.some(function(item, idx){ 
    return checking.indexOf(item) != idx 
});
console.log(isDuplicate);
if(isDuplicate){
  alert("user Already exist")
}
   
 }
