
function totalNumberSold(applesSoldList) {
	var totalSold = 0;
	for (var i = 0; i < applesSoldList.length; i++) {
		totalSold += applesSoldList[i].qty;
	  } 
	return totalSold;
}

function totalIncome(applesSoldList) {
	var total = 0;
	for (var i = 0; i < applesSoldList.length; i++) {
		total += applesSoldList[i].price;
	  } 
	return total;
}

function totalIncomeGreenApples(applesSoldList){
	var greenApples = []
	var totalGreenApples = 0;
	for (var i = 0; i < applesSoldList.length; i++) {
		var green = applesSoldList[i];
		if(green.color === "green"){
			greenApples.push(green.price)
		}
		totalGreenApples += applesSoldList[i].price;
	  } 
	return totalGreenApples.toFixed();
}

function totalProfit(applesSoldList, applePriceMap){
	return 0;
}

// -- extra functions...

function totalPerColorSold(apples, color) {
	return 0;
}

function totalIncomePerColor(apples, color) {
	return 0;
}


function totalProfitPerColor(apples, color, costMap) {
	return 0;
}

function mostProfitableColor(apples, color, costMap) {
	return 0;
}