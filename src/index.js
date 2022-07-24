if("serviceWorker" in navigator){
  console.log("register service worker")
  navigator.serviceWorker.register("sw.js")
}

const app = document.getElementById("app")
const btn = document.createElement("button")
const img = new Image();
btn.innerText = "button"
btn.addEventListener("click", async () => {
  fetch("./cat.jpeg")
  .then( v => v.blob() )
  .then( v => {
    img.src = URL.createObjectURL(v)
  })
})
app.appendChild(btn)
app.appendChild(img)