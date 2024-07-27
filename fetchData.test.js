const fetchData = require("./fetchData");

test("the data is peanut butter", () => {
  return fetchData().then((data) => {
    expect(data).toBe("updated fetched data again");
  });
});
