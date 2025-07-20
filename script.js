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
    container.innerHTML = `
      <h2>🎵 Mood Music</h2>
      <audio controls autoplay loop>
        <source src="assets/music/lofi1.mp3" type="audio/mp3">
        Your browser does not support audio.
      </audio>
    `;
  }

  else if (section === "letters") {
    container.innerHTML = `
      <h2>💌 Letters</h2>
      <p>You’ll receive one new letter a day…</p>
      <div class="letter-box">Letter #01: “done with this shit”</div>
    `;
  }

  else if (section === "journal") {
    container.innerHTML = `
      <h2>📖 Real Me</h2>
      <p>This is your private journal. Type what you feel.</p>
      <textarea rows="6" cols="40" placeholder="Start writing..."></textarea>
    `;
  }

  else if (section === "gallery") {
    container.innerHTML = `
      <h2>🖼️ Memories</h2>
      <img src="assets/images/photo1.jpg" alt="memory" style="width: 200px; border-radius: 12px;" />
      <p>A moment that smiled at you.</p>
    `;
  }
}
