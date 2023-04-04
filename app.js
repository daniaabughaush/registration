let infoArr=[];
let checkArr=[];
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

  if(sessionStorage.userInfo != null){
    infoArr=JSON.parse(sessionStorage.userInfo);
  }

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
 
    let infoUser=new User(user.user,user.passWord,user.phoneNumber,user.email)
    if(
      
      UserValidate(user.user)&&
      phoneValidate(user.phoneNumber)&&
      emailValidate(user.email)
      // PassWordValidate(user.passWord)
      ){
          infoArr.push(infoUser)
             let infoToString=JSON.stringify(infoArr)
           sessionStorage.setItem("userInfo",infoToString)
           console.log(infoArr)
              checkArr=[];
           for (let i = 0; i < infoArr.length; i++) {

            const element = infoArr[i].user;
            console.log(element)
            checkArr.push(element)
           }
           
         
         
        }
        console.log(checkArr)
        let findDuplicates = arr => arr.filter((item, index) => arr.indexOf(item) !== index)
console.log(findDuplicates(checkArr));
console.log(findDuplicates(checkArr).length!==0)
if(findDuplicates(checkArr).length!==0){
  alert("user Already exist")
  infoArr.pop();
  
 
}
   
 }
// sessionStorage.clear();