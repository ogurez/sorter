class Sorter {
  
  constructor() {
    // your implementation
    this.arr=[];
    this.comparator=function(left, right) {
      return left - right;
    };
  }

  add(element) {
    // your implementation
    this.arr.push(element);
  }

  at(index) {
    // your implementation
    return this.arr[index];
  }

  get length() {
    // your implementation
    return this.arr.length;
  }

  toArray() {
    // your implementation
    return this.arr;
  }

  sort(indices) {
    // your implementation
    let newArr=[];
    indices.sort(function(left, right) {
      return left - right;});
    for(let i=0; i<indices.length; i++){
      newArr.push(this.arr[indices[i]]);
    }
     
      newArr.sort(this.comparator);

      for(let i=0; i<indices.length; i++){
        this.arr[indices[i]]=newArr[i];
      }
    
  }

  setComparator(compareFunction) {
    // your implementation
    this.comparator=compareFunction;
  }
}

module.exports = Sorter;