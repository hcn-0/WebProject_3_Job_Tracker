// counter

const total = document.getElementById("total");
const interview = document.getElementById("interview");
const rejected = document.getElementById("rejected");

let interviewList = [];
let rejectedList = [];

function counter() {
  const allCards = document.getElementById("allcards");
  total.innerText = allCards.children.length;
  interview.innerText = interviewList.length;
  rejected.innerText = rejectedList.length;
}

//toggoling
const allBtn = document.getElementById("all-btn");
const interviewBtn = document.getElementById("interview-btn");
const rejectedBtn = document.getElementById("rejected-btn");

const allCards = document.getElementById("allcards");
const interviewCards = document.getElementById("interview-cards");
const rejectedCards = document.getElementById("rejected-cards");

function toggle(id) {
  allBtn.classList.remove("btn-primary");
  interviewBtn.classList.remove("btn-primary");
  rejectedBtn.classList.remove("btn-primary");

  const selected = document.getElementById(id);

  selected.classList.add("btn-primary");

  allCards.style.display = "none";
  interviewCards.style.display = "none";
  rejectedCards.style.display = "none";

  if (id == "all-btn") {
    allCards.style.display = "block";
  } else if (id == "interview-btn") {
    interviewCards.style.display = "block";
  } else if (id == "rejected-btn") {
    rejectedCards.style.display = "block";
  }
}

counter();
