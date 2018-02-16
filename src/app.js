import Rx from "rxjs/Rx";
import $ from "jquery";
var btn =$("#btn");
var input =$("#input");
const btnStream$=Rx.Observable.fromEvent(btn,'click');
btnStream$.subscribe(function(e){
    console.log(e.target.innerHTML);
    
})
const inputStream$=Rx.Observable.fromEvent(input,'keypress');
inputStream$.subscribe(function(e){
    console.log(e.currentTarget.value);
    
})
