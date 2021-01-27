//----ROMAN NUMERALS DECODER----//
// Create a function that takes a Roman numeral as its argument and returns its value as a numeric decimal integer. You don't need to validate the form of the Roman numeral.

// Modern Roman numerals are written by expressing each decimal digit of the number to be encoded separately, starting with the leftmost digit and skipping any 0s. So 1990 is rendered "MCMXC" (1000 = M, 900 = CM, 90 = XC) and 2008 is rendered "MMVIII" (2000 = MM, 8 = VIII). The Roman numeral for 1666, "MDCLXVI", uses each letter in descending order.

// Help:

// Symbol    Value
// I          1
// V          5
// X          10
// L          50
// C          100
// D          500
// M          1,000
const value = {
  "I": 1,
  "V": 5,
  "X": 10,
  "L": 50,
  "C": 100,
  "D": 500,
  "M": 1000
}
const solution = roman => {
  var split = roman.split("")
  var sum = 0
  split.map(num => {
    sum += value[num]
  })
  split[split.length - 2] == "I" && split[split.length - 1] !== "I" ? sum -= 2 : null
  return sum
}
//TEST
// console.log(solution('XIX')); // should return 4


//----PAGINATION HELPER----//

// The class is designed to take in an array of values and an integer indicating how many items will be allowed per each page. The types of values contained within the collection/array are not relevant.

// The following are some examples of how this class is used:

// var helper = new PaginationHelper(['a','b','c','d','e','f'], 4);
// helper.pageCount(); //should == 2
// helper.itemCount(); //should == 6
// helper.pageItemCount(0); //should == 4
// helper.pageItemCount(1); // last page - should == 2
// helper.pageItemCount(2); // should == -1 since the page is invalid

// // pageIndex takes an item index and returns the page that it belongs on
// helper.pageIndex(5); //should == 1 (zero based index)
// helper.pageIndex(2); //should == 0
// helper.pageIndex(20); //should == -1
// helper.pageIndex(-10); //should == -1


// TODO: complete this object/class

// The constructor takes in an array of items and a integer indicating how many
// items fit within a single page
function PaginationHelper(collection, itemsPerPage) {
  this.group = collection
  this.pageItems = itemsPerPage
}

// returns the number of items within the entire collection
PaginationHelper.prototype.itemCount = function () {
  return this.group.length
}


// returns the number of pages
PaginationHelper.prototype.pageCount = function () {
  return Math.ceil(this.itemCount() / this.pageItems)
}

// returns the number of items on the current page. page_index is zero based.
// this method should return -1 for pageIndex values that are out of range
PaginationHelper.prototype.pageItemCount = function (pageIndex) {
  let items = this.itemCount() - pageIndex * this.pageItems
  console.log("Items:", items)
  if (items > this.pageItems) {
    return this.pageItems
  } else if (items < 1) {
    return -1
  } else {
    return items
  }
}

// determines what page an item is on. Zero based indexes
// this method should return -1 for itemIndex values that are out of range
PaginationHelper.prototype.pageIndex = function (itemIndex) {
  // console.log(this.itemCount())
  if (itemIndex > this.itemCount() || itemIndex < 0 || this.itemCount() === 0) {
    return -1
  } else if (itemIndex < this.pageItems) {
    return 0
  } else {
    return Math.floor(itemIndex / this.pageItems)
  }
}


// PaginationHelper.prototype.pageIndex = function (itemIndex) {
//   // console.log(this.itemCount())
//   if (this.itemCount() === 0
//       || itemIndex < 0
//       || itemIndex > this.itemCount())        return -1;
//   if (itemIndex === 0
//       || itemIndex / this.pageItems === 1) return 0;
//   return Math.floor((itemIndex / this.pageItems));

//   }
var helper = new PaginationHelper(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'], 4);
// // pageIndex takes an item index and returns the page that it belongs on
// console.log(helper.pageIndex()); //should == 1 (zero based index)
// helper.pageIndex(2); //should == 0
// helper.pageIndex(20); //should == -1
// helper.pageIndex(-10); //should == -1


// console.log(helper.pageCount()); //should == 2
// console.log(helper.itemCount()); //should == 6
// console.log(helper.pageItemCount(0)); //should == 4
// console.log(helper.pageItemCount(1)); // last page - should == 2
// console.log(helper.pageItemCount(2)); // should == -1 since the page is invalid

