// Find missing parenthesis in a given expression – 2 * ( 3 + 5(sasdfasdfasd)

//Result will return unsorted array of indexes of unmatched parens

function Node (data) {
  this.data = data;
  this.next = null;
}

function Stack () {
  this.first = null;
}

Stack.prototype.push = function (data) {
  var node = new Node(data);
  node.next = this.first;
  this.first = node;
}

Stack.prototype.pop = function () {
  if (!this.first) return null;
  var popped = this.first.data;
  this.first = this.first.next;
  return popped;
}

Stack.prototype.peek = function () {
  return this.first;
}

Stack.prototype.isEmpty = function () {
  if (this.peek() === null) return true;
  return false;
}

function parens (expression) {
  if (typeof expression !== 'string') return null;
  var paren = new Stack();
  var unmatched = [];
  for (var i = 0; i < expression.length; i++) {
    if (expression[i] === '(') paren.push(i);
    if (expression[i] === ')') {
      if (paren.pop() === null) unmatched.push(i);
    }
  }
  while (!paren.isEmpty()) {
    unmatched.push(paren.pop());
  }
  return unmatched.length ? unmatched : null;
}