var myGame={
    on:false,
    start:0,
    strict:false,
    arr:[],
    count:0,
    level:0,
    set_value:["green","red","blue","yellow"],
    set_start:["#297a33","#a5222d","#d8d63c","#234c8e"],
    set_blink:["#12ed71","#f41202","#fcf900","#0238fc"],
    play_over:false
}
function myFunction()
{
    myGame.on=document.getElementById("on").checked;
    myGame.strict=document.getElementById("strict").checked;
    if(myGame.on==true)
    {
        var col= random();
        myGame.arr.push(col);
        //console.log(myGame.arr);
        myGame.play_over=false;
        glow();
        myGame.count=myGame.arr.length;
        document.getElementById("count").innerHTML=myGame.count;
        //check();

    }
    else 
    {
        return;
    }   
}
function random()
{
    return Math.floor(Math.random() * 4);
}
function glow()
{
    for(let i=0;i<myGame.arr.length;i++)
    {
        //console.log(i);
        let simon=document.getElementById("simon"+myGame.arr[i]);
        let k=1000+(i*1000);
        console.log(k);
        setTimeout(function()
        {
            simon.style.background=myGame.set_blink[myGame.arr[i]];
            setTimeout(function() {
            simon.style.background=myGame.set_start[myGame.arr[i]];  
            
            },600 );
        if(i===myGame.arr.length-1)
            {
                console.log("it enters");
                check();      
            }
        }
            

        , k);
    }
}
function check()
{   //console.log(myGame.play_over);
    document.getElementById("simon0").addEventListener("click", checking);
    document.getElementById("simon1").addEventListener("click", checking);
    document.getElementById("simon2").addEventListener("click", checking);
    document.getElementById("simon3").addEventListener("click", checking);
    function checking()
    {

    }

}