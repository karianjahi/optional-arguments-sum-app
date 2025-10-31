# ➕ Optional Arguments Sum App  

A functional **JavaScript mini project** that demonstrates how to handle **optional arguments** and return **functions dynamically**.  
This exercise strengthens your understanding of closures, argument validation, and conditional logic in JavaScript. 🚀  

---

## 🧠 Overview  

The `addTogether` function intelligently adds numbers passed as arguments.  
- If **two arguments** are provided ➡️ returns their **sum**.  
- If **one argument** is provided ➡️ returns a **function** that expects another number to complete the addition.  
- If **any argument is not a valid number**, it returns `undefined`.  

---

## 🧾 User Stories  

✅ 1. Create a function named `addTogether`.  
✅ 2. If the function receives **two arguments**, return their sum.  
✅ 3. If the function receives **one argument**, return a new function waiting for the second number.  
✅ 4. If **either argument isn’t a valid number**, return `undefined`.  

---

## 💡 Example Code  

```javascript
const addTogether = (...args) => {
    let sum = 0;
    let array = [...args];
    if (array.length === 1) {
        let item = array[0];
        if (typeof(item) === "string") return undefined;
        function sumTwoNumbers(x) {
            if (typeof(x) !== "number") return undefined;
            return x + item;
        }
        return sumTwoNumbers;
    } else {
        for (let arg of args) {
            if (typeof(arg) !== "number") return undefined;
            sum += arg;
        }
        return sum;
    }
}
```
## 🧪 Test Cases

```javascript
> addTogether(2, 3)
5

> addTogether(23.4, 30)
53.4

> addTogether("2", 3)
undefined

> addTogether(5, undefined)
undefined

> const sumTwoAnd = addTogether(2);
> sumTwoAnd(3)
5

> addTogether("https://www.youtube.com/watch?v=dQw4w9WgXcQ")
undefined
```

## 🧠 How It Works (Step-by-Step)

1. Capture all arguments passed into the function using the rest operator `(...args)`.  
2. Check how many arguments were received:  
   - If **one argument**, validate that it’s a number.  
   - Return an inner function waiting for another number to complete the addition.  
3. If **two arguments**, validate both.  
4. Return their **sum** if both are valid.  
5. If **either argument** is invalid (e.g., string, undefined, array), return `undefined`.  

---

## ⚙️ Time Complexity

- **O(1)** — Constant time for arithmetic operations.  
- **O(1)** space — Minimal memory usage for holding arguments.  

Lightweight and highly efficient ⚡  

---

## 🧪 Learning Outcomes

This project reinforces:  
- ✅ Understanding of **closures** and **function scope**.  
- ✅ Mastery of **conditional logic** and **type checking**.  
- ✅ Use of the **rest operator (`...args`)** to handle variable arguments.  
- ✅ Returning **functions dynamically**.  
- ✅ Writing **clean, readable, and testable** JavaScript code.  

---

## 🚀 Run Locally

```bash
node source.js
```

## 🧾 License
MIT License — free for personal and educational use.
