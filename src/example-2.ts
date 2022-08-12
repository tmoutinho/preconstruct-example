const obj = {
  foo: {
    bar1: "elements",
  },
  baz: "general",
  qux: "test",
  bar: "king",
};

// Get unique values
const getUniqueKeys = <TObj, Keys extends keyof TObj>(
  obj: TObj,
  key?: Keys
) => {
  if (key) {
    return [...Object.keys(obj), ...Object.keys(obj[key])];
  }
  return [...Object.keys(obj)];
};

getUniqueKeys(obj, "foo");
getUniqueKeys(obj);

// Get lower key value with 2 layers
const getLowerKeyValue = <
  T,
  firstKey extends keyof T, // foo, baz, qux, bar
  secondKey extends keyof T[firstKey]
>(
  obj: T,
  firstKey: firstKey,
  secondKey?: secondKey
) => {
  if (secondKey) {
    return obj[firstKey][secondKey];
  }
  return obj[firstKey];
};

getLowerKeyValue(obj, "baz"); // "general"
getLowerKeyValue(obj, "foo", "bar1"); // "elements"
