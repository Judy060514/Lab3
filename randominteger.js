/*
 * randominteger.js
 * Lab 3 - Exercise 3
 * 生成 1 到 100 之间的随机整数
 */

function randomInt() {
    // Math.random() 返回 [0, 1) 之间的小数
    // * 100 → [0, 100)
    // Math.floor() 向下取整 → 0~99
    // + 1 → 1~100
    return Math.floor(Math.random() * 100) + 1;
}