const sayi=document.querySelector(".sayi");
 Birimden=document.querySelector(".Birimden"),
 Birime=document.querySelector(".Birime"),
 sonuc=document.querySelector(".sonuc");
 

let sayiDgr,brmdnDgr,brmDgr,sonucDgr;

sayi.addEventListener("keyup",Çevir);
Birimden.addEventListener("change",Çevir);
Birime.addEventListener("change",Çevir);





function Çevir(){
    sayiDgr=sayi.value;
    brmdnDgr=Birimden.value;
    brmDgr=Birime.value;
    
    if(brmdnDgr==="metre"&&brmDgr==="kilometre"){
        sonuc.textContent=Number(sayiDgr)*0.001;
    console.log(Number(sayiDgr)*0.001); 
    }
    if(brmdnDgr==="metre"&&brmDgr==="santimetre"){
        sonuc.textContent=Number(sayiDgr)*100;
    }
    if(brmdnDgr==="metre"&&brmDgr==="metre"){
        sonuc.textContent=sayiDgr;
    }


    if(brmdnDgr==="kilometre"&&brmDgr==="metre"){
        sonuc.textContent=Number(sayiDgr)*1000;
    }
    if(brmdnDgr==="kilometre"&&brmDgr==="santimetre"){
        sonuc.textContent=Number(sayiDgr)*10000;
    }
    if(brmdnDgr==="kilometre"&&brmDgr==="kilometre"){
        sonuc.textContent=sayiDgr;
    }
  

    if(brmdnDgr==="santimetre"&&brmDgr==="kilometre"){
        sonuc.textContent=Number(sayiDgr)*0.00001;
    }
    if(brmdnDgr==="santimetre"&&brmDgr==="metre"){
        sonuc.textContent=Number(sayiDgr)*0.01;
    }
    if(brmdnDgr==="santimetre"&&brmDgr==="santimetre"){
        sonuc.textContent=sayiDgr;
    }
   

    if(brmdnDgr==="milimetre"&&brmDgr==="kilometre"){
        sonuc.textContent=Number(sayiDgr)*0.000001;
    }
    if(brmdnDgr==="milimetre"&&brmDgr==="metre"){
        sonuc.textContent=Number(sayiDgr)*0.001;
    }
      
}
