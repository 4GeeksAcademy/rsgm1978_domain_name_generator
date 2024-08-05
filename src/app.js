/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
let pronun = ['the','our'];
let adj = ['great', 'big'];
let noun = [ 'jogger', 'racoon'];
let  TextForMap = ''
pronun((elementPronuon) =>{
  adj.map((elementAdj) =>{
    noun.map((elementNounNoun) =>{
      TextForMap +=
      <li class='list-group-item'>
        ${elementPronuon}${elementAdj}${elementNoun}.es
      </li>
    })
  })
}
)


document.querySelector (#for-map).innerHTML = TextForMap
  console.log("Hello Rigo from the console!");
};
