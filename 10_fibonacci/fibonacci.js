const fibonacci = function(position) {
    if(position<0){
        return "OOPS";
    }
    else {
    var round = Number(position)
    fibSequence = [0,1];
    for(let i=2; i<=round; i++){
    fibSequence.push(fibSequence[[i]-1] + fibSequence[[i]-2]);
    }
}
    return fibSequence[round];
};

// Do not edit below this line
module.exports = fibonacci;


// fibonacci formula =>  = 3-1 + 3-2

// 1,2,3,5,8,13

// round = 0, x = 0
// round = 1, x = 1
// round = 2, x = 1
// round = 3, x = 3
// round = 4, x = 5


// Formula => Fn = Fn-1 + Fn-2
//Where n>1
//F0 = 0 && F1= 1

/*
Value is the sum of the two previous numbers.

So the 4th fibonacci is the sum of the 2nd and 3rd fibonacci sequence. 


*/