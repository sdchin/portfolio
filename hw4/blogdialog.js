export function createDelete(message) {
  const dialog = document.createElement("dialog");
  dialog.innerHTML = `
    <p>${message}</p>
    <form method="dialog">
      <button value="delete">Delete</button>
      <button value="cancel">Cancel</button>
    </form>
  `;
  document.body.appendChild(dialog);
  return dialog;
}

export function createEdit(message) {
  const dialog = document.createElement("dialog");
  dialog.innerHTML = `
    <p>${message}</p>
    <form method="dialog">
      <label for="newtitle">New Title</label>
      <input type="text" id="newtitle">

      <label for="newdate">New Date</label>
      <input type="date" id="newdate">
      
      <label for="newsummary">New Summary</label>
      <input type="text id="newsummary">

      <button value="ok">Confirm</button>
      <button value="cancel">Cancel</button>
    </form>
  `;
  document.body.appendChild(dialog);
  return dialog;
}
