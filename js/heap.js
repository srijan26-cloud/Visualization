function heap() {
    c_delay = 0;

    heap_sort();

    enable_other_events();
}

function swap(i, j) {
    bar_update(bar[i], bar_size[i], "red");//Color update
    bar_update(bar[j], bar_size[j], "red");//Color update

    var temp = bar_size[i];
    bar_size[i] = bar_size[j];
    bar_size[j] = temp;

    bar_update(bar[i], bar_size[i], "red");//Height update
    bar_update(bar[j], bar_size[j], "red");//Height update

    bar_update(bar[i], bar_size[i], "blue");//Color update
    bar_update(bar[j], bar_size[j], "blue");//Color update
}

function max_heapify(n, i) {
    var largest = i;
    var l = 2 * i + 1;
    var r = 2 * i + 2;

    if (l < n && bar_size[l] > bar_size[largest]) {
        if (largest != i) {
            bar_update(bar[largest], bar_size[largest], "blue");//Color update
        }

        largest = l;

        bar_update(bar[largest], bar_size[largest], "red");//Color update
    }

    if (r < n && bar_size[r] > bar_size[largest]) {
        if (largest != i) {
            bar_update(bar[largest], bar_size[largest], "blue");//Color update
        }

        largest = r;

        bar_update(bar[largest], bar_size[largest], "red");//Color update
    }

    if (largest != i) {
        swap(i, largest);

        max_heapify(n, largest);
    }
}

function heap_sort() {
    for (var i = Math.floor(array_size / 2) - 1; i >= 0; i--) {
        max_heapify(array_size, i);
    }

    for (var i = array_size - 1; i > 0; i--) {
        swap(0, i);
        bar_update(bar[i], bar_size[i], "green");//Color update
        bar_update(bar[i], bar_size[i], "yellow");//Color update

        max_heapify(i, 0);

        bar_update(bar[i], bar_size[i], "blue");//Color update
        bar_update(bar[i], bar_size[i], "green");//Color update
    }
    bar_update(bar[i], bar_size[i], "green");//Color update
}