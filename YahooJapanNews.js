// ==UserScript==
// @name     Unnamed Script 641145
// @version  1
// @grant    none
// @match https://www.yahoo.co.jp/*
// ==/UserScript==

var topics = document.getElementById('topicsboxbd');
var recommend = document.getElementById('qurioRecommend');
var wrapper = document.getElementById('wrapper');

wrapper.innerHTML = '';

wrapper.appendChild(topics);
wrapper.appendChild(recommend);
