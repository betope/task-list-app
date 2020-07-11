if("serviceWorker", in navigator) {
  navigator.serviceWorker.register("sw.js").then(registration => {
    console.log("The SW was registered!");
  })
} else (error {
  console.log("SW registration failed!");
  console.log(error);
});
