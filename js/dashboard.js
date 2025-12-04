const form = document.getElementById("addForm");
const titleInput = document.getElementById("title");
const descInput = document.getElementById("desc");
const list = document.getElementById("entryList");

const statTotal = document.getElementById("statTotal");
const statLast = document.getElementById("statLast");

let total = 0;

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const title = titleInput.value.trim();
  const desc = descInput.value.trim();

  if (title.length < 3) {
    alert("El título debe tener al menos 3 caracteres.");
    return;
  }

  const li = document.createElement("li");
  li.className = "entry-item";
  li.innerHTML = `
    <strong>${title}</strong><br>
    <span>${desc}</span>
  `;

  list.appendChild(li);

  total++;
  statTotal.textContent = total;
  statLast.textContent = title;

  titleInput.value = "";
  descInput.value = "";
});