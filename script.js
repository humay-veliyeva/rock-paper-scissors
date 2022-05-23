// const siyahi =[]
//  const telebeler =[{
//      ad:"Humay"
//     evlidirMi:false,
//      age:26
// },
 
 
//  "Aynur","Resul"]

//1ci sual const let block scope elementleridir VE YAXUDDA STATEMENTLER
// const let arasinda oxsar cehet her ikisini yeniden teyin etmek olmur(redeclare)
// const ve letin OXSAR  cehet:HER IKISINI YENIDEN TEYIN ETMEK OLMUR
// let forun iceisinde teyin olunur
// key acar sozdur ve hec bir zaman onu deyismek mumkun olmur//
const siyahi = ["paper.png","scissors.png","rock.png"]
const playAgain = document.getElementById("play-again");

// massivin uzunlugu onu teskil eden elementlerin sayidir
// massssivinAdi noqte lenght
// siyahi.lenght3
// sonuncu index tapilir:siyahi.lengt-1
// elementlerin HTMLde secilmesi DOM adlanir Dociment object model
 const k = document.getElementById('kagiz');
 const qayci = document.getElementById('qayci');
 const das = document.getElementById('das');
 const komputerSecim = document.getElementById("komputer-secim");
 const neticeDivi = document.querySelector("#netice");
//  hoisting 2ci interview suali...yuxardan asagi dogru oxunur // YARADILIB AMA DEFOLT OLUNMAYIB//
//  k.addEventListener('click,seciminiEt')
// diger proqramlasdirma dilleri buna icaze vermir yuxarda cagirib asagida yaratmaq
k.addEventListener('click',seciminiEt)
qayci.addEventListener('click',seciminiEt) 
das.addEventListener('click',seciminiEt)

 function seciminiEt() {
     const menimQerarim = this.dataset.id
     const komputerinQerari = randomSeciminiEt()
     let netice =''
 
     if(menimQerarim == komputerinQerari ){
    netice = 'Try again!'

     }

     if(menimQerarim == 1 && komputerinQerari == 1){
         netice = 'Try Again!'
     }

    else if(menimQerarim == 2 && komputerinQerari == 2){
        netice = 'Try Again!'

     }
     else if (menimQerarim == 0 && komputerinQerari == 1){
         netice = "You lose! Scissors cut paper" 

     }
     else if (komputerinQerari == 0 && menimQerarim == 2) {
        nectice = "You win! Kagiz dashi bukur"

    }
     else if (komputerinQerari == 1 && menimQerarim == 0) {
        netice = "You win! "
    }

    else if (komputerinQerari == 1 && menimQerarim == 2) {
        netice = "You lose! "
    }

    else if (komputerinQerari == 2 && menimQerarim == 0) {
        netice = "laptop win! "
    }
     else {
         netice ="You win!"
    //  netice.style.fontWeight = '700';
    //  netice.textContent = netice;
    //   setTimeout(function(){
    //     netice.textContent = ""
    //   },1000)
 
 }
      neticeDivi.innerText =  netice
}


function randomSeciminiEt (){
const  number = Math.round(Math.random()*2);
// komputerSecimImage.src = `./images${secimler[number]}`;
// komputerSecim.appendChild(komputerSecimImage);
// setTimeout(function(){
//     komputerSecimImage.remove();
// },1000)
komputerSecim.src =`./images/${siyahi[number]}`;
// return geriye qaytarmaq

return number;
}

// const preloader = document.getElementById("#preloader");
// window.addEventListener("load",()=> {
//     setTimeout(()=>{
//         preloader.style.display = 'none';
//     },1000)
// })







