import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'my-button',
  styleUrl: 'my-button.css',
  shadow: true
})
export class MyButton {
  /**
   * The color of the button
   */
  @Prop() type: string;

  render() {
    return (
      <Host>
        <button class={this.type}>Hello Reciprocity!</button>
      </Host>
    );
  }

}
