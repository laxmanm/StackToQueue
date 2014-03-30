/*
Program to convert the stack array into queue
Uses two arrays ,  arr_stack is popped and the items are pushed in converted_queue
converted_queue can be popped to get the functionality of queue. i.e FIFO
*/

var arr_stack = ["Banana", "Orange", "Apple", "Mango"];
console.log("stack array display : "+arr_stack);
var popped_queueItem = popQueue(arr_stack);
console.log("Queue popped  : "+popped_queueItem);

function popQueue(arr_stack){
	var converted_queue =  [];
	var arr_length = arr_stack.length;
	for(var i=0; i<arr_length; i++){
	  var poppedItem = arr_stack.pop();
	  console.log("poppedItem : " +poppedItem);
	  converted_queue.push(poppedItem);
	}
	return (converted_queue.pop());
}