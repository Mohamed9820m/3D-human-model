document.addEventListener("DOMContentLoaded", function () {
    const hotspots = document.querySelectorAll(".Hotspot");
    const popups = document.querySelectorAll(".popup");
  
    hotspots.forEach((hotspot, index) => {
      hotspot.addEventListener("click", function (event) {
        const popupId = hotspot.getAttribute("data-popup");
        const popup = document.getElementById(popupId);
  
        if (popup) {
          // Close other open popups
          popups.forEach(p => {
            if (p !== popup) {
              p.classList.remove("active");
            }
          });
  
          popup.classList.toggle("active");
          popup.setAttribute("data-hotspot", hotspot.textContent); // Store the hotspot name
          event.stopPropagation();
        }
      });
    });
  
    popups.forEach(popup => {
      const submitButton = popup.querySelector("button[type='submit']");
  
      submitButton.addEventListener("click", function (event) {
        event.preventDefault();
  
        const clickedHotspot = popup.getAttribute("data-hotspot");
        const selectedOption = popup.querySelector('.itemForm select').value;
  
        const message = {
          hotspot: clickedHotspot,
          option: selectedOption
        };
  
        // Send the message to React Native using postMessage
        window.ReactNativeWebView.postMessage(JSON.stringify(message));
  
        popup.classList.remove("active");
      });
    });
  
    document.addEventListener("click", function (event) {
      const clickedElement = event.target;
  
      if (!clickedElement.classList.contains("Hotspot")) {
        popups.forEach(popup => {
          if (!popup.contains(clickedElement)) {
            popup.classList.remove("active");
          }
        });
      }
    });
  });
  