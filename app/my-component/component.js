import { LitElement, html, css } from 'lit-element';
// import styles from './component.css';

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
        font-family: sans-serif;
        display: block;
        outline: 1px solid #ccc;
        padding: 20px;
      }

      p {
        margin-top: 0;
      }

      button {
        font: inherit;
        background-color: orange;
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
