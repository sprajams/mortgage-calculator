// document.addEventListener("DOMContentLoaded", function () {
//   const initForm = (form) => {
//     const handleSubmit = (event) => {
//       event.preventDefault();
//       console.log("submit", event);
//     };
//     form.addEventListener("submit", handleSubmit);
//   };
//   const mortgageForm = document.querySelector("#mortgage-form");
//   if (mortgageForm) {
//     initForm(mortgageForm);
//   }
// });

const initForm = (form) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log("submit", event);

    // get values in number form for loan, rate, and length
    const p = parseFloat(document.getElementById("loan").value);
    const m = parseFloat(document.getElementById("rate").value) / 12 / 100;
    const n = document.getElementById("length").value * 12;

    //equation to get monthly mortgage
    const mortgage = p * ((m * Math.pow(1 + m, n)) / (Math.pow(1 + m, n) - 1));
    // console.log(p, m, n);
    // console.log(Math.pow(1 + m, n));
    // console.log(mortgage);
    const roundMortgage = Math.round(mortgage * 100) / 100;

    //add in monthly mortgage as a new element
    // const newDiv = document.createElement("div");
    const node = document.createTextNode(roundMortgage);
    console.log(node);
    // newDiv.appendChild(node);
    // document.getElementById("mortgage-form").appendChild(newDiv);
    document.querySelector(".result").style.visibility = "visible";
    document.querySelector(".result").appendChild(node);
  };
  form.addEventListener("submit", handleSubmit);
};

const mortgageForm = document.querySelector("#mortgage-form");
if (mortgageForm) {
  initForm(mortgageForm);
}
