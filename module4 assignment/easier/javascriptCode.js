var array = ["Mark" , "Joy","Henry" , "Jhon","Williams","Roy"];

for (var  i  in array){

	if(array[i][0]=='j' || array[i][0]=='J'){
		console.log("Goodbye "+array[i]);
	}
	else{
		console.log("Hello "+array[i]);
	}
}