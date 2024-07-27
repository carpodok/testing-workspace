function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("updated fetched data again");
    }, 100);
  });
}





module.exports = fetchData;
