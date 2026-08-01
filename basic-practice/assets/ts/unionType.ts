type ValueType = string | number | boolean;

function getValue(value: ValueType): void {
  if (typeof value === "number") {
    console.log(`This is a number: ${value}`);
  } else if (typeof value === "string") {
    console.log("This is not a number");
  }
}

getValue(23);
