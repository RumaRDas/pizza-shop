function log(str) {
    console.log(str);
}
var A = /** @class */ (function () {
    function A() {
        this.greeting = 1;
    }
    return A;
}());
log(new A().greeting);
