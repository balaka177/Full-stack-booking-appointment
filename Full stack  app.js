
var sub=document.getElementById('for');
sub.addEventListener('click',cred);
var list=document.getElementById('items');


function cred(e){
    e.preventDefault(); 
    var nm=document.getElementById('nm').value;
    var em=document.getElementById('em').value;
    var tel=document.getElementById('tell').value
     let obj={
        name:nm,
        gmail:em,
        phone:tel
     };
     axios.get('https://crudcrud.com/api/328569691e244b51a6a7beb7187c716f/data')
     .then((res) => {
      console.log(res);
      for(var i=0;i<res.data.length;i++){
         console.log(i);
         console.log(res.data[i].name);
         console.log(res.data[i]._id);

      
      
     




     //let obj_st=JSON.stringify(obj);
     //localStorage.setItem(em,obj_st);
     //document.write(nm + ' - ' +em +' - '+ tel);

     var ul=document.getElementById('items')
     var li=document.createElement('li');
     li.appendChild(document.createTextNode(`${res.data[i].name} - ${res.data[i].gmail} - ${res.data[i].phone}`));
     ul.appendChild(li);

     var btn=document.createElement('button');
     btn.id=('dele')
     btn.className=(res.data[i]._id);
     btn.appendChild(document.createTextNode('Delete'));

     var ed=document.createElement('button');
     ed.id='editbtn';
     ed.appendChild(document.createTextNode('Edit'));
     li.appendChild(btn);
     li.appendChild(ed);

 

   }

   })
   .catch((err) => {
    console.log(err)
   })
}

   var bt =document.getElementsByTagName('button');
    bt.addEventListener('click',function(e){
      
      console.log(btn.className)
      axios.delete('https://crudcrud.com/api/328569691e244b51a6a7beb7187c716f/data/${btn.className}')
      .then(res => console.log(res))
      .catch(err =>console.log(err))
         console.log("button is executed")
      
      
         var li=e.target.parentElement;
         list.removeChild(li);
      
      
    })
    
    
      ed.addEventListener('click',function(e){
         if(e.target.id==='editbtn'){
            let myobj=JSON.parse(obj_st);
            document.getElementById('nm').value=nm;
            document.getElementById('em').value=em;
            document.getElementById('tell').value=tel;
            console.log(myobj.name)
            localStorage.removeItem(em);
            var li=e.target.parentElement;
            list.removeChild(li);
         
            

         }
      })

   


 

