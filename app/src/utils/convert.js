//convert to array of objects

export default (data) => {
  let collection = data.slice(); // make a copy
  let keys = collection.shift();

  collection = collection.map((e) => {
    let obj = {};

    keys.forEach((key, i) => {
      obj[key] = e[i];
    });

    return obj;
  });

  return collection;
}