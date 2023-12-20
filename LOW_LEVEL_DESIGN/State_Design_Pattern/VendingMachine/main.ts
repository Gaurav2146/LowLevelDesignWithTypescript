let Counter = (function () {
  let count = 0;
  return {
    increaseCount() {
      count++;
    },
    getCount() {
      return count;
    },
  };
})();

let result = Counter;
result.increaseCount();
result.increaseCount();

console.log(result.getCount(), "count");
