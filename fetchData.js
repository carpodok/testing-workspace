function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("peanut butter");
    }, 100);
  });
}

module.exports = fetchData;
