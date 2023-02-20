let inputNum = document.getElementsByClassName('inputNum')[0];

let Num = document.getElementsByClassName('Num')[0];

let submitBtn = document.getElementsByClassName('submit')[0]

let clickEvent = new Event('click');


let RanNum = () =>{

	let ran = Math.ceil(9*Math.random())
	return ran;

};



let GetMyNum = (a) =>{
		

	let MyNum =[];
	

		for(let i = 0; i<a ;i++){
			
			let l = RanNum();

			

			MyNum.push(l)

		}

	return parseInt(MyNum.join(''));


};





function getNumber() {
	Num.innerHTML = GetMyNum(7);

}
let t1;

let time = ()=>{ t1 = setTimeout(
			()=>{submitBtn.dispatchEvent(clickEvent)}, 4000 );

				}

let counter = 0;

getNumber();
submitBtn.onclick = ()=>{

	clearTimeout(t1);
counter++;

	
Num.classList.toggle('hide');
inputNum.classList.toggle('hide');

inputNum.focus();

if(Num.innerHTML == inputNum.value && counter%2==0){

	console.log('==')


	inputNum.value = '';
	alert('congrats!');	
	getNumber()
		time();	

	inputNum.focus()
}else if(counter%2==0){


	console.log('else')
	
	alert('oops... it was ' + parseInt(Num.innerHTML) + ' your is ' + inputNum.value);	
	
	getNumber()

	time();


	inputNum.value = '';
	

}
}