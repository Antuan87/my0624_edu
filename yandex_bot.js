// ==UserScript==
// @name         yandex_bot
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://yandex.ru/*
// @grant        none
// ==/UserScript==

let keywords = ["Гобой","Как звучит флейта","Тромбон","Что такое валторна","Фагот","Скрипка","Виолончель"];
let keyword = keywords[getRandom(0,keywords.length)];
let button = document.getElementsByClassName("button__text")[1];

function getRandom(min,max){
	return Math.floor(Math.random()*(max-min)+min);
}

function writeKeyword(word){
	let i=0;
	let timerId = setInterval(()=>{
		document.getElementsByName("text")[0].value+=word[i];
		i++;
		if(i==word.length){
			clearInterval(timerId);
			button.click();
		}
	},1000);
}

if(button != undefined){
    writeKeyword(keyword);
}else{
    let links = document.links;
    for(let i=0;i<links.length;i++){
        if(links[i].href.indexOf("xn----7sbab5aqcbiddtdj1e1g.xn--p1ai") !=-1) {
            links[i].target="_self";
            links[i].click();
            break;
        }
    }
}

