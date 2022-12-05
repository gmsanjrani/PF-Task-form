const name = document.getElementById("name");
const DOB = document.getElementById("date-of-birth");
const startDate = document.getElementById("start-date").value;
const endDate = document.getElementById("end-date");
const file = document.getElementById("file");



endDate.addEventListener("change", () => {
  const startDate = document.getElementById("start-date").value;
  const endDate = document.getElementById("end-date").value;

  if (Date.parse(endDate) < Date.parse(startDate)) {
    alert("End date should be greater than Start date");
  }
});


file.onchange = function () {
  document.getElementById("file-name").textContent = this.files[0].name;
};



const submit = document.getElementById("submit");

submit.addEventListener("click", (e) => {
  e.preventDefault();
  let name = document.getElementById("name").value;
  let dateOfBirth = document.getElementById("date-of-birth").value;
  let startDate = document.getElementById("start-date").value;
  let endDate = document.getElementById("end-date").value;

  const formData = {
    name: "",
    dateOfBirth: null,
    startDate: null,
    endDate: null,
    fileName: null,
    };

  formData.name = name;
  formData.dateOfBirth = dateOfBirth;
  formData.startDate = startDate;
  formData.endDate = endDate;
  formData.fileName = document.getElementById("file-name").innerText

  localStorage.setItem("details", JSON.stringify(formData));

});
