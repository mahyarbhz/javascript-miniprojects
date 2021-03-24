let notSortedArray = [-2, 8, 5, 10, 30, 4, 1, 20, 1, 100, 5, 0, 100]
alert(notSortedArray)

function bubble(array) {
    for (i = 0; i < array.length; i++) {
        for (j = 0; j < array.length-i; j++) {
            if (array[j] > array[j+1]) {
                var bubble = array[j]
                array[j] = array[j+1]
                array[j+1] = bubble
            }
        }
    }
    return array
}
alert(bubble(notSortedArray))
