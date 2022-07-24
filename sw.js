self.addEventListener("install", () => {
  console.log("install")
})

self.addEventListener("activate", () => {
  console.log("activate")
})

self.addEventListener("fetch", (event) => {
  if(!event.request.url.includes("cat")){
    return;
  }
  event.respondWith(fetch("./dog.jpeg"))
})
