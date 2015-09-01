angular.module('starter.controllers', [])

.factory('Items', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var items = [{
    id: 0,
    name: 'Plaid Shirt',
    company: 'Mossimo Supply Co.',
    gender: 'male',
    type: 'top',
    category: 'basics',
    price: '24.99',
    custom: 'yes',
    fee: '10',
    image: 'img/mens/mens-plaid.jpeg',
    link: ' p/men-s-plaid-shirt-red-mossimo-supply-co/-/A-16696127#prodSlot=_1_14'
  }, {
    id: 1,
    name: 'Hoodie Railroad Gray',
    company: 'Mossimo Supply Co.',
    gender: 'male',
    type: 'top',
    category: 'basics',
    price: '24.99',
    custom: 'yes',
    fee: '10',
    image: 'img/mens/mens-gray-mossimo.jpeg',
    link: ' p/men-s-hoodie-railroad-gray-mossimo-supply-co/-/A-17192892#prodSlot=_1_6'
  }, {
    id: 2,
    name: 'Belted Cargo Short',
    company: 'Mossimo Supply Co.',
    gender: 'male',
    type: 'bottom',
    category: 'basics',
    price: '19.54',
    custom: 'yes',
    fee: '10',
    image: 'img/mens/mens-cargo.jpeg',
    link: ' p/men-s-belted-cargo-short-mossimo-supply-co/-/A-16953880#prodSlot=_1_2'
  }, {
    id: 3,
    name: 'Jogger Pants Olive',
    company: 'Mossimo Supply Co.',
    gender: 'male',
    type: 'bottom',
    category: 'leisure',
    price: '22.99',
    custom: 'yes',
    fee: '10',
    image: 'img/mens/mens-jogger-olive.jpeg',
    link: ' p/men-s-jogger-pants-olive-mossimo-supply-co/-/A-17231913#prodSlot=_1_11'
  }, {
    id: 4,
    name: 'Plaid Button Down Shirt',
    company: 'Mossimo Supply Co.',
    gender: 'female',
    type: 'top',
    category: 'basics',
    price: '22.99',
    custom: 'yes',
    fee: '10',
    image: 'img/womens/womens-plaid-button-down.jpeg',
    link: ' p/plaid-button-down-shirt-mossimo-supply-co/-/A-17188280#prodSlot=_1_10'
  }, {
    id: 5,
    name: 'Boyfriend V-Tee',
    company: 'Mossimo Supply Co.',
    gender: 'female',
    type: 'top',
    category: 'basics',
    price: '9.00',
    custom: 'yes',
    fee: '10',
    image: 'img/womens/womens-v-tee-mossimo.jpeg',
    link: ' p/boyfriend-v-tee-mossimo-supply-co/-/A-15659060#prodSlot=_1_1'
  }, {
    id: 6,
    name: 'Slim Jogger',
    company: 'Mossimo Supply Co.',
    gender: 'female',
    type: 'bottom',
    price: '19.99',
    custom: 'yes',
    fee: '10',
    image: 'img/womens/womens-slim-jogger.jpeg',
    link: ' p/slim-jogger-mossimo-supply-co/-/A-17269433#prodSlot=_1_15'
  }, {
    id: 7,
    name: 'Juniors Printed Leggings',
    company: 'Mossimo Supply Co.',
    gender: 'female',
    type: 'bottom',
    category: 'leisure',
    price: '14.99',
    custom: 'yes',
    fee: '10',
    image: 'img/womens/womens-juniors-printed-leggings.jpeg',
    link: ' p/junior-s-printed-leggings/-/A-16454924?lnk=rec%7Cpdp%7Cviewed_viewed%7Cpdpv1'
  }, {
    id: 8,
    name: 'Woven Shirtail Tank Top',
    company: 'Xhilaration',
    gender: 'female',
    type: 'top',
    category: 'fashion',
    price: '14.44',
    custom: 'yes',
    fee: '10',
    image: 'img/womens/womens-woven-shirtail.jpeg',
    link: ' p/woven-shirtail-tank-top-xhilaration/-/A-16873455#prodSlot=_1_29'
  }, {
    id: 9,
    name: 'Tapered Challis Pant',
    company: 'Mossimo Supply Co.',
    gender: 'female',
    type: 'bottom',
    category: 'leisure',
    price: '22.99',
    custom: 'yes',
    fee: '10',
    image: 'img/womens/womens-tapered-challis-mossimo.jpeg',
    link: ' p/tapered-challis-pant-mossimo-supply-co/-/A-16710585#prodSlot=_2_10'
  }, {
    id: 10,
    name: 'Urban Legging',
    company: 'Mossimo Supply Co.',
    gender: 'female',
    type: 'bottom',
    category: 'leisure',
    price: '17.99',
    custom: 'yes',
    fee: '10',
    image: 'img/womens/womens-urban-legging-mossimo.jpeg',
    link: ' p/urban-legging-mossimo-supply-co/-/A-17301117#prodSlot=medium_1_1&term=urban+legging'
  }, {
    id: 11,
    name: 'Hooded Open Back Pullover',
    company: 'Mossimo Supply Co.',
    gender: 'female',
    type: 'top',
    category: '',
    price: '$19.99',
    custom: 'yes',
    fee: '10',
    image: 'img/womens/womens-hooded-pullover.jpeg',
    link: ' p/hooded-open-back-pullover-mossimo-supply-co/-/A-17277446#prodSlot=_1_7'
  }, {
    id: 12,
    name: 'Leather Hooded Moto Jacket',
    company: 'Xhilaration',
    gender: 'female',
    type: 'top',
    category: 'fashion',
    price: '19.98',
    custom: 'yes',
    fee: '10',
    image: 'img/womens/womens-moto-jacket.png',
    link: ' p/junior-s-faux-leather-hooded-moto-jacket-xhilaration/-/A-16333446#prodSlot=_3_6'
  }, {
    id: 13,
    name: 'Hooded Open Back Pullover',
    company: 'Mossimo Supply Co.',
    gender: 'female',
    type: 'top',
    category: 'leisure',
    price: '19.99',
    custom: 'yes',
    fee: '10',
    image: 'img/womens/womens-hooded-pullover.jpeg',
    link: ' p/hooded-open-back-pullover-mossimo-supply-co/-/A-17277446#prodSlot=_1_7'
  }, {
    id: 14,
    name: 'Hooded Cross Back Vest',
    company: 'Mossimo Supply Co.',
    gender: 'female',
    type: 'top',
    category: 'leisure',
    price: '17.99',
    custom: 'yes',
    fee: '10',
    image: 'img/womens/womens-hooded-cross-back-vest.jpeg',
    link: ' p/hooded-cross-back-vest-mossimo-supply-co/-/A-17300764#prodSlot=_1_2'
  }, {
    id: 15,
    name: 'Basic Cami',
    company: 'Mossimo Supply Co.',
    gender: 'female',
    type: 'top',
    category: 'basics',
    price: '9',
    custom: 'yes',
    fee: '10',
    image: 'img/womens/womens-basic-cami.jpeg',
    link: ' p/basic-cami-mossimo-supply-co/-/A-17244181#prodSlot=_1_11'
  }, {
    id: 16,
    name: 'High Rise Jegging',
    company: 'Mossimo Supply Co.',
    gender: 'female',
    type: 'bottom',
    category: '',
    price: '29.99',
    custom: 'yes',
    fee: '10',
    image: 'img/womens/womens-high-rise-jegging.jpeg',
    link: ' p/women-s-high-rise-jegging-mossimo/-/A-17128448#prodSlot=_1_5'
  }, {
    id: 17,
    name: 'High Rise Flare Jean',
    company: 'Mossimo Supply Co.',
    gender: 'female',
    type: 'bottom',
    category: '',
    price: '29.99',
    custom: 'yes',
    fee: '10',
    image: 'img/womens/womens-high-rise-flare-jeans.jpeg',
    link: ' p/women-s-high-rise-flare-jean-mossimo/-/A-17264659#prodSlot=large_1_2&term=flare+jeans'
  }, {
    id: 18,
    name: 'Boyfriend Jean',
    company: 'Mossimo Supply Co.',
    gender: 'female',
    type: 'bottom',
    category: 'basics',
    price: '29.99',
    custom: 'yes',
    fee: '10',
    image: 'img/womens/womens-boyfriend-jean.jpeg',
    link: ' p/women-s-boyfriend-jean-mossimo/-/A-17120243#prodSlot=large_1_8&term=boyfriend+jeans'
  }, {
    id: 19,
    name: 'Long and Lean Tank Top',
    company: 'Mossimo Supply Co.',
    gender: 'female',
    type: 'top',
    category: 'basics',
    price: '9',
    custom: 'yes',
    fee: '10',
    image: 'img/womens/womens-long-and-lean-tanktop.jpeg',
    link: ' p/long-lean-tank-top-mossimo-supply-co/-/A-17010827#prodSlot=medium_1_11&term=lean+and+long+tank'
  }, {
    id: 20,
    name: 'Straight Leg Jeans',
    company: 'Mossimo Supply Co.',
    gender: 'male',
    type: 'bottom',
    category: 'basics',
    price: '24.99',
    custom: 'yes',
    fee: '10',
    image: 'img/mens/mens-straight-leg-jean.png',
    link: ' p/men-s-straight-leg-jeans-mossimo-supply-co/-/A-21567316#prodSlot=_1_1'
  }, {
    id: 21,
    name: 'Slim Straight Jeans',
    company: 'Mossimo Supply Co.',
    gender: 'male',
    type: 'bottom',
    category: 'basics',
    price: '24.99',
    custom: 'yes',
    fee: '10',
    image: 'img/mens/mens-slim-straight-jeans.png',
    link: ' p/men-s-slim-straight-jeans-mossimo-supply-co/-/A-21567389#prodSlot=_1_2'
  }, {
    id: 22,
    name: 'Slim Fit Jeans',
    company: 'Mossimo Supply Co.',
    gender: 'male',
    type: 'bottom',
    category: 'basics',
    price: '24.99',
    custom: 'yes',
    fee: '10',
    image: 'img/mens/mens-slim-fit-jeans.png',
    link: ' p/men-s-slim-fit-jeans-mossimo-supply-co/-/A-21567253#prodSlot=_1_4'
  }, {
    id: 23,
    name: 'Slim Fit Pocket Raglan',
    company: 'Mossimo Supply Co.',
    gender: 'male',
    type: 'top',
    category: 'fashion',
    price: '11.98',
    custom: 'yes',
    fee: '10',
    image: 'img/mens/mens-slim-fit-pocket-raglan.jpeg',
    link: ' p/mossimo-supply-co-men-s-slim-fit-pocket-raglan/-/A-16234531#prodSlot=medium_1_9&term=mens+raglan+tee'
  }, {
    id: 23,
    name: 'Sleeveless Plaid Buttondown Shirt',
    company: 'Xhilaration',
    gender: 'female',
    type: 'top',
    category: 'fashion',
    price: '19.99',
    custom: 'yes',
    fee: '10',
    image: 'img/womens/xhilaration/sleeveless-plaid-buttondown-shirt.png',
    link: ' p/mossimo-supply-co-men-s-slim-fit-pocket-raglan/-/A-16234531#prodSlot=medium_1_9&term=mens+raglan+tee'
  }, {
    id: 23,
    name: 'Denim Jogger',
    company: 'Mossimo Supply Co.',
    gender: 'female',
    type: 'bottom',
    category: 'fashion',
    price: '29.99',
    custom: 'yes',
    fee: '10',
    image: 'img/womens/mossimo/denim-jogger.png',
    link: ' p/mossimo-supply-co-men-s-slim-fit-pocket-raglan/-/A-16234531#prodSlot=medium_1_9&term=mens+raglan+tee'
  }, {
    id: 23,
    name: 'Poncho',
    company: 'Xhilaration',
    gender: 'female',
    type: 'top',
    category: 'fashion',
    price: '22.99',
    custom: 'yes',
    fee: '10',
    image: 'img/womens/xhilaration/poncho.png',
    link: ' p/mossimo-supply-co-men-s-slim-fit-pocket-raglan/-/A-16234531#prodSlot=medium_1_9&term=mens+raglan+tee'
  }, {
    id: 23,
    name: 'Leather Hooded Jacket',
    company: 'Xhilaration',
    gender: 'female',
    type: 'top',
    category: 'fashion',
    price: '39.99',
    custom: 'yes',
    fee: '10',
    image: 'img/womens/xhilaration/leather-hooded-jacket.jpeg',
    link: ' p/junior-s-faux-leather-hooded-moto-jacket-xhilaration/-/A-16333446#prodSlot=_3_6'
  }, {
    id: 23,
    name: 'Cold Shoulder Shift Dress',
    company: 'Xhilaration',
    gender: 'female',
    type: 'top',
    category: 'fashion',
    price: '24.99',
    custom: 'yes',
    fee: '10',
    image: 'img/womens/xhilaration/cold-shoulder-shift-dress.png',
    link: ' p/mossimo-supply-co-men-s-slim-fit-pocket-raglan/-/A-16234531#prodSlot=medium_1_9&term=mens+raglan+tee'
  }, {
    id: 23,
    name: 'Woven Soft Pant',
    company: 'Mossimo Supply Co.',
    gender: 'female',
    type: 'bottom',
    category: 'leisure',
    price: '19.99',
    custom: 'yes',
    fee: '10',
    image: 'img/womens/mossimo/woven-soft-pant.png',
    link: ' p/mossimo-supply-co-men-s-slim-fit-pocket-raglan/-/A-16234531#prodSlot=medium_1_9&term=mens+raglan+tee'
  }];

  return {
    all: function() {
      return items;
    },
    mens: function() {
      var mensItems = [];
      for (var i = 0; i < items.length; i++) {
        if (items[i].gender == 'male') {
            mensItems.push(items[i]);
        }
      }
      return mensItems;
    },
    womens: function() {
      var womensItems = [];
      for (var i = 0; i < items.length; i++) {
        if (items[i].gender == 'female') {
            womensItems.push(items[i]);
        }
      }
      return womensItems;
    },
    remove: function(chat) {
      items.splice(items.indexOf(item), 1);
    },
    get: function(itemId) {
      for (var i = 0; i < items.length; i++) {
        if (items[i].id === parseInt(itemId)) {
          return items[i];
        }
      }
      return null;
    }
  };
})

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $ionicSideMenuDelegate, Items){

    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //$scope.$on('$ionicView.enter', function(e) {
    //});
    $scope.toggleLeftSideMenu = function() {
        $ionicSideMenuDelegate.toggleLeft();
    };


    $scope.loginData = {};

    $ionicModal.fromTemplateUrl('templates/login.html', {
        scope: $scope
    }).then(function(modal) {
        $scope.modal = modal;
    });

    $scope.closeLogin = function() {
        $scope.modal.hide();
    };

    $scope.login = function() {
        $scope.modal.show();
    };

    $scope.doLogin = function() {
        console.log('Doing login', $scope.loginData);
        $timeout(function() {
            $scope.closeLogin();
        }, 1000);
    };

    $scope.items = Items.all();
    $scope.mensItems = Items.mens();

    })

.controller('ItemCtrl', function($scope, $stateParams, Items){

    $scope.item = Items.get($stateParams.itemId);
    console.log($scope.item);

    $scope.item.total = parseInt($scope.item.price) + parseInt($scope.item.fee);

    // $scope.groups = [

    //     {
    //         name: "STYLE",
    //         items: ['Add - 1/2", 1", 1 1/2", 2"', 'Remove - 1/2", 1", 1 1/2", 2"']
    //     },

    //     {
    //         name: "DESIGN",
    //         items: ["color", "material"]
    //     },

    //     {
    //         name: "FIT",
    //         items: ["color", "material"]
    //     }
    // ];



    /*
    * if given group is the selected group, deselect it
    * else, select the given group
    */

    // $scope.toggleGroup = function(group) {
    //     if ($scope.isGroupShown(group)) {
    //         $scope.shownGroup = null;
    //     } else {
    //         $scope.shownGroup = group;
    //     }
    // };

    // $scope.isGroupShown = function(group) {
    //     return $scope.shownGroup === group;
    // };

});
