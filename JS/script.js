function Check(){
  var name = document.getElementById("Yourname").value
  var lname = document.getElementById("Lovename").value
    if (name == ""){
      alert("Please Enter Your Name")
    } 
    else if(name.length < 2){
      alert("Minimum length of Your Name must be 2 characters")
    }
    else if(!isNaN(name)){
      alert("Numbers are not Allowed")
    }
    else if (lname == ""){
      alert("Please Enter Your Love Name")
    } 
    else if(lname.length < 2){
      alert("Minimum length of Your Love name must be 2 characters")
    } 
    else if(!isNaN(lname)){
      alert("Numbers are not Allowed")
    }
    else{
      let min = 50;
  let max = 100;
      let res = Math.round(min + (max - min) * Math.random())
  result.value = res + "%"
    }
  }
