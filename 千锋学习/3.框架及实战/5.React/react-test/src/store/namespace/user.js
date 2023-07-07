const module = "user";

const generateType = (name) => {
  return `${module}/${name}`;
};

export const ADD = generateType("add");
