document.addEventListener("DOMContentLoaded", function () {
  const initForm = (form) => {
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log("submit", event);
    };
    form.addEventListener("submit", handleSubmit);
  };
  const mortgageForm = document.querySelector("#mortgage-form");
  if (mortgageForm) {
    initForm(mortgageForm);
  }
});
