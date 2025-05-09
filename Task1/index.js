function* range(start, end, step = 1, options = { inclusive: false }) {
  if (
    typeof start !== "number" ||
    typeof end !== "number" ||
    typeof step !== "number"
  ) {
    throw new TypeError("start, end, and step must be numbers");
  }
  if (step === 0) {
    throw new Error("step cannot be 0");
  }

  const inclusive = options.inclusive;

  if (step > 0) {
    while (inclusive ? start <= end : start < end) {
      yield start;
      start += step;
    }
  } else {
    while (inclusive ? start >= end : start > end) {
      yield start;
      start += step;
    }
  }
}

const iterator = range(5, 10, 1);

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log([...range(1, 5)]);
console.log([...range(1, 5, 1, { inclusive: true })]);
console.log([...range(5, 1, -1)]);
console.log([...range(0, 1, 0.25)]);
