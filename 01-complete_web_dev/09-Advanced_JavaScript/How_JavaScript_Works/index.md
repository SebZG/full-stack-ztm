# What is a program

- Allocate memory
- Parse and execute

# JavaScript Engine

- V8 engine
  - translates JavaScript code into machine code that the computer can understand and execute.
- Memory Heap:
  - A place where objects/variables are stored in memory.
  - Memory Leaks can occur when memory is not properly released, leading to increased memory usage and potential performance issues.
- Call Stack:
  - A data structure that keeps track of function calls in a program. It follows the Last In First Out (LIFO) principle.
  - Stack Overflow can occur when the call stack exceeds its maximum size, usually due to infinite recursion or excessive function calls.
- Single Threaded:
  - JavaScript is single-threaded (one call stack) language that can be non-blocking

Creating a stack overflow with recursion:

```js
function foo() {
  foo();
}

foo();
```

# Asynchronous JavaScript

```js
console.log(1);
setTimeout(() => console.log(2), 2000);
console.log(3);
```

```js
1;
3;
2;
```

Call Stack =>

Web API =>

Callback Queue =>

Event Loop =>

Call Stack
