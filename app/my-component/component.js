import { LitElement, html, css } from 'lit-element';
import styles from './component.css';

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
    return css`${styles}`;
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
