function findUniqueDeliveryId1(deliveryIds) {
  let unique = 0
  let test 
  deliveryIds.forEach(delivery => {
    // console.log(delivery);
    // console.log((unique ^= delivery));
    
    test = unique ^= delivery
    console.log(test);
  })
  return test
}

console.log(findUniqueDeliveryId1([2, 5, 4, 8, 6, 3, 1, 4, 2, 3, 6, 5, 1]));


function findUniqueDeliveryId2(deliveryIds) {
  // Find the one unique ID in the array
  const idsToOccurrances = new Map();

  deliveryIds.forEach((deliveryId) => {
    console.log(deliveryId);
    if (idsToOccurrances.has(deliveryId)) {
      const newCount = idsToOccurrances.get(deliveryId) + 1;
      console.log(idsToOccurrances.get(deliveryId));
      idsToOccurrances.set(deliveryId, newCount);
    } else {
      idsToOccurrances.set(deliveryId, 1);
    }
  });
  console.log(idsToOccurrances);
  return [...idsToOccurrances.keys()].find(
    (id) => idsToOccurrances.get(id) === 1
  );
}

console.log(findUniqueDeliveryId2([2, 5, 4, 8, 6, 3, 4, 2, 3, 6, 5, 1]));
// console.log(findUniqueDeliveryId([1]));
console.log(5 ^ 1);

// Very cool code hard to follow though
const sampleArray = [1, 2, 3, 7, 2, 1, 3];
const getNonDuplicatedValues = (arr) => {
  return arr.filter((item, index) => {
    // console.log(arr.splice(index, 1));
    arr.splice(index, 1);
    // console.log(item);
    const unique = !arr.includes(item);
    console.log(unique);
    console.log(arr);
    arr.splice(index, 0, item);
    // console.log(arr.splice(index, 0, item));
    console.log(unique);
    return unique;
  });
}
console.log(...getNonDuplicatedValues(sampleArray));
