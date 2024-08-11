function getArrayParams(...arr) {
	let min = Infinity;
	let max = -Infinity;
	let sum = 0;
	let avg = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > max) {
			max = arr[i];
		}
		if (arr[i] < min) {
			min = arr[i];
		}
		sum += arr[i];
	}
	avg = Number((sum / arr.length).toFixed(2));
	return {
		min: min,
		max: max,
		avg: avg
	};
}

function summElementsWorker(...arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

function differenceMaxMinWorker(...arr) {
  let min =  Infinity;
  let max = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] > max) {
      max = arr[i];
    } 
    if (arr[i] < min) {
      min = arr[i];
    } 
  }
  let differenceMaxMin = max - min;
  return differenceMaxMin;
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
    } else {
      sumOddElement += arr[i];
    } 
  }
  let differenceEvenOdd = sumEvenElement - sumOddElement;
  return differenceEvenOdd;
}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
      countEvenElement ++;
    }
  }
  let averageEvenElements = sumEvenElement / countEvenElement;
  return averageEvenElements;
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  for (let i = 0; i < arrOfArr.length; i++) {
    let funcResult = func(...arr[i]);
    if (funcResult > maxWorkerResult) {
      maxWorkerResult = funcResult;
   }
  }
  return maxWorkerResult;
}


