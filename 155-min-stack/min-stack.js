
var MinStack = function() {
    this.s1 = [];
};

/** 
 * @param {number} value
 * @return {void}
 */
MinStack.prototype.push = function(value) {
    if(this.s1.length === 0){
        this.s1.push([value,value]);
    }
    else{
        let minVal = Math.min(value, this.s1[this.s1.length-1][1]);

        this.s1.push([value,minVal]);
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.s1.pop();

};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.s1[this.s1.length-1][0];   //here we are returning the top of 0 ie the current top of the stack
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.s1[this.s1.length-1][1];  //here we are returning the top of 1 ie the sorted one
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(value)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

/**     Visulaising the thing we did
          |   6    |    5    |  <---- Top of the stack
          |   8    |    5    |
          |   9    |    5    |
          |   5    |    5    |
          |___6____|____6____|
 */