//DOM 요소 생성 함수
/*
function domAdd() {
    console.log('domAdd');
} 옛날방법
*/
const domAdd = () => {
    console.log('domAdd');
    const btn1 = document.createElement("button");
    btn1.innerHTML = "버튼1";
    btn1.id = "bt1";
    btn1.className = "btc";

    document.getElementById("content").append(btn1);

    const btn2 = document.createElement("button");
    btn2.innerHTML = "버튼2";
    btn2.id = "bt2";
    btn2.className = "btc";

    document.getElementById("content").append(btn2);

    const btn3 = document.createElement("button");
    btn3.innerHTML = "버튼3";
    btn3.id = "bt3";
    btn3.className = "btc";

    document.getElementById("content").append(btn3);
}

// DOM 요소 접근
const domRead = () => {
    const btc = document.querySelectorAll(".btc");
    console.log(btc);

    //for 순회
    console.log("** for **")
    for(let i=0; i < btc.length; i++) {
        console.log(btc[i]);
    }

    //for ... in 순화 = 중간에 브레이크 불가능
    console.log("** for in **")
    for (let k in btc) {
        console.log(btc[k]);
    }

    //foreach 순회
    console.log("** for each **")
    btc.forEach((item, k) => console.log(item, k)) //k위치로 몇번쨰인지 인덱스 확인가능

    //for ... of 순회 = 중간에 브레이크 가능
    console.log("** for ... of **")
    for (let [k, item] of btc.entries()) {
        console.log(k, item.innerHTML);
        if ( k == 1 ) break;
    }
}


//click함수
const clickBtn = (div0, bt0) => {
    bt0.addEventListener("click", ()=>{
        div0.innerHTML = `<h1>${bt0.innerHTML}</h1>`;
        console.log(bt0.innerHTML);
    })
} 

//DOM 요소 수정
const domUpdate  = () => {
    const div1 = document.querySelector("#div1");
/*
    //div1.innerHTML = "요소를 수정하고 있습니다..";
    
    //함수 호출로 이벤트 달기
    const bti = document.querySelector("#bt1, #bt2, #bt3");

    clickBtn(div1, bt1);
    clickBtn(div1, bt2);
    clickBtn(div1, bt3);
        
*/

    const btc = document.querySelectorAll(".btc");
    console.log(btc)
    for (let bt of btc) {
        //console.log(bt)
        bt.addEventListener("click", ()=>{
            div1.innerHTML = `<h1>${bt.innerHTML}</h1>`;
           //console.log(bt.innerHTML);
        });
    }
}

// JavaScript 랜더링 제어
document.addEventListener("DOMContentLoaded", () => {
    //DOM 요소 생성
    domAdd();

    //DOM 요소 접근
    domRead();
    
    //DOM 요소 볁경
    domUpdate();

});
    //document.getElementById("idh1").innerHTML = "K-Digital"; //innerHtml 안에 링크같은거쓸수있는
