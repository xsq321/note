function HelloLoader(content) {
  content = content.replace(/bgcolor/g, "background-color");
  return content;
}

module.exports = HelloLoader;
