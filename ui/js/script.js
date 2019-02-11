function showpassword(y){
	var x= document.getElementById(y);
	if(x.type === "password"){
		x.type ="text";
	} else{
		x.type="password";
	}
}
function displaymenu(y){
	var x=document.getElementById(y);
	if (x.style.display==="none"){
		x.style.display="block";
	}
else {
	x.style.display="none";
	}
}
 