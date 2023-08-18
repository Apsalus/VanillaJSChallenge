window.addEventListener("resize", () => {
    if (window.innerWidth <= 900) {
      document.body.style.backgroundColor = "red";
    } else if (window.innerWidth > 900 && window.innerWidth <= 1400) {
      document.body.style.backgroundColor = "blue";
    } else {
      document.body.style.backgroundColor = "orange";
    }
  });
  