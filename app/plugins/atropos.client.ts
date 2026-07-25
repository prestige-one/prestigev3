/* eslint-disable @typescript-eslint/no-explicit-any */
// plugins/atropos.client.ts
import Atropos from "atropos";

export default defineNuxtPlugin(() => {
  class AtroposComponent extends HTMLElement {
    atropos: any;

    connectedCallback() {
      this.atropos = new (Atropos as any)({
        el: this.querySelector(".my-atropos") as HTMLElement,
        onRotate(x: number, y: number) {
          console.log("rotate", x, y);
        }
      });
    }


    disconnectedCallback() {
      this.atropos.destroy();
    }
  }

  if (!customElements.get("atropos-component")) {
    customElements.define("atropos-component", AtroposComponent);
  }
});
