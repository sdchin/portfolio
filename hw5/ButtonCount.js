class ButtonCount extends HTMLElement {
  #count = 0;
  #output;

  constructor() {
    super();

    const shadowRoot = this.attachShadow({mode: 'open'});
    const style = `
    <style>
    button {
      border: none;
      border-radius: 10px;
      box-shadow: 4px 4px 10px #666;
      background: linear-gradient(#e66465, #9198e5);
      color: #fff;
      font-family: 'Assistant', sans-serif;
      font-size: 1.1rem; 
      height: 50px;
      margin: 10px;
      position: relative;
      transition: transform 200ms;
      width: 150px;
    }

    button::after {
      border-radius: 10px 10px 0 0;
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 50%;
      background: linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.2));
    }

    button:hover {
      transform: scale(0.95, 0.95);
    }

    button:active {
      transform: scale(0.85, 0.85);
    }
    </style>
    `;
    const markup = `
    <button>Times clicked: <output>${this.#count}</output></button>
    `;
    shadowRoot.innerHTML = style + markup;

    this.#output = shadowRoot.querySelector('output');

    shadowRoot.querySelector('button').addEventListener('click', this.#increment.bind(this));
  }

  #increment() {
    this.#count++;
    this.#output.textContent = this.#count;
  }
}

customElements.define("button-count", ButtonCount);