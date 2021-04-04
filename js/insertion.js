function insertion() {
    c_delay = 0;

    for (var j = 0; j < array_size; j++) {
        bar_update(bar[j], bar_size[j], "yellow");//Color update

        var key = bar_size[j];
        var i = j - 1;
        while (i >= 0 && bar_size[i] > key) {
            bar_update(bar[i], bar_size[i], "red");//Color update
            bar_update(bar[i + 1], bar_size[i + 1], "red");//Color update

            bar_size[i + 1] = bar_size[i];

            bar_update(bar[i], bar_size[i], "red");//Height update
            bar_update(bar[i + 1], bar_size[i + 1], "red");//Height update

            bar_update(bar[i], bar_size[i], "blue");//Color update
            if (i == (j - 1)) {
                bar_update(bar[i + 1], bar_size[i + 1], "yellow");//Color update
            }
            else {
                bar_update(bar[i + 1], bar_size[i + 1], "blue");//Color update
            }
            i -= 1;
        }
        bar_size[i + 1] = key;

        for (var t = 0; t < j; t++) {
            bar_update(bar[t], bar_size[t], "green");//Color update
        }
    }
    bar_update(bar[j - 1], bar_size[j - 1], "green");//Color update

    enable_other_events();
}