window.addEventListener("DOMContentLoaded", init);

function init() {
  addAlertListener();
  addConfirmListener();
  addPromptListener();
  addSaferPromptListener();
}

function createDialog(message) {
  const dialog = document.createElement("dialog");
  dialog.innerHTML = `
    <p>${message}</p>
    <form method="dialog">
      <button>OK</button>
    </form>
  `;
  document.body.appendChild(dialog);
  return dialog;
}

function addAlertListener() {
  let alertButton = document.getElementById("alert");
  alertButton.addEventListener("click", () => {
    const message = "Alert pressed!";
    let dialog = createDialog(message);
    dialog.showModal();
  });
}

function addConfirmListener() {
  let confirmButton = document.getElementById("confirm");
  confirmButton.addEventListener("click", () => {
    const output = document.getElementById("output");
    output.textContent = "";

    const delay = 10;
    setTimeout(() => {
      const confirmMessage = "Do you confirm?";
      let confirmed = window.confirm(confirmMessage);

      const outputMessage = `The value returned by the confirm method is : ${confirmed}`;
      output.textContent = outputMessage;
    }, delay);
  });
}

function addPromptListener() {
  let promptButton = document.getElementById("prompt");
  promptButton.addEventListener("click", () => {
    const output = document.getElementById("output");
    output.textContent = "";

    const delay = 10;
    setTimeout(() => {
      const promptMessage = "Type something: ";
      let userInput = window.prompt(promptMessage);

      const noInputMessage = "User didn't enter anything";
      const outputMessage = userInput
        ? `Prompt result : ${userInput}`
        : noInputMessage;
      output.innerHTML = outputMessage;
    }, delay);
  });
}

function addSaferPromptListener() {
  let saferButton = document.getElementById("safer");
  saferButton.addEventListener("click", () => {
    const output = document.getElementById("output");
    output.textContent = "";

    const delay = 10;
    setTimeout(() => {
      const promptMessage = "Type something: ";
      let userInput = window.prompt(promptMessage);

      const noInputMessage = "User didn't enter anything";
      const outputMessage = userInput
        ? DOMPurify.sanitize`Prompt result : ${userInput}`
        : noInputMessage;
      output.innerHTML = outputMessage;
    }, delay);
  });
}
