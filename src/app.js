/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let icon = [
    '<i class="bi bi-emoji-smile"></i>',
    '<i class="bi bi-emoji-smile-fill"></i>'
  ];
  let who = ["the dog", "my granma", "his turtle", "my bird"];
  let what = ["eat", "pissed", "crushed", "broked"];
  let when = [
    "before the class",
    "right in time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];
  let why = ["hungry", "sleep", "boring", "fast"];

  let whoRandom = Math.floor(Math.random() * who.length);
  let whatRandom = Math.floor(Math.random() * what.length);
  let whenRandom = Math.floor(Math.random() * when.length);
  let whyRandom = Math.floor(Math.random() * why.length);
  let iconRandom = Math.floor(Math.random() * icon.length);

  let excuse =
    icon[iconRandom] +
    " " +
    who[whoRandom] +
    " " +
    what[whatRandom] +
    " " +
    when[whenRandom] +
    " " +
    why[whyRandom] +
    " " +
    icon[iconRandom];

  ///segunda parte

  let who1 = ["the dog", "my granma", "his turtle", "my bird"];
  let what1 = ["eat", "pissed", "crushed", "broked"];
  let when1 = [
    "before the class",
    "right in time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];
  let why1 = ["hungry", "sleep", "boring", "fast"];

  let whoRandom1 = Math.floor(Math.random() * who.length);
  let whatRandom1 = Math.floor(Math.random() * what.length);
  let whenRandom1 = Math.floor(Math.random() * when.length);
  let whyRandom1 = Math.floor(Math.random() * why.length);
  let excuse1 =
    who1[whoRandom1] +
    " " +
    what1[whatRandom1] +
    " " +
    when1[whenRandom1] +
    " " +
    why1[whyRandom1];

  document.querySelector("#excuse").innerHTML = excuse;
  document.querySelector("#excuse1").innerHTML = excuse1;

  console.log("Hello Rigo from the console!");
};
