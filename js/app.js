'use strict';

function jsonp_callback(data) {
    // returning from async callbacks is (generally) meaningless
    console.log(data.found);
}


// Declare app level module which depends on filters, and services
var myApp = angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives','ajoslin.mobile-navigate','ngMobile'])
    .config(function ($compileProvider){
        $compileProvider.urlSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);
    })
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/', {templateUrl: 'partials/homeView.html', controller: 'HomeCtrl'});
        $routeProvider.when('/view1', {templateUrl: 'partials/decodeString.html'});
        $routeProvider.when('/view2', {templateUrl: 'partials/bombEnemy.html'});
        $routeProvider.when('/view3', {templateUrl: 'partials/missingRanges.html'});
        $routeProvider.when('/view4', {templateUrl: 'partials/numberOfIslands.html'});
        $routeProvider.when('/view5', {templateUrl: 'partials/findTheDifference.html'});
        $routeProvider.when('/view6', {templateUrl: 'partials/islandPerimeter.html'});
        $routeProvider.when('/view7', {templateUrl: 'partials/loggerRateLimiter.html'});
        $routeProvider.when('/view8', {templateUrl: 'partials/androidUnlockPatterns.html'});
		$routeProvider.when('/view9',{templateUrl:'partials/regularExpressionMatching.html'});
       $routeProvider.when('/view10',{templateUrl:'partials/reverseVowelsOfAString.html'});
	   $routeProvider.when("/view11",{templateUrl:'partials/generalizedAbbreviation.html'});
	   $routeProvider.when("/view12",{templateUrl:'partials/summaryRanges.html'});
	   $routeProvider.when("/view13",{templateUrl:'partials/mergeIntervals.html'});
	   $routeProvider.when("/view14",{templateUrl:'partials/paintFence.html'});
	   $routeProvider.when("/view15",{templateUrl:'partials/trappingRainWater.html'});
	   $routeProvider.when("/view16",{templateUrl:'partials/wordBreak.html'});
	   $routeProvider.when("/view17",{templateUrl:'partials/rotateImage.html'});
	   $routeProvider.when("/view18",{templateUrl:'partials/sqrt(x).html'});
	   $routeProvider.when("/view19",{templateUrl:'partials/pow(x,n).html'});
	  $routeProvider.when("/view20",{templateUrl:'partials/utf-8Validation.html'});
	  $routeProvider.when("/view21",{templateUrl:'partials/numberOf1Bits.html'});
	  $routeProvider.when("/view22",{templateUrl:'partials/sumOfTwoIntegers.html'});
	  $routeProvider.when("/view23",{templateUrl:'partials/countingBits.html'});
		$routeProvider.when("/view24",{templateUrl:'partials/BrickGame.html'});
	 $routeProvider.when("/view25",{templateUrl:'partials/AddingReversedNumbers.html'});
		$routeProvider.when("/view26",{templateUrl:'partials/ArchaeologistsDilemma.html'});
		$routeProvider.when("/view27",{templateUrl:'partials/AverageSpeed.html'});
		$routeProvider.when("/view28",{templateUrl:'partials/BasicRemains.html'});
		$routeProvider.when("/view29",{templateUrl:'partials/HighSchoolPhysics.html'});
		$routeProvider.when("/view30",{templateUrl:'partials/IntegerInquiry.html'});
		$routeProvider.when("/view33",{templateUrl:'partials/BigMod.html'});
		$routeProvider.when("/view34",{templateUrl:'partials/DigitCounting.html'});
		$routeProvider.when("/view35",{templateUrl:'partials/Friends.html'});
		$routeProvider.when("/view36",{templateUrl:'partials/FiveHundredFactorial.html'});
	    $routeProvider.when("/view37",{templateUrl:'partials/PseudoPrimeNumbers.html'});
		$routeProvider.when("/view38",{templateUrl:'partials/CoconutsRevisited.html'});
		$routeProvider.when("/view39",{templateUrl:'partials/GoogleIsFeelingLucky.html'});
		$routeProvider.when("/view40",{templateUrl:'partials/HighPrecisionNumber.html'});
		$routeProvider.when("/view41",{templateUrl:'partials/Newspaper.html'});
		$routeProvider.when("/view42",{templateUrl:'partials/Parity.html'});
		$routeProvider.when("/view43",{templateUrl:'partials/SimplifyingFractions.html'});
		$routeProvider.when("/view44",{templateUrl:'partials/JollyJumpers.html'});
		$routeProvider.when("/view45",{templateUrl:'partials/VeryEasy.html'});
		$routeProvider.when("/view46",{templateUrl:'partials/Modex.html'});
		$routeProvider.when("/view47",{templateUrl:'partials/LargestPrimeDivisor.html'});
		$routeProvider.when("/view48",{templateUrl:'partials/LightMoreLight.html'});
		$routeProvider.when("/view49",{templateUrl:'partials/MultipleOfSeventeen.html'});
		$routeProvider.when("/view50",{templateUrl:'partials/SplittingNumbers.html'});
		$routeProvider.when("/view51",{templateUrl:'partials/Ants.html'});
		$routeProvider.when("/view52",{templateUrl:'partials/TheHugeOne.html'});
		$routeProvider.when("/view53",{templateUrl:'partials/NumberTheoryForNewbies.html'});
		$routeProvider.when("/view54",{templateUrl:'partials/BasicallySpeaking.html'});
		$routeProvider.when("/view55",{templateUrl:'partials/BackToIntermediateMath.html'});
		$routeProvider.when("/view56",{templateUrl:'partials/TheLastNonZeroDigit.html'});
		$routeProvider.when("/view57",{templateUrl:'partials/expressionAddOperators.html'});
		$routeProvider.when("/view58",{templateUrl:'partials/kthLargestElementInAnArray.html'});
		$routeProvider.when("/view59",{templateUrl:'partials/findTheDifference.html'});
		$routeProvider.when("/view60",{templateUrl:'partials/islandPerimeter.html'});
		$routeProvider.when("/view61",{templateUrl:'partials/romanToInteger.html'});
		$routeProvider.when("/view62",{templateUrl:'partials/validPalindrome.html'});
		$routeProvider.when("/view63",{templateUrl:'partials/oneEditDistance.html'});
		$routeProvider.when("/view64",{templateUrl:'partials/decodeWays.html'});
		$routeProvider.when("/view65",{templateUrl:'partials/groupAnagrams.html'});
		$routeProvider.when("/view66",{templateUrl:'partials/palindromePermutation.html'});
		$routeProvider.when("/view67",{templateUrl:'partials/searchInRotatedSortedArray.html'});
		$routeProvider.when("/view68",{templateUrl:'partials/twoSum.html'});
		$routeProvider.when("/view69",{templateUrl:'partials/houseRobber.html'});
		$routeProvider.when("/view70",{templateUrl:'partials/productOfArrayExceptSelf.html'});
		$routeProvider.when("/view71",{templateUrl:'partials/countAndSay.html'});
		$routeProvider.when("/view72",{templateUrl:'partials/moveZeros.html'});
		$routeProvider.when("/view73",{templateUrl:'partials/paintHouseII.html'});
		$routeProvider.when("/view74",{templateUrl:'partials/sortColors.html'});
		$routeProvider.when("/view75",{templateUrl:'partials/minimumSizeSubarraySum.html'});
		$routeProvider.when("/view76",{templateUrl:'partials/strobogrammaticNumber.html'});
		$routeProvider.when("/view77",{templateUrl:'partials/multiplyStrings.html'});
		$routeProvider.when("/view78",{templateUrl:'partials/wordBreak.html'});
		
		$routeProvider.when("/view79",{templateUrl:'partials/cloneGraph.html'});
		$routeProvider.when("/view80",{templateUrl:'partials/3Sum.html'});
		$routeProvider.otherwise({redirectTo: '/'});
  }]);
  
  
  
myApp.directive('ngPrism', [function() {
    return {
        restrict: 'A',
        link: function($scope, element, attrs) {
            element.ready(function() {
                Prism.highlightElement(element[0]);
            });
        }
    }
}]);

