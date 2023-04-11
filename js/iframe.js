function toggleIframe() {
    let iframeContainer = document.getElementById("iframe-container");
    if (iframeContainer.style.display === "none") {
      iframeContainer.style.display = "flex";
    } else {
      iframeContainer.style.display = "none";
    }
  }