function selection() {
    c_delay = 0;
	var index_min;
	
    for (var i = 0; i < array_size - 1; i++) {
        bar_update(bar[i], bar_size[i], "red");//Color update

        index_min = i;

        for (var j = i + 1; j < array_size; j++) {
            bar_update(bar[j], bar_size[j], "yellow");//Color update

            if (bar_size[j] < bar_size[index_min]) {
                if (index_min != i) {
                    bar_update(bar[index_min], bar_size[index_min], "blue");//Color update
                }
                index_min = j;
                bar_update(bar[index_min], bar_size[index_min], "red");//Color update
            }
            else {
                bar_update(bar[j], bar_size[j], "blue");//Color update
            }
        }

        if (index_min != i) {
            var temp = bar_size[index_min];
            bar_size[index_min] = bar_size[i];
            bar_size[i] = temp;

            bar_update(bar[index_min], bar_size[index_min], "red");//Height update
            bar_update(bar[i], bar_size[i], "red");//Height update
            bar_update(bar[index_min], bar_size[index_min], "blue");//Color update
        }
        bar_update(bar[i], bar_size[i], "green");//Color update
    }
    bar_update(bar[i], bar_size[i], "green");//Color update

    enable_other_events();
}