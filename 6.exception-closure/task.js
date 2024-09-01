function parseCount(number) {
    if (Number.isNaN(Number.parseFloat(number))) {
        throw new Error ("Невалидное значение");
    } else {
        return Number.parseFloat(number);
    }
}

function validateCount(number) {
    try {
       return parseCount(number);
    } catch (error) {
        return error;
    }
}

class Triangle {
    constructor(a, b, c){
        if ((a + b) < c || (a + c < b) || (b + c < a)){
            throw new Error("Треугольник с такими сторонами не существует");
        } else {
            this.a = a;
            this.b = b;
            this.c = c;
        }
    }
    get perimeter(){
        return this.a + this.b + this.c;
    }
    get area(){
        let p = (this.a + this.b + this.c) / 2;
        let S = p * (p - this.a) * (p - this.b) * (p - this.c);
        return Math.sqrt(S).toFixed(3);
    }
}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch (error) {
        class WarTriangle {
            get perimeter(){
                return "Ошибка! Треугольник не существует";
            }
            get area(){
                return "Ошибка! Треугольник не существует";
            }
        }
        return new WarTriangle;
    }
}﻿
