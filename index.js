function moveImage(imgNum){
    switch(imgNum){
        case 1:
            if(freePos[2] == true){
                img2.children[0].src = img1.children[0].src;
                img1.children[0].src = 'images/img9.jpg'; 

                freePos[2] = false;
                freePos[1] = true;
            }else if(freePos[4] == true){
                img4.children[0].src = img1.children[0].src;
                img1.children[0].src = 'images/img9.jpg'; 

                freePos[4] = false;
                freePos[1] = true;
            }

            break;

        case 2:
            if(freePos[1] == true){
                img1.children[0].src = img2.children[0].src;
                img2.children[0].src = 'images/img9.jpg'; 

                freePos[1] = false;
                freePos[2] = true;
            }else if(freePos[3] == true){
                img3.children[0].src = img2.children[0].src;
                img2.children[0].src = 'images/img9.jpg'; 

                freePos[3] = false;
                freePos[2] = true;
            }else if(freePos[5] == true){
                img5.children[0].src = img2.children[0].src;
                img2.children[0].src = 'images/img9.jpg';

                freePos[5] = false;
                freePos[2] = true;
            }

            break;

        case 3:
            if(freePos[2] == true){
                img2.children[0].src = img3.children[0].src;
                img3.children[0].src = 'images/img9.jpg'; 

                freePos[2] = false;
                freePos[3] = true;
            }else if(freePos[6] == true){
                img6.children[0].src = img3.children[0].src;
                img3.children[0].src = 'images/img9.jpg'; 

                freePos[6] = false;
                freePos[3] = true;
            }

            break;

        case 4:
            if(freePos[1] == true){
                img1.children[0].src = img4.children[0].src;
                img4.children[0].src = 'images/img9.jpg'; 

                freePos[1] = false;
                freePos[4] = true;
            }else if(freePos[5] == true){
                img5.children[0].src = img4.children[0].src;
                img4.children[0].src = 'images/img9.jpg'; 

                freePos[5] = false;
                freePos[4] = true;
            }else if(freePos[7] == true){
                img7.children[0].src = img4.children[0].src;
                img4.children[0].src = 'images/img9.jpg';

                freePos[7] = false;
                freePos[4] = true;
            }

            break;

        case 5:
            if(freePos[2] == true){
                img2.children[0].src = img5.children[0].src;
                img5.children[0].src = 'images/img9.jpg'; 

                freePos[2] = false;
                freePos[5] = true;
            }else if(freePos[4] == true){
                img4.children[0].src = img5.children[0].src;
                img5.children[0].src = 'images/img9.jpg'; 

                freePos[4] = false;
                freePos[5] = true;
            }else if(freePos[6] == true){
                img6.children[0].src = img5.children[0].src;
                img5.children[0].src = 'images/img9.jpg';

                freePos[6] = false;
                freePos[5] = true;
            }else if(freePos[8] == true){
                img8.children[0].src = img5.children[0].src;
                img5.children[0].src = 'images/img9.jpg';

                freePos[8] = false;
                freePos[5] = true;
            }

            break;

        case 6:
            if(freePos[3] == true){
                img3.children[0].src = img6.children[0].src;
                img6.children[0].src = 'images/img9.jpg'; 

                freePos[3] = false;
                freePos[6] = true;
            }else if(freePos[5] == true){
                img5.children[0].src = img6.children[0].src;
                img6.children[0].src = 'images/img9.jpg'; 

                freePos[5] = false;
                freePos[6] = true;
            }else if(freePos[9] == true){
                img9.children[0].src = img6.children[0].src;
                img6.children[0].src = 'images/img9.jpg';

                freePos[9] = false;
                freePos[6] = true;
            }

            break;

        case 7:
            if(freePos[4] == true){
                img4.children[0].src = img7.children[0].src;
                img7.children[0].src = 'images/img9.jpg'; 

                freePos[4] = false;
                freePos[7] = true;
            }else if(freePos[8] == true){
                img8.children[0].src = img7.children[0].src;
                img7.children[0].src = 'images/img9.jpg'; 

                freePos[8] = false;
                freePos[7] = true;
            }

            break;

        case 8:
            if(freePos[7] == true){
                img7.children[0].src = img8.children[0].src;
                img8.children[0].src = 'images/img9.jpg'; 

                freePos[7] = false;
                freePos[8] = true;
            }else if(freePos[5] == true){
                img5.children[0].src = img8.children[0].src;
                img8.children[0].src = 'images/img9.jpg'; 

                freePos[5] = false;
                freePos[8] = true;
            }else if(freePos[9] == true){
                img9.children[0].src = img8.children[0].src;
                img8.children[0].src = 'images/img9.jpg';

                freePos[9] = false;
                freePos[8] = true;
            }

            break;

        case 9:
            if(freePos[6] == true){
                img6.children[0].src = img9.children[0].src;
                img9.children[0].src = 'images/img9.jpg'; 

                freePos[6] = false;
                freePos[9] = true;
            }else if(freePos[8] == true){
                img8.children[0].src = img9.children[0].src;
                img9.children[0].src = 'images/img9.jpg'; 

                freePos[8] = false;
                freePos[9] = true;
            }

            break;
    }

    let res = setTimeout(() => {
        if(isCompleted() == true){
            alert("You have solved the puzzle successfully...");
        }
    }, 100)
}

