// letters
const letters="abcdefghijklmnopqrstuvwxyz";

//get array from letters
let arrayletters=Array.from(letters);

document.querySelector(".game-name").innerHTML="hangman"
//select letter countainer
let lettercountainer=document.querySelector(".letters");
//generate letters
    arrayletters.forEach(letter => {
    // create span
    let span=document.createElement("span");
    //create letter text node
      let theletter=document.createTextNode(letter)
    //append the letter to span
     span.appendChild(theletter)
  //add claccname to span
    span.className="letter-box";
    //append span to lettercountainer
    lettercountainer.appendChild(span);
});

// object of word + category
 const words={
    programming:["php","javas cript","go","scale","fort ran","r","mysql","paython"],
    movies:["prestige","inception","parasite","interstellar","whiplash","memento","coco","up"],
    pepole:["albert einstein","hitchcock","alexander","cleopatra","mahtama ghandi"],
    countries:["syria","palestine","yamen","egypt","bahrain","qatar"],
 };



 let allkeys=Object.keys(words);
 let randompropnum=Math.floor(Math.random()*allkeys.length);
 let randompropname=allkeys[randompropnum];//get random property
 let  randompropvalue=words[randompropname];//get the value of property
 let randomvaluenum=Math.floor(Math.random()*randompropvalue.length);
 let randomvalval=randompropvalue[randomvaluenum];
 console.log( randompropvalue)
 console.log(randomvaluenum)
 console.log(randomvalval)
 document.querySelector(".category span").innerHTML=randompropname +" "+ randomvalval;

document.querySelector("title").innerHTML="HangMAn";

//letter guess countainer
let letterguesscountainer=document.querySelector(".letters-guess");

let arrayval=Array.from(randomvalval);
// console.log(arrayval);



arrayval.forEach(el=>{
  let spanval=document.createElement("span");
  if(el===" "){
    spanval.className="span-space";
  }
  
  letterguesscountainer.appendChild(spanval)
});

//addclass to the letter clicked

let wrong=0;
//get all span
let Guessspan=document.querySelectorAll(".letters-guess span");

document.addEventListener("click",(e)=>{
  let thestautes=false;
  if(e.target.className === "letter-box"){
    e.target.classList.add("clicked");
    let clickedletter=e.target.innerHTML.toLowerCase()

    let thechosen= Array.from(randomvalval);


    thechosen.forEach((wordlett,indexword)=>{

      if(clickedletter===wordlett){
        thestautes=true;
        
        //loop on all guess span
        Guessspan.forEach((span,sapnindex)=>{
          if(indexword===sapnindex){
            span.innerHTML=clickedletter;
          }
        });
      
        
      }
      
    })
 
    let drow=document.querySelector(".hangman-drow")
    if(thestautes!==true){
      wrong++;
      drow.classList.add(`wrong-${wrong}`);

      if(wrong>=6){

        // document.querySelector(".over span").innerHTML="gameover";
       lettercountainer.classList.add("finished");
       endGAme();
   
      }

    }

   
  }

 
  
});
function endGAme(){
  let div=document.createElement("div");
  div.className="lose";
  let divtext=document.createTextNode(`gameover,you lose the   ` );
  let span=document.createElement("span");
  let textsapn=document.createTextNode(`${randomvalval}`)
  span.appendChild(textsapn);
  
  div.appendChild(divtext);
  div.appendChild(span);
  document.body.appendChild(div);

}