// import text from "./posts.json";
// import json from "./posts.json";
import * as json from "./posts.json";

export const formData = (form: HTMLFormElement) => {
  console.log(json);
  const inputs = form.querySelectorAll("input");
  let values: { [prop: string]: string } = {};

  inputs.forEach((input) => {
    values[input.id] = input.value;
  });
  return values;
};
