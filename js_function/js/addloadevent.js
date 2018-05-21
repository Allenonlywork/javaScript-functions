function addloadevent(fnc){
	var oldonload=window.onload;
	if(typeof window.onload!='function'){
		window.onload=fnc;
	}else{
		window.onload=function(){
			oldonload();
			fnc();
		}
	}
}
