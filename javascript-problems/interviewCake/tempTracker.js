// Implement methods to track the max, min, mean, and mode

class TempTracker {
  constructor() {
    this.numberOfReadings = 0;
    this.totalSum = 0;
    this.mean = null;

    this.maxTemp = null;
    this.minTemp = null;

    this.occurences = new Array(111).fill(0);
    this.maxOccurrences = 0;
  }
  insert(temperature) {
    this.occurences[temperature]++;
    if (this.occurences[temperature] > this.maxOccurrences) {
      this.mode = temperature;
      this.maxOccurrences = this.occurences[temperature];
    }

    this.numberOfReadings++;
    this.totalSum += temperature;
    this.mean = this.totalSum / this.numberOfReadings;
    // this.maxOccurrences =
    if (this.maxTemp === null || temperature > this.maxTemp) {
      this.maxTemp = temperature;
    }
    if (this.minTemp === null || temperature < this.minTemp) {
      this.minTemp = temperature;
    }
  }

  getMax() {
    return this.maxTemp;
  }

  getMin() {
    return this.minTemp;
  }

  getMean() {
    return this.mean;
  }

  getMode() {
    return this.mode;
  }
}

let t = new TempTracker();
t.insert(90);
t.insert(70);
t.insert(45);
console.log(t);
