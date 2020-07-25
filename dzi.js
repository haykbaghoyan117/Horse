let min = 9;
let m = 5;
let n = 3;
let x;
let y;
let noneWhiteKnight = document.getElementById('none1');
let n_white = '&#9822';
noneWhiteKnight.innerHTML = n_white;
let knight = noneWhiteKnight.innerHTML;
function openBorder(){
    let border = document.querySelector('.border');
    let kubik;
    let flag = true;
    for(let i=1; i<9; i++){
        for(let j=1; j<9; j++){
            if(j==1) flag = !flag;
            kubik = document.createElement('div');
            if (flag) kubik.className = 'kubik black';
            else kubik.className = 'kubik white';
            let w = i + ' ' + j;
            kubik.id = w;  
            border.appendChild(kubik);
            flag = !flag;
        }
    }
    border.children[34].innerHTML=n_white;
}
openBorder();

function moveKnight(){
    for(let i = 1; i < 9; i++){
        for(let j = 1; j < 9; j++){
            let p = 0;
            for(let i1 = 1; i1 < 9; i1++){
                for(let j1 = 1; j1 < 9; j1++){
                    let deltaI = Math.abs(i - i1);
                    let deltaJ = Math.abs(j - j1);
                    if(deltaI == 2 && deltaJ == 1 && document.getElementById(i1 + ' ' + j1).innerHTML != knight){
                        p++;
                    }else if(deltaJ == 2 && deltaI == 1 && document.getElementById(i1 + ' ' + j1).innerHTML != knight){
                        p++
                    }
                }
            }if(document.getElementById(i + ' ' + j).innerHTML != knight){
                document.getElementById(i + ' ' + j).innerHTML = p;
            }
        }
    }min = 9;
    for(let i = 1; i < 9; i++){
        for(let j = 1; j < 9; j++){
            let deltaI = Math.abs(i - m);
            let deltaJ = Math.abs(j - n);
            let insert = document.getElementById(i + ' ' + j).innerHTML;
            if(deltaI == 2 && deltaJ == 1 && insert != knight){
                if(insert * 1 < min){
                    min = insert * 1;
                    x = i;
                    y = j;
                }
            }else if(deltaI == 1 && deltaJ == 2 && insert != knight){
                if(insert * 1 < min){
                    min = insert * 1;
                    x = i;
                    y = j;
                }
            }
        }
    }
    m = x;
    n = y;
    document.getElementById(m + ' ' + n).innerHTML = knight;
    for(let i = 1; i < 9; i++){
        for(let j = 1; j < 9; j++){
            if(document.getElementById(i + ' ' + j).innerHTML != knight){
                document.getElementById(i + ' ' + j).innerHTML = '';
            }
        }
    }
}