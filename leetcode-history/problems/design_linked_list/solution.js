
function Node(val){
    this.val = val;
    this.next = null;
}


var MyLinkedList = function() {
    this.head = null;
    this.size = 0;
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    if(index < 0 || index >= this.size){
        return -1;
    }
        let curr = this.head;
        for(let i=0;i < index;i++){
            curr = curr.next;
        }
        return curr.val;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    let newNode = new Node(val);
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    if(this.head == null){
        let newNode = new Node(val);
        this.head = newNode;
    }
    else{
    let curr = this.head;
    while(curr.next != null){
        curr = curr.next;
    }
    let newNode = new Node(val);
    curr.next = newNode;
    }
    this.size++;
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    if(index < 0 || index > this.size){
        return;
    }
    if(index == 0){
        this.addAtHead(val);
        return;
    }
    else if(index == this.size){
        this.addAtTail(val);
        return;
    }
    else{
    let curr = this.head;
    let i = 0;
    for(let i=0; i < index-1; i++){
        curr = curr.next;
    }
    let newNode = new Node(val);
    newNode.next = curr.next;
    curr.next = newNode;
    }
    this.size++;
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    if(index < 0 || index >= this.size){
        return;
    }
    let curr = this.head;
    for(let i=0;i < index-1; i++){
        curr = curr.next;
    }
    if(index == 0){
        this.head = curr.next;
        this.size--;
    }
    else{
        curr.next = curr.next.next;
        this.size--;
    }
};

/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */