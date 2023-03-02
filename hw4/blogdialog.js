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

export function createEdit(message, postObj) {
  const dialog = document.createElement("dialog");
  dialog.innerHTML = `
    <p>${message}</p>
    <form method="dialog">
      <label for="newtitle">New Title</label>
      <input type="text" id="newtitle" value="${postObj.title}">

      <label for="newdate">New Date</label>
      <input type="date" id="newdate" value="${postObj.date}">

      <label for="newsummary">New Summary</label>
      <input type="text" id="newsummary" value="${postObj.summary}">

      <button value="ok">Confirm</button>
      <button value="cancel">Cancel</button>
    </form>
  `;
  document.body.appendChild(dialog);
  return dialog;
}

export function createAdd(message) {
  const dialog = document.createElement("dialog");
  dialog.innerHTML = `
    <p>${message}</p>
    <form method="dialog">
      <label for="title">Title</label>
      <input type="text" id="title">

      <label for="date">Date</label>
      <input type="date" id="date">

      <label for="summary">Summary</label>
      <input type="text" id="summary">

      <button value="add">Add</button>
      <button value="cancel">Cancel</button>
    </form>
  `;
  document.body.appendChild(dialog);
  return dialog;
}
