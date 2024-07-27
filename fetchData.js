function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("fetched data");
    }, 100);
  });
}

module.exports = fetchData;
