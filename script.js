//your JS code here. If required.
function getCookie(uname){
	let arr=document.cookie.split('; ')
		.map((el)=>{
 
  
         let key= el.split('=')[0]
        let val=el.split('=')[1]
        return {
          [key]:val
        }
  
  })
		.filter((el)=>{
		    if(el[uname]){
		      return el
			    }
			  })
	if(arr.length)return arr[0][uname];
	return null;
}

document.addEventListener('DOMContentLoaded',()=>{
	let fc=document.querySelector('#fontcolor')
	let fs=document.querySelector('#fontsize')
	let fsv=getCookie('fontsize')
	let fcv=getCookie('fontcolor')
	if(fsv){
		fs.value=fsv;
		document.body.style.fontSize=`${fsv}px`;
	}
	if(fcv){
		document.body.style.color=fcv;
		fc.value=fcv;
	}
	
})
 
let submit=document.querySelector('input[type=submit]');
submit.addEventListener('click',(e)=>{
	e.preventDefault();
	let form=document.querySelector('form');
	let res=new FormData(form);
	let {fontsize,fontcolor}=Object.fromEntries(res);
	document.cookie=`fontsize=${fontsize};`
	document.cookie=`fontcolor=${fontcolor};`
})