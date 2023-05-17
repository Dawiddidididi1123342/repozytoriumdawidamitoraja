let wlSlajdNumer=0;

let strzalkaL= document.querySelector(".strzalkaL");
let strzalkaP= document.querySelector(".strzalkaP");

let slajd0 = document.querySelector("#slajd0");
let slajd1 = document.querySelector("#slajd1");
let slajd2 = document.querySelector("#slajd2");

let ukryjAktywnySlajd=() => {
    let aktywnyElement= document.querySelector(".active");
    aktywnyElement.classList.remove("active");
};

let pokazSlajd=(nrSlajd) =>{
    ukryjAktywnySlajd();
    document.querySelector("#slajd"+ nrSlajd).classList.add("active");
};

let przesunP=()=>{
    if(wlSlajdNumer===2){
        wlSlajdNumer=0;
    }
    else{
        wlSlajdNumer=wlSlajdNumer+1;
    }
    pokazSlajd(wlSlajdNumer);

};
let przesunL=()=>{
    if(wlSlajdNumer===0){
        wlSlajdNumer=2;
    }
    else{
        wlSlajdNumer=wlSlajdNumer-1;
    }
    pokazSlajd(wlSlajdNumer);

};

let wlSlajd0 =()=>{
    wlSlajdNumer=0;
    pokazSlajd(0);
}
let wlSlajd1 =()=>{
    wlSlajdNumer=1;
    pokazSlajd(1);
}
let wlSlajd2 =()=>{
    wlSlajdNumer=2;
    pokazSlajd(2);
}
let wlSlajd3 =()=>{
    wlSlajdNumer=3;
    pokazSlajd(3);
}

strzalkaP.addEventListener("click", przesunP);
strzalkaL.addEventListener("click", przesunL);