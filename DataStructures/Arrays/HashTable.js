class HashTable {
  constructor(size = 3) {
    this.keyMap = new Array(size);
  }
  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }

  set(key, value) {
    const idx = this._hash(key);
    if (!this.keyMap[idx]) {
      this.keyMap[idx] = [];
    }
    this.keyMap[idx].push([key, value]);
  }
  get(key) {
    const idx = this._hash(key);
    if (!this.keyMap[idx]) {
      return undefined;
    }
    for (let i = 0; i < this.keyMap[idx].length; i++) {
      if (this.keyMap[idx][i][0] === key) {
        return this.keyMap[idx][i][1];
      }
    }
  }
  keys() {
    let keys = [];
    if (!this.keyMap.length) {
      return undefined;
    }
    for (let i = 0; i < this.keyMap.length; i++) {
      for (let j = 0; j < this.keyMap[i].length; j++) {
        keys = [...keys, this.keyMap[i][j][0]];
      }
    }
    return keys;
  }
  values() {
    let values = [];
    if (!this.keyMap.length) {
      return undefined;
    }
    for (let i = 0; i < this.keyMap.length; i++) {
      for (let j = 0; j < this.keyMap[i].length; j++) {
        if(!values.includes(this.keyMap[i][j][1])) values = [...values, this.keyMap[i][j][1]];
      }
    }
    return values;
  }
}

const table = new HashTable();
table.set("pink", "#0008");
table.set("dark", "#0009");
table.set("paint", "#0009");
table.set("pionk", "#0008");
//console.log(table);
//console.log(table.get("pink"));
console.log(table.keys());
console.log(table.values());
