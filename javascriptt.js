  function login() {
      let phone = document.getElementById("phone").value.trim();
      let password = document.getElementById("password").value.trim();
      let errorMsg = document.getElementById("errorMsg");

      if (phone === "" || password === "") {
        errorMsg.textContent = "⚠ Please fill out all fields!";
      } else {
        document.getElementById("loginPage").style.display = "none";
        document.getElementById("successPage").style.display = "block";
      }
    }