function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("updated fetched data");
    }, 100);
  });
}

module.exports = fetchData;
