


function inputValue(num){

	document.calculator.textview.value = document.calculator.textview.value + num;
}

function equal()
{
	var expression = document.calculator.textview.value;
	document.calculator.textview.value = eval(expression);
}

function clearF()
{

	document.calculator.textview.value = null ;
}

function backSpac()
{

var value = document.calculator.textview.value;
document.calculator.textview.value = value.substr(0,value.length - 1);

}
