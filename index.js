#!/usr/bin/env node
let now = new Date();
let annee   = now.getFullYear();
let mois    = now.getMonth() + 1;
let jour    = now.getDate();
let heure   = now.getHours();
let minute  = now.getMinutes();
let seconde = now.getSeconds();
console.log( "Nous sommes le "+jour+"/"+mois+"/"+annee+" et il est "+heure+" heure "+minute+" minutes "+seconde+" secondes" );
setInterval(new Date(), 1000, annee, mois, ...)
