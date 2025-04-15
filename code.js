const container = document.getElementById("list-container")

for(let i = 1; i <= 5; i++) {
  const p = document.createElement("p");
  p.textContent = "This is item #" + i ; 
container.appendChild(p);
}

let j = 1
while(j <= 5) {
  const p = document.createElement(p);
  p.textContent = "Whileloop item# + j;
    container.appendChild(p);
  j++;
}


for (let p = 1 ; p <= 20; p++) {
  const p = document.createElement("p");
  p.textContent = i;

  if (p % 2 == 0) {
    p.style.color = "blue";
  } else {
    p.style.color = "red";
  }

  container.appendChild(p);
}

