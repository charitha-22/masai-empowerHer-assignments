import express from "express";
import boxen from "boxen"

const message = "I am using my first external module!";
const title = "Hurray!!!";

// 1️⃣ Classic (default style)
console.log(
  boxen(message, {
    title: title,
    padding: 1
  })
);

// 2️⃣ SingleDouble (mixed single & double borders)
console.log(
  boxen(message, {
    title: title,
    padding: 1,
    borderStyle: "singleDouble"
  })
);

// 3️⃣ Round (rounded corners)
console.log(
  boxen(message, {
    title: title,
    padding: 1,
    borderStyle: "round"
  })
);