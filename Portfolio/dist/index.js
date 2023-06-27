const names = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const subject = document.getElementById('subject');
const message = document.getElementById('message');

const submit = document.getElementsByClassName('form-contact')[0];

submit.addEventListener('submit',(e)=>{
    e.preventDefault();
    console.log("clicked");

    let ebody = `
    <div style=""border: 1px solid black>${`&#xf2bb;`}
      <br>
      <b style="color:red">Name : </b>${names.value}
      <br>
      <b style="color:red">Email : </b>${email.value}
      <br>
      <b style="color:red">Phone : </b>${phone.value}
      <br>
      <br>
      <b style="color:red">Subject : </b>${subject.value}
      <br>
      <b style="color:red">Message : </b>${`&#xf107;`} <br/> ${message.value}    
    </div>`;

    Email.send({
        SecureToken : "0a2b6753-5060-442c-9149-66c9151bbcc4", 
        To : 'arpitnt10@gmail.com', 
        From : "arpittiwari.in237@gmail.com",
        Subject : "Alert ! A visitor reached out ~ Portfolio!",
        Body : ebody
    }).then(
      alert("Mail Sent to Arpit !")
    );
});

// RESUME DOWNLOAD
const downloadButton = document.getElementById('downloadButton');
downloadButton.addEventListener('click', function(event) {
  event.preventDefault(); 
  window.alert("Continue to Downloading Page.")

  const link = document.createElement('a');

  link.href = 'AT-Resume.pdf';

  link.setAttribute('download', 'AT-Resume.pdf');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});



const checkbox = document.getElementById('myCheckbox');
const dropdown = document.getElementById('dropdown1');

checkbox.addEventListener('change', function() {  
  // If the checkbox is checked
  if (checkbox.checked) {
    dropdown.style.display = "flex";
    dropdown.style.flexDirection = "column";
  } else {
    dropdown.style.display = "none";
  }
});
