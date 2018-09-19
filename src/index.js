class Sorter {
  
  constructor() {
    // your implementation
    this.arr=[];
    let comparator=null;
  }

  add(element) {
    // your implementation
    this.arr.push(element);
    this.length++;
  }

  at(index) {
    // your implementation
    return this.arr[index];
  }

  get length() {
    // your implementation
    return this.arr.length;
  }

  set length(){
    this.length=this.arr.length;
  }

  toArray() {
    // your implementation
    return this.arr;
  }

  sort(indices) {
    // your implementation
    let newArr=[];
    for(let i=0; i<indices.length; i++){
      newArr.push(this.arr[indices[i]]);
    }
      if(comparator!==null){
        newArr.sort(comparator);
      }
      else{
        newArr.sort();
      }

      for(let i=0; i<indices.length; i++){
        this.arr[indices[i]]=newArr[i];
      }
    
  }

  setComparator(compareFunction) {
    // your implementation
    comparator=compareFunction;
  }
}

module.exports = Sorter;