//const showDice = () => {
//    const n = Math.floor(Math.random() * 6 ) + 1;
//    const s1 = document.querySelector("#s1");

//    s1.innerHTML = `<img src= "./images/${n}.png" />`;

//}

//전역 변수
let n;

//요소 보이기 함수
const show = (dspS1, dspS2, dspS3, dspBt1, dspBt2) => {
    const s1 = document.querySelector("#s1");
    const s2 = document.querySelector("#s2");
    const s3 = document.querySelector("#s3");
    const bt1 = document.querySelector("#bt1");
    const bt2 = document.querySelector("#bt2");

    s1.style.display = dspS1;
    s2.style.display = dspS2;
    s3.style.display = dspS3;
    bt1.style.display = dspBt1;
    bt2.style.display = dspBt2;
}

//클릭시
const domUpdate  = () => {
    const sh = document.querySelector("#s1, #s4");

    //div1.innerHTML = "요소를 수정하고 있습니다..";
    
    //함수 호출로 이벤트 달기
    const bti = document.querySelector("#bt1, #bt2");

    clickBtn(sh, bt1);
    clickBtn(sh, bt2);

}

// 주사위 번호 선택
const showDice = () => {
    n = Math.floor(Math.random() * 6 ) + 1;
    console.log(n)
    show("none", "block", "none", "none", "block");

}


// 주사위 번호 결과 확인
const showOk = () => {
    const radios = document.querySelectorAll("input[type = radio]");
    let usern;
    // 사용자가 선택한 숫자
    for (let r of radios){
        if (r.checked) {
            //숫자로 이루어진 값을 문자열을 숫자로 변환
            usern = parseInt(r.value);
            break;
        }
    }
    console.log(n, usern);
    let tag;
    //비교 연산자 === : == 와 비교
    if(n === usern) { // 자바 스크립트에만 있는 연산자 === <- 이거 
        tag = "o";
    }else {
        tag = "x";
    }
    document.querySelector("form").reset();

    document.querySelector('#s1').innerHTML = `<img src= "./images/${n}.png">`;
    document.querySelector('#s3').innerHTML = `<img src= "./images/${tag}.png">`;
    show("block", "none", "block", "block", "none");
}

// OX 확인
//const showOx = () => {
//    const n = Math.floor(Math.random() * 6 ) + 1;
//    const s3 = document.querySelector("#s1");

//    s3.innerHTML = `<img src= "./images/png"${n}. />`;
//}

//DOM 로드가 된 후
document.addEventListener("DOMContentLoaded", ()=>{
   show("none", "none", "none", "block", "none");
});