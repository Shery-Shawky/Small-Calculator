
function EnterNumber(val){
    document.getElementById("ans").value += val;
  
  }
  function EnterOperator(val){
    document.getElementById("ans").value += val;
  
  }
  function EnterEqual(){
    var x = document.getElementById("ans").value;
  var  y = eval(x);
  document.getElementById("ans").value = y;
  
  }
  
  function EnterClear()
  {
  document.getElementById("ans").value = ""
  }

















