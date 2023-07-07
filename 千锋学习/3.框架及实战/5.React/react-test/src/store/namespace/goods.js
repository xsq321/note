const module = "goods";

const generateType = (name) => {
  return `${module}/${name}`;
};

export const UPDATE = generateType("update");
