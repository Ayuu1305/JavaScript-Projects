const baseurl =
  "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

const dropDown = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");

window.addEventListener("load", () => {
  updateval();
});

let i = 0;
for (let select of dropDown) {
  for (currcode in countryList) {
    let newOption = document.createElement("option");
    newOption.innerHTML = currcode;
    newOption.value = currcode;
    if (select.name === "from" && currcode === "USD") {
      newOption.selected = "selected";
    } else if (select.name === "to" && currcode === "INR") {
      newOption.selected = "selected";
    }
    select.append(newOption);
  }
  select.addEventListener("change", (e) => {
    updateflag(e.target);
  });
}

const updateflag = (element) => {
  let currcode = element.value;
  let countrycode = countryList[currcode];
  let newsrc = `https://flagsapi.com/${countrycode}/flat/64.png`;
  let img = element.parentElement.querySelector("img");
  img.src = newsrc;
};

btn.addEventListener("click", (e) => {
  e.preventDefault();
  updateval();
});

const updateval = async () => {
  let amount = document.querySelector(".amount input");
  let amtval = amount.value;
  if (amtval === "" || amtval < 1) {
    amtval = 1;
    amount.value = "1";
  }
  const url = `${baseurl}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;
  let response = await fetch(url);
  let data = await response.json();
  let rate = data[toCurr.value.toLowerCase()];
  let finalAmount = amtval * rate;
  msg.innerText = `${amtval} ${fromCurr.value}= ${finalAmount} ${toCurr.value} `;
};
