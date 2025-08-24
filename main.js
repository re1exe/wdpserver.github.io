const password = "Meow"

let pw = false

const askPassword = () => {
  const pass = prompt("Enter Password:");
  if (pass === password) {
    alert("Access Granted")
  } else {
    window.location.href = "https://www.google.com"
  }
};


if (pw == true) {
  window.onload = askPassword;
} else {
  console.log('Password disabled')
}

document.addEventListener("DOMContentLoaded", function () {
    console.log("✅ Page loaded!");
});

function ScrollTo(scrollId) {
  console.log(`Trying to scroll to: ${scrollId}`);
  const element = document.getElementById(scrollId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
    console.log('Scroll triggered!');
  } else {
    console.warn(`Element with id "${scrollId}" not found.`);
  }
}

function ipcopy() {
  document.getElementById("ip").oncopy("play.wdpserver.com")
}


function redirectTo(redirectLink) {
  console.log("Trying to redirect")
  window.open(redirectLink, "_blank")
}

const INVITE_CODE = "QuTVx7dTWS"; 

fetch(`https://discord.com/api/v9/invites/${INVITE_CODE}?with_counts=true`)
  .then(res => res.json())
  .then(data => {
    const total = data.approximate_member_count;
    const online = data.approximate_presence_count;
    document.getElementById("count").textContent = `${total} Members (${online} Online)`;
  })
  .catch(() => {
    document.getElementById("count").textContent = `Unavailable`;
  });

  function copyToClipboard() {
  const input = document.getElementById("copyText");
  input.select();
  input.setSelectionRange(0, 99999);
  document.execCommand("copy");

  alert("Copied to clipboard!");
}



    document.addEventListener("DOMContentLoaded", () => {
  fetch("staff.json")
    .then(response => response.json())
    .then(admins => {
      const placeholder = document.getElementById("staffMembers");
      let out = "";

      for (let staff of admins.slice(0, 6)) {
        out += `
          <div class="staff">
          <img src="${staff.Profile}" alt="Profile">
            <h1>${staff.Name}</h4>
            <h4>${staff.Description}</h4>
            <p>${staff.Role}</p>
            <p>${staff.Discord}</p>
            <p>${staff.Socials}</p>
            </div>
        `;
      }

      placeholder.innerHTML = out;
    })
    .catch(error => console.error("Error fetching staff content", error));
});



const Year = new Date().getFullYear()

document.getElementById("copyright").innerHTML = Year + "©️";