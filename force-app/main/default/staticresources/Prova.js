window._WrapperOrdiniDiLavoro = (function() {
    var value = 0; // private

    return { //public API
        increment: function() {
            value = value + 1;
            return value;
        },
s
        getValue: function() {
            return value;
        }
    };
}());