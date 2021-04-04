function quick() {
    c_delay = 0;

    quick_sort(0, array_size - 1);

    enable_other_events();
}

function quick_partition(start, end) {
    var i = start + 1;
    var piv = bar_size[start];//make the first element as pivot element.
    bar_update(bar[start], bar_size[start], "yellow");//Color update

    for (var j = start + 1; j <= end; j++) {
        //re-arrange the array by putting elements which are less than pivot on one side and which are greater that on other.
        if (bar_size[j] < piv) {
            bar_update(bar[j], bar_size[j], "yellow");//Color update

            bar_update(bar[i], bar_size[i], "red");//Color update
            bar_update(bar[j], bar_size[j], "red");//Color update

            var temp = bar_size[i];
            bar_size[i] = bar_size[j];
            bar_size[j] = temp;

            bar_update(bar[i], bar_size[i], "red");//Height update
            bar_update(bar[j], bar_size[j], "red");//Height update

            bar_update(bar[i], bar_size[i], "blue");//Height update
            bar_update(bar[j], bar_size[j], "blue");//Height update

            i += 1;
        }
    }
    bar_update(bar[start], bar_size[start], "red");//Color update
    bar_update(bar[i - 1], bar_size[i - 1], "red");//Color update

    var temp = bar_size[start];//put the pivot element in its proper place.
    bar_size[start] = bar_size[i - 1];
    bar_size[i - 1] = temp;

    bar_update(bar[start], bar_size[start], "red");//Height update
    bar_update(bar[i - 1], bar_size[i - 1], "red");//Height update

    for (var t = start; t <= i; t++) {
        bar_update(bar[t], bar_size[t], "green");//Color update
    }

    return i - 1;//return the position of the pivot
}

function quick_sort(start, end) {
    if (start < end) {
        //stores the position of pivot element
        var piv_pos = quick_partition(start, end);
        quick_sort(start, piv_pos - 1);//sorts the left side of pivot.
        quick_sort(piv_pos + 1, end);//sorts the right side of pivot.
    }
}