const endDate = document.getElementById("end-date");

endDate.addEventListener("change", () => {
  const startDate = document.getElementById("start-date").value;
  const endDate = document.getElementById("end-date").value;
  let errorEndDate = document.getElementById("error-end-date")
  
  if (Date.parse(endDate) < Date.parse(startDate)) {
    alert("End date should be greater than Start date");
    errorEndDate.style.display="block"
  }
});


const file = document.getElementById("file");
file.onchange = function () {
  document.getElementById("file-name").textContent = this.files[0].name;
};




  let input = document.getElementById("file")
const link = document.getElementById('link');
let objectURL;

input.addEventListener('change', function () {
if (objectURL) {
  // revoke the old object url to avoid using more memory than needed
  URL.revokeObjectURL(objectURL);  
}

const file = this.files[0];
objectURL = URL.createObjectURL(file);

link.download = file.name; // this name is used when the user downloads the file
  link.href = objectURL;
  // link.click()
});






const submit = document.getElementById("submit");

submit.addEventListener("click", (e) => {
  e.preventDefault();
  let name = document.getElementById("name").value;
  let dateOfBirth = document.getElementById("date-of-birth").value;
  let startDate = document.getElementById("start-date").value;
  let endDate = document.getElementById("end-date").value;

 


  let errorName = document.getElementById("error-name")
  let errorDateOfBirth = document.getElementById("error-date-of-birth")
  let errorStartDate = document.getElementById("error-start-date")
  let errorEndDate = document.getElementById("error-end-date")

  if (!name) {
    errorName.style.display="block"
  }
  else {
    errorName.style.display ="none"
  }

  if (!dateOfBirth) {
    errorDateOfBirth.style.display="block"
  }
  else {
    errorDateOfBirth.style.display ="none"
  }

  if (!startDate) {
    errorStartDate.style.display="block"
  }
  else {
    errorStartDate.style.display ="none"
  }

  if (!endDate) {
    errorEndDate.style.display="block"
  }
  else {
    errorEndDate.style.display ="none"
  }


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

  if (name && startDate && endDate && dateOfBirth) {
    alert("your Data is Saved to LocalStorage")
  localStorage.setItem("details", JSON.stringify(formData));
  }
  

});
