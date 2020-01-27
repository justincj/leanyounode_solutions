var args = process.argv.slice(2);

function sum(acc, val){
	return acc + val;
}

var sum = args.map(Number).reduce(sum, 0);

console.log(sum);


