class ButtonCount extends HTMLElement {
  #count = 0;
  #output;

  constructor() {
    super();

    const shadowRoot = this.attachShadow({mode: 'open'});
    const style = `
    <style>
    button {
      background-color: rebeccapurple;
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