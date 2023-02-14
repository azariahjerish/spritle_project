var expression = function (number, operation) {
            if (!operation)
                return number;
            return operation(number);
        }
        function zero(operation) { return expression(0, operation) }
        function one(operation) { return expression(1, operation) }
        function two(operation) { return expression(2, operation) }
        function three(operation) { return expression(3, operation) }
        function four(operation) { return expression(4, operation) }
        function five(operation) { return expression(5, operation) }
        function six(operation) { return expression(6, operation) }
        function seven(operation) { return expression(7, operation) }
        function eight(operation) { return expression(8, operation) }
        function nine(operation) { return expression(9, operation) }
        
        function plus(a) {
            return (b) => {
                return b + a;
            }
        }
        function minus(a) {
            return  (b) => {
                return b - a;
            }
        }
        function times(a) {
            return (b) => {
                return a * b;
            }
        }
        function divided_by(a) {
            return (b) => {
                return b / a;
            }
        }

console.log(seven(times(five())));
console.log(eight(minus(three())));
console.log(eight(minus(three())));
console.log(six(divided_by(two())));

var str = "nine(times(five()))";

console.log(eval(str));