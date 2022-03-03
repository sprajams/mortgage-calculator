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

    // get values in number form for loan, rate, and length
    const p = parseFloat(document.getElementById("loan").value);
    const m = parseFloat(document.getElementById("rate").value) / 12 / 100;
    const n = document.getElementById("length").value * 12;

    //equation to get monthly mortgage
    const mortgage = p * ((m * Math.pow(1 + m, n)) / (Math.pow(1 + m, n) - 1));
    const roundMortgage = mortgage.toFixed(2);
    //add in monthly mortgage and make result visible
    document.querySelector(".resultInner__text--bold").innerHTML =
      ` $` + roundMortgage;
    document.querySelector(".resultInner").style.visibility = "visible";
  };
  form.addEventListener("submit", handleSubmit);
};

const mortgageForm = document.querySelector("#mortgageForm");
if (mortgageForm) {
  initForm(mortgageForm);
}
