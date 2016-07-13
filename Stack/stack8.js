//Evaluate an expression given only single digits and only 2 operators * and +.

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


function evaluate (expression) {
  if (typeof expression !== 'string') return null;
  var stack = new Stack();
  var temp = null;
  for (var i = 0; i < expression.length; i++) {
    var curr = expression[i];
    if (curr === ' ' || curr === '*') continue;
    if (curr === '+') {
      stack.push(temp);
      temp = null;
    } else if (temp === null) {
      temp = +curr;
    } else {
      temp *= curr;
    }
  }
  while (!stack.isEmpty()) {
    temp += stack.pop();
  }
  return temp;
}