function findVal(randomState, val){
    if(val == 10){
        return true;
    }

    for(var i=0 ; i<randomState.length ; i++){
        if(randomState[i] == val){
            return true;
        }
    }

    return false;
}

function isCompleted(){
    let won = true;

    let str1 = img1.children[0].src;
    let str2 = img2.children[0].src;
    let str3 = img3.children[0].src;
    let str4 = img4.children[0].src;
    let str5 = img5.children[0].src;
    let str6 = img6.children[0].src;
    let str7 = img7.children[0].src;
    let str8 = img8.children[0].src;
    let str9 = img9.children[0].src;


    if(str1.substring(str1.length-15, str1.length) != 'images/img1.jpg'){
        won = false;
    }
    if(str2.substring(str2.length-15, str2.length) != 'images/img2.jpg'){
        won = false;
    }
    if(str3.substring(str3.length-15, str3.length) != 'images/img3.jpg'){
        won = false;
    }
    if(str4.substring(str4.length-15, str4.length) != 'images/img4.jpg'){
        won = false;
    }
    if(str5.substring(str5.length-15, str5.length) != 'images/img5.jpg'){
        won = false;
    }
    if(str6.substring(str6.length-15, str6.length) != 'images/img6.jpg'){
        won = false;
    }
    if(str7.substring(str7.length-15, str7.length) != 'images/img7.jpg'){
        won = false;
    }
    if(str8.substring(str8.length-15, str8.length) != 'images/img8.jpg'){
        won = false;
    }
    if(str9.substring(str9.length-15, str9.length) != 'images/img9.jpg'){
        won = false;
    }

    return won;
}

var img1 = document.getElementById('1');
var img2 = document.getElementById('2');
var img3 = document.getElementById('3');
var img4 = document.getElementById('4');
var img5 = document.getElementById('5');
var img6 = document.getElementById('6');
var img7 = document.getElementById('7');
var img8 = document.getElementById('8');
var img9 = document.getElementById('9');
var hint = document.getElementById('hint');
var freePos = {};
var hintEnable = false;
var state = {};

img1.children[0].addEventListener('click', () => moveImage(1));
img2.children[0].addEventListener('click', () => moveImage(2));
img3.children[0].addEventListener('click', () => moveImage(3));
img4.children[0].addEventListener('click', () => moveImage(4));
img5.children[0].addEventListener('click', () => moveImage(5));
img6.children[0].addEventListener('click', () => moveImage(6));
img7.children[0].addEventListener('click', () => moveImage(7));
img8.children[0].addEventListener('click', () => moveImage(8));
img9.children[0].addEventListener('click', () => moveImage(9));

hint.addEventListener('click', () => {
    if(hintEnable == true){
        img1.children[0].src = state[1];
        img2.children[0].src = state[2];
        img3.children[0].src = state[3];
        img4.children[0].src = state[4];
        img5.children[0].src = state[5];
        img6.children[0].src = state[6];
        img7.children[0].src = state[7];
        img8.children[0].src = state[8];
        img9.children[0].src = state[9];

        hint.innerHTML = 'Show hint';
    }else{
        state[1] = img1.children[0].src;
        state[2] = img2.children[0].src;
        state[3] = img3.children[0].src;
        state[4] = img4.children[0].src;
        state[5] = img5.children[0].src;
        state[6] = img6.children[0].src;
        state[7] = img7.children[0].src;
        state[8] = img8.children[0].src;
        state[9] = img9.children[0].src;

        img1.children[0].src = 'images/img1.jpg';
        img2.children[0].src = 'images/img2.jpg';
        img3.children[0].src = 'images/img3.jpg';
        img4.children[0].src = 'images/img4.jpg';
        img5.children[0].src = 'images/img5.jpg';
        img6.children[0].src = 'images/img6.jpg';
        img7.children[0].src = 'images/img7.jpg';
        img8.children[0].src = 'images/img8.jpg';
        img9.children[0].src = 'images/img9.jpg';

        hint.innerHTML = 'Hide hint';
    }

    hintEnable = !hintEnable;
});

var randomState = [];

while(randomState.length < 9){
    let val = Math.floor((Math.random()*10)+1);

    if(findVal(randomState, val) == false){
        randomState.push(val);
    }
}

img1.children[0].src = 'images/img' + randomState[0] + '.jpg';
img2.children[0].src = 'images/img' + randomState[1] + '.jpg';
img3.children[0].src = 'images/img' + randomState[2] + '.jpg';
img4.children[0].src = 'images/img' + randomState[3] + '.jpg';
img5.children[0].src = 'images/img' + randomState[4] + '.jpg';
img6.children[0].src = 'images/img' + randomState[5] + '.jpg';
img7.children[0].src = 'images/img' + randomState[6] + '.jpg';
img8.children[0].src = 'images/img' + randomState[7] + '.jpg';
img9.children[0].src = 'images/img' + randomState[8] + '.jpg';

for(var i=0 ; i<9 ; i++){
    if(randomState[i] == 9){
        freePos[i+1] = true;
    }else{
        freePos[i+1] = false;
    }
}