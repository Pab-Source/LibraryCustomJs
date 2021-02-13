export type stateType = object;

export type funcChildren = () => IChildren;

export interface IChildren {
  tag: string;
  father: string;
  id: string;
  children: IChildren[] | funcChildren | string;
  attrs?: {
    style?: string;
  };
  onClick?: (event) => any;
}

export interface IComponent {
  state?: stateType;
  setState?: (newState: stateType) => void | stateType;
  render: () => IChildren;
}
