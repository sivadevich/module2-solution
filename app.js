(function (){
  'use strict' ;
  angular.module('ShoppingListCheckOff', [])

.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['$scope','ShoppingListCheckOffService'];
AlreadyBoughtController.$inject = ['$scope','ShoppingListCheckOffService'];

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var toBuyCntrl = this;

  toBuyCntrl.items = ShoppingListCheckOffService.getItems();

  toBuyCntrl.moveItemsToBought = function (itemIndex) {
    console.log("Move Items To Bought");
    ShoppingListCheckOffService.moveItemsToBought(itemIndex);
  };

}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var alreadyBoughtCntrl = this;
  alreadyBoughtCntrl.itemsBought = ShoppingListCheckOffService.getItemsBought();
}

  function ShoppingListCheckOffService() {
    var service = this;
    var itemsBoughtFlag =false;
   // List of shopping items
   var items = [];
   var itemsBought =[];
   var item1 = {
     name: "Cookies",
     quantity: "10"
   };

   var item2 = {
     name: "Chocolates",
     quantity: "20"
   };

   var item3 = {
     name: "Drinks",
     quantity: "30"
   };
   var item4 = {
     name: "Chips",
     quantity: "10"
   };
   items.push(item1);
   items.push(item2);
   items.push(item3);
   items.push(item4);

   service.getItems = function () {
     return items;
   };

   service.getItemsBought = function () {
     return itemsBought;
   };
   service.moveItemsToBought = function (itemIdex) {
      itemsBoughtFlag=true;
      console.log("Service move Items Item is  "+items[itemIdex].name);
        itemsBought.push(items[itemIdex]);
        items.splice(itemIdex, 1);
 };
}

})();