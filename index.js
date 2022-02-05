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
    console.log("submit", event);

    // get values in number form for loan, rate, and length
    const P = parseFloat(document.getElementById("loan").value);
    const ra = parseFloat(document.getElementById("rate").value);
    const n = document.getElementById("length").value * 12;

    //equation to get monthyl mortgage
    const mortgage = P * ((ra * (1 + ra)) ^ (n / ((1 + ra) ^ n) - 1));
    console.log(P, ra, n);
    console.log(mortgage);

    //add in monthly mortgage as a new element
    const newDiv = document.createElement("div");
    const node = document.createTextNode(
      "Your monthly mortgage will be $" + mortgage
    );
    newDiv.appendChild(node);
    document.getElementById("mortgage-form").appendChild(newDiv);
  };
  form.addEventListener("submit", handleSubmit);
};

const mortgageForm = document.querySelector("#mortgage-form");
if (mortgageForm) {
  initForm(mortgageForm);
}
