<form>
  First name:
  <input type="input" name="yourName">
  <input
  type="button"
  onclick="displayMessage(form.yourName.value);"
  value="Display Message">
</form>

function displayMessage(firstName) {
    alert("Hello " + firstName + ", hope you like JavaScript functions!");
}

