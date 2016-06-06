// Reverse a stack and put the reversed value back in the same stack. You can use only one other stack and a temp variable.

function Node (data) {
  this.data = data;
  this.next = null;
}

function Stack () {
  this.first = null;
  this.length = 0;
}

Stack.prototype.push = function (data) {
  var node = new Node(data);
  node.next = this.first;
  this.first = node;
  this.length++;
};

Stack.prototype.pop = function () {
  if (!this.first) return null;
  var popped = this.first.data;
  this.first = this.first.next;
  this.length--;
  return popped;
};

Stack.prototype.peek = function () {
  return this.first;
};

Stack.prototype.isEmpty = function () {
  if (this.peek() === null) return true;
  return false;
};

function reverseStack (stack) {
  if (!stack || !stack.first) return null;
  var temp;
  var reversed = new Stack();
  for (var i = 0; i < stack.length - 1; i++) {
    for (var j = 0; j <= i; j++) {
      reversed.push(stack.pop());
    }
    temp = stack.pop();
    for (var k = 0; k <= i; k++) {
      stack.push(reversed.pop());
    }
    stack.push(temp);
  }
}