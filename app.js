const name = document.getElementById('Platform1');

name.addEventListener('change', (e) => {
    console.log(e.target.value)
    if((e.target.value)===""){
        alert("Please fill the details");
    }

  if(((e.target.value).includes('1')) || ((e.target.value).includes('2')) || ((e.target.value).includes('3')) || ((e.target.value).includes('4')) || ((e.target.value).includes('5')) || ((e.target.value).includes('6')) || ((e.target.value).includes('7')) || ((e.target.value).includes('8')) || ((e.target.value).includes('9')) || ((e.target.value).includes('0'))){
    alert("Name should not contain numbers")
  }
})

const email = document.getElementById('Platform2');

email.addEventListener('change', (e) => {
    console.log(e.target.value);
    if((e.target.value)===""){
        alert("Please fill the details");
    }

    if(!((e.target.value).includes('@'))){
        alert('Please enter valid Email ID');
    }
})

const batch = document.getElementById('Platform3');

batch.addEventListener('change', (e) => {
    console.log(e.target.value);
    if((e.target.value)===""){
        alert("Please fill the details");
    }
    
    if((e.target.value)>10){
        alert('Please enter valid Batch Number');
    }
})

