const container = document.getElementById('container');
var array_range = document.getElementById('array_range');
var time_range = document.getElementById('time_range');
var generate_array = document.getElementById('generate_array');
var algo_button = document.querySelectorAll('.algo_button');

var array_size = array_range.value;
var bar_size = [];
var bar = [];
var speed = 1000;
var delay_time = 10000 / (Math.floor(array_size / 10) * speed);        //Decrease numerator to increase speed.
var c_delay = 0;			//This is updated over every bar change so that visualization is visible.

function randomnofun(min, max)	//random number generator within a given range
{
	return Math.floor(Math.random() * (max - min + 1) + min)
}

const load_in_range = () => {		//loading the bar_size and calling creating_bar

	bar_size = [];		//empty bar_size
	container.innerHTML = '';		//empty container
	for (let i = 0; i < array_size; i++) {

		bar_size.push(randomnofun(2, array_size));	//adding new elements
		create_bar(bar_size[i], i);					//adding new bars to container

	}
	console.log(bar_size);
}


function create_bar(bar_height, i) {			//creating bars

	bar[i] = document.createElement('section');
	bar[i].style = 'background-color:blue;height:' + bar_height * 10 + 'px';
	container.appendChild(bar[i]);
}

const update_array_size = () => {			//updating array_size and calling load_in_range f(n)
	array_size = array_range.value;
	load_in_range();
}

window.onload = update_array_size();		//..1
array_range.addEventListener('input', update_array_size);
generate_array.addEventListener('click', load_in_range);