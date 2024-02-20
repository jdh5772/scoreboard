let container = document.querySelector('.container');
let p1Point = 0;
let p2Point = 0;
let winpoint = document.querySelector('#select');

container.addEventListener('click',(e)=>{
    if(winpoint.value == p1Point || winpoint.value == p2Point){
        e.preventDefault();
    } else{
        if(e.target == document.querySelector('#player1')){
            p1Point +=1;
            document.querySelector('#p1point').innerHTML = p1Point;
        }
        if(e.target == document.querySelector('#player2')){
            p2Point +=1;
            document.querySelector('#p2point').innerHTML = p2Point;
        }
    }
    if(e.target == document.querySelector('#reset')){
        p1Point = 0;
        document.querySelector('#p1point').innerHTML = p1Point;
        p2Point = 0;
        document.querySelector('#p2point').innerHTML = p2Point;
        winpoint.value = 3;

    }
})