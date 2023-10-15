import { MultipleSelect } from "../../assets/scripts/utils";

const multipleSelectList =
  document.querySelectorAll<HTMLElement>(".multiple-select");

export const initMultipleSelects = () => {
  multipleSelectList.forEach((container) => new MultipleSelect(container));
};
