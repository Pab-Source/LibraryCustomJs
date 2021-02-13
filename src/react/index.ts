import ReactDOM from "../react-dom";
import { IComponent, IChildren, stateType } from "./types";

export class Component implements IComponent {
  private initialRender: boolean = true;
  private update: boolean = false;

  public state: stateType = {};
  public fatherId: string = "";

  constructor(fatherId: string) {
    this.fatherId = fatherId;
    this.renderHook();
  }

  private renderHook() {
    const renderItem: IChildren = this.render();

    if (this.initialRender) {
      this.cleanElementDOM(renderItem.father);
      ReactDOM.render(renderItem);
      this.initialRender = false;
    }

    if (this.update) {
      this.cleanElementDOM(renderItem.father);
      ReactDOM.render(renderItem);
      this.update = false;
    }

    return renderItem;
  }

  private cleanElementDOM(id: string) {
    const element = document.getElementById(id);
    element.innerHTML = "";
  }
  public setState(newState: stateType) {
    if (typeof newState === "function") {
      this.state = newState(this.state);
      return;
    }
    this.state = newState;
    this.update = true;
    this.renderHook();
  }

  public render(): IChildren {
    return this.render();
  }
}

export default {
  Component,
};
