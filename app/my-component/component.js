import { LitElement, html, css } from 'lit-element';

class Component extends LitElement {
  static get properties() {
    return {
      greeting: { type: String },
      timesClicked: { type: Number }
    };
  }

  constructor() {
    super();

    this.greeting = 'hellowwworld';
    this.timesClicked = 0;
  }

  static get styles() {
    return css`
      :host {
        display: block;
        border: 1px solid #ccc;
        padding: 20px;
        font-family: sans-serif;
      }

      p {
        margin-top: 0;
      }

      button {
        font: inherit;
        background-color: #ED003C;
        color: white;
        border: 0;
        height: 40px;
        padding: 0 20px;
      }
    `;
  }

  render() {
    return html`
      <p>${this.greeting}</p>
      <p>${this.timesClicked}</p>
      <button @click="${this._onButtonClick}">Click me!</button>
    `;
  }

  _onButtonClick() {
    this.timesClicked++;
    console.log('botón clicado');
  }
}

customElements.define('my-component', Component);
