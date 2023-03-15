async function sendRequest(e) {
  const WRONG_SELECT = "Must select POST, GET, PUT, or DELETE.";

  let form = document.getElementById('form');
  let date = new Date().toISOString();
  form.querySelector('#date').value = date;

  let formData = new FormData(form);
  let body = new URLSearchParams(formData).toString();
  let qString = body;
  
  let action;
  let method;
  let selected = e.target.id;
  switch (selected) {
    case 'postBtn':
      action = 'https://httpbin.org/post';
      method =  'POST';
      break;
    case 'getBtn':
      action = `https://httpbin.org/get?${qString}`;
      method = 'GET';
      break;
    case 'putBtn':
      action = 'https://httpbin.org/put';
      method = 'PUT';
      break;
    case 'deleteBtn':
      action = `https://httpbin.org/delete?${qString}`;
      method = 'DELETE';
      break;
    default:
      const err = new RangeError(WRONG_SELECT);
      console.error(err, err.stack);
      return {};
  }
  
  let options = (selected === 'getBtn' || selected === 'deleteBtn') ? {method} : {method, body};

  try {
    let resp = await fetch(action, options);
    if (!resp.ok) {
      displayError();
      return {};
    }
    const data = await resp.json();
    return data;
  } catch (err) {
    displayError();
    console.error(err, err.stack);
    return {};
  }
}

function displayError() {
  const DISPLAY_ERROR = 'Oops! Something went wrong. Please check your connection and try again.';
  alert(DISPLAY_ERROR);
}

function format(obj, key, list) {
  const isObj = typeof obj[key] === 'object';
  const markup = document.createElement('li');

  if (!isObj) {
    markup.innerHTML = `${key}: ${obj[key]}`;
    list.append(markup);
    return;
  } 

  markup.innerHTML = `${key}:`; 
  const sublist = document.createElement('ul');
  markup.append(sublist);
  list.append(markup);

  for (const k in obj[key]) {
    format(obj[key], k, sublist);
  }
}

function render(json) {
  const output = document.getElementById('response');
  output.innerHTML = '';

  const outer = document.createElement('ul');
  outer.id = 'response-list';
  output.append(outer);

  for (const key in json) {
    format(json, key, outer);
  }
}

const buttons = document.querySelectorAll('#form button');
buttons.forEach((btn) => {
  btn.addEventListener('click', async (e) => {
    render(await sendRequest(e));
  })
});
