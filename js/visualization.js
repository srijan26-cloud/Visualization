//..2
function disable_other_events() {				//disabling other buttons and range
	for (let i = 0; i < algo_button.length; i++)
		algo_button[i].disabled = true;
	array_range.disabled = true;
	time_range.disabled = true;
	generate_array.disabled = true;
}

function bar_update(effected_bar, height, color) {
	window.setTimeout(function () {
		effected_bar.style = 'background-color:' + color + ';height:' + height * 10 + 'px;';
	}, c_delay += delay_time);
}

function enable_other_events() {
	window.setTimeout(function () {
		for (let i = 0; i < algo_button.length; i++)
			algo_button[i].disabled = false;
		array_range.disabled = false;
		time_range.disabled = false;
		generate_array.disabled = false;

	}, c_delay += delay_time);
}

//..2
function run_algo() {
	disable_other_events();
	console.log(this.innerHTML);
	var algo = this.innerHTML;
	switch (algo) {
		case 'Bubble Sort': bubble(); break;
		case 'Selection Sort': selection(); break;
		case 'Heap Sort': heap(); break;
		case 'Merge Sort': merge(); break;
		case 'Insertion Sort': insertion(); break;
		case 'Quick Sort': quick(); break;
	}
}
//..2
function update_speed() {
	console.log(this.value);
	switch (parseInt(this.value)) {
		case 1: speed = 1; break;
		case 2: speed = 10; break;
		case 3: speed = 100; break;
		case 4: speed = 1000; break;
		case 5: speed = 10000; break;
	}
	delay_time = 10000 / (Math.floor(array_size / 10) * speed);
	console.log(delay_time);
}


time_range.addEventListener('input', update_speed);	


// Running particular algorithm
for (let i = 0; i < algo_button.length; i++)
	algo_button[i].addEventListener('click', run_algo);
