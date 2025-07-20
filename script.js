// CONFIG
const accessCode = "StillHere"; // <- Change this if you want

function verifyCode() {
  const entered = document.getElementById("accessCode").value.trim();
  if (entered === accessCode) {
    document.getElementById("intro").classList.add("hidden");
    document.getElementById("dashboard").classList.remove("hidden");
    document.getElementById("dashboard").classList.add("active");
  } else {
    alert("Wrong code. Try again.");
  }
}

function openSection(section) {
  const container = document.getElementById("sectionContainer");
  container.innerHTML = "";

  if (section === "music") {
    container.innerHTML = `<h2>🎵 Music Section</h2><p>Your playlist goes here.</p>`;
  } else if (section === "letters") {
    container.innerHTML = `<h2>💌 Letters</h2><p>One letter a day keeps the ghosts away 😼</p>`;
  } else if (section === "journal") {
    container.innerHTML = `<h2>📖 Real Me</h2><p>Your journal starts here.</p>`;
  } else if (section === "gallery") {
    container.innerHTML = `<h2>🖼️ Memories</h2><p>Photos that smile back.</p>`;
  }
}
