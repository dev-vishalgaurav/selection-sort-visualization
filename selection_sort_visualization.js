
var FIX_MARGIN_TOP = 20;

var displayArray = function(array,startX,startY,canvasX,canvasY,stepHeight) {
    textFont(createFont("monospace"), 12);
    fill(255, 0, 0);
    var cellMargin = 1;
    var cellWidth = canvasX/array.length;
    for(var index = 0 ; index < array.length ; index++){
        text(array[index],startX+index*cellWidth,startY + FIX_MARGIN_TOP+stepHeight);
    }
};

var drawLine = function(array,startX,startY,canvasX,canvasY,stepHeight,minIndex,index){
    var cellWidth = canvasX/array.length;
    var firstY = FIX_MARGIN_TOP + stepHeight * index;
    stepHeight = stepHeight * (index + 1);
    line(startX + minIndex*cellWidth , startY + firstY, startX + index*cellWidth,startY + FIX_MARGIN_TOP + stepHeight);
};

var swap = function(array, firstIndex, secondIndex) {
    var temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
};

var indexOfMinimum = function(array, startIndex) {
    var minValue = array[startIndex];
    var minIndex = startIndex;
    for(var i = minIndex + 1; i < array.length; i++) {
        if(array[i] < minValue) {
            minIndex = i;
            minValue = array[i];
        }
    } 
    return minIndex;
}; 

var selectionSort = function(array,startX,startY,displayWidth,displayHeight) {
    var cellHeight = displayHeight / array.length;
    var rowGap = 24;
    displayArray(array,startX,startY,displayWidth,displayHeight, 0);
    for(var index = 0 ; index < array.length ; index++){
        var minIndex = indexOfMinimum(array,index);
        swap(array,index,minIndex);
        displayArray(array,startX,startY,displayWidth,displayHeight, rowGap*(index + 1));
        drawLine(array,startX,startY,displayWidth,displayHeight,rowGap,minIndex,index);
    }
};

/* testing code */
var array = [22,11,99,88, 9];
array = selectionSort(array,0,0,width/2,height/2);

var array1 = [5,4,3,2,1];
array1 = selectionSort(array1,width/2,0,width/2,height/2);

var array2 = [10,9,8,7,6];
array2 = selectionSort(array2,0,height/2,width/2,height/2);

var array3 = [10,9,8,7,6];
array3 = selectionSort(array3,width/2,height/2,width/2,height/2);

stroke(0, 255, 0);
strokeWeight(2);
line(width/2 - 10,0,width/2 - 10,height);
line(0 ,height/2,width,height/2);
