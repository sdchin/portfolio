window.addEventListener("DOMContentLoaded", init);

function init() {
  addAlertListener();
  addConfirmListener();
  addPromptListener();
  addSaferPromptListener();
}

function createAlert(message) {
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

function createPrompt(message) {
  const dialog = document.createElement("dialog");
  dialog.innerHTML = `
    <p>${message}</p>
    <form method="dialog">
      <input type="text">
      <button id="ok" value="default">OK</button>
      <button value="cancel">Cancel</button>
    </form>
  `;

  const input = dialog.querySelector("input");
  input.addEventListener("input", () => {
    const okButton = dialog.querySelector("#ok");
    okButton.value = input.value;
  });
  document.body.appendChild(dialog);
  return dialog;
}

function createConfirm(message) {
  const dialog = document.createElement("dialog");
  dialog.innerHTML = `
    <p>${message}</p>
    <form method="dialog">
      <button value="ok">OK</button>
      <button value="cancel">Cancel</button>
    </form>
  `;
  document.body.appendChild(dialog);
  return dialog;
}

function addAlertListener() {
  let alertButton = document.getElementById("alert");
  alertButton.addEventListener("click", () => {
    const message = "Alert pressed!";
    let dialog = createAlert(message);
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
      let dialog = createConfirm(confirmMessage);
      dialog.showModal();

      dialog.addEventListener("close", () => {
        const outputMessage = `The value returned by the confirm method is : ${dialog.returnValue}`;
        output.textContent = outputMessage;
      });
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
      let dialog = createPrompt(promptMessage);
      dialog.showModal();

      dialog.addEventListener("close", () => {
        const noInputMessage = "User didn't enter anything";
        const outputMessage =
          dialog.returnValue !== "cancel"
            ? `Prompt result : ${dialog.returnValue}`
            : noInputMessage;
        output.innerHTML = outputMessage;
      });
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
