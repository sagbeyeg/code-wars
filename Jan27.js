

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

//TEST
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

// //BEST PRACTICE
// function PaginationHelper(collection, itemsPerPage){
//   this.collection = collection, this.itemsPerPage = itemsPerPage;
// }

// PaginationHelper.prototype.itemCount = function() {
//   return this.collection.length;
// }

// PaginationHelper.prototype.pageCount = function() {
//   return Math.ceil(this.collection.length / this.itemsPerPage);
// }

// PaginationHelper.prototype.pageItemCount = function(pageIndex) {
//   return pageIndex < this.pageCount() 
//     ? Math.min(this.itemsPerPage, this.collection.length - pageIndex * this.itemsPerPage)
//     : -1;
// }

// PaginationHelper.prototype.pageIndex = function(itemIndex) {
//   return itemIndex < this.collection.length && itemIndex >= 0
//     ? Math.floor(itemIndex / this.itemsPerPage)
//     : -1;
// }