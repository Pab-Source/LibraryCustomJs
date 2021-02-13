import { IChildren } from "./react/types";

const listenerForClickEvent = () => {};

const removeListener = listener => {};

const createComponent = (InstanceComponent: IChildren) => {
  const father = document.getElementById(InstanceComponent.father);
  const newElement = document.createElement(InstanceComponent.tag);

  newElement.setAttribute("id", InstanceComponent.id);

  if (InstanceComponent.onClick) {
    newElement.addEventListener("click", event =>
      InstanceComponent.onClick(event)
    );
  }

  if (
    typeof InstanceComponent.children === "string" &&
    InstanceComponent.attrs
  ) {
    Object.entries(InstanceComponent.attrs).forEach(att =>
      newElement.setAttribute(att[0], att[1])
    );
  }

  const validateElement = document.getElementById(InstanceComponent.id);
  if (validateElement) {
    validateElement.remove();
  }

  if (typeof InstanceComponent.children === "string") {
    newElement.innerHTML = InstanceComponent.children;
    father.appendChild(newElement);
    return;
  }

  father.appendChild(newElement);

  if (InstanceComponent.children[0]) {
    return InstanceComponent.children.forEach(item =>
      typeof item === "function"
        ? createComponent(item())
        : createComponent(item)
    );
  }

  return createComponent(InstanceComponent.children());
};

const render = InstanceComponent => createComponent(InstanceComponent);

export default {
  render,
};
