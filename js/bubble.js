function bubble() {
	c_delay = 0;

	for (var i = 0; i < array_size - 1; i++) {
		for (var j = 0; j < array_size - i - 1; j++) {
			bar_update(bar[j], bar_size[j], "yellow");//Color update

			if (bar_size[j] > bar_size[j + 1]) {
				bar_update(bar_size[j], bar_size[j], "red");//Color update
				bar_update(bar_size[j + 1], bar_size[j + 1], "red");//Color update

				var temp = bar_size[j];
				bar_size[j] = bar_size[j + 1];
				bar_size[j + 1] = temp;

				bar_update(bar[j], bar_size[j], "red");//Height update
				bar_update(bar[j + 1], bar_size[j + 1], "red");//Height update
			}
			bar_update(bar[j], bar_size[j], "blue");//Color updat
		}
		bar_update(bar[j], bar_size[j], "green");//Color update
	}
	bar_update(bar[0], bar_size[0], "green");//Color update

	enable_other_events();
}
