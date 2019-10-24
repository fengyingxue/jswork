
//let str = '';
function goldbach(){
  //  let (',') = document.getElementById('goldbach')
  let a = parseInt(document.getElementById('odd').value)
    if(a>2,a%2==1){
        alert('请输入一个大于2的偶数!')
        return false
    }else{
        isTrue(a)
    }
    return true
   
}

function factorial(a){
    var sum=0;
    for(var i=1;i<=a;i++){
        if(a % i ==0){
            sum++;
        }
    }
    if(sum==2){
        return true;
    }else{
        return false;
    }
}

function isTrue(a){
   let str= ''
  for(var i=2;i<a-2;i++){
    var j = a -i;
    if(factorial(i)&&factorial(j)&& i>=j){
        str += (a+"可以拆分为两个质数"+ i+"与"+j+"的和"+'<br>')
    }
  }
  document.getElementById('goldbach').innerHTML = str
  //goldbach=document.getElementById('goldbach')
  //goldbach.innerHTML = str

}