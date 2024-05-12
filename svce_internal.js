let fat1 = document.getElementById('FAT1');
let fat2 = document.getElementById('FAT2');
let fat3 = document.getElementById('FAT3');
let A1 = document.getElementById('A1');
let A2 = document.getElementById('A2');
let A3 = document.getElementById('A3');
let display = document.getElementById('display');
let btn = document.getElementById('btn');
let qn = document.getElementById('question');
let aim = document.getElementById('guess');
let last = document.getElementById('last');
let find = document.getElementById('find');
let result = 0
btn.addEventListener("click",()=>
{
    let c1 = (0.7*(fat1.value) + 0.3*(A1.value))/3;
    //console.log(c1);
    let c2 = (0.7*(fat2.value) + 0.3*(A2.value))/3;
    let c3 = (0.7*(fat3.value) + 0.3*(A3.value))/3;
    let result1 = (c1 + c2 + c3)*0.8;
    result = Math.round(result1);
    display.innerHTML="Your internal mark is " + result;
    qn.style.display="flex";
    //console.log(result);
})
find.addEventListener('click',()=>
{
    let result4 = (aim.value - result) / 0.6;
    let result3 = Math.round(result4);
    if(result3<=100)
    {
        last.innerHTML="To get that mark you have to score atleast "+ result3 + " in end semester <br> All the best to acheive that total";
    }
    else
    {
        last.innerHTML="As your internal is very low you cant get that mark";
    }
        
})