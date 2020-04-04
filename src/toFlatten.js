Object.defineProperty(Array.prototype, 'toFlatten', {
    value: function() { 
        return [].concat(this).reduce(function (flat, toFlatten) {
            return flat.concat(Array.isArray(toFlatten) ? toFlatten.toFlatten(toFlatten) : toFlatten);
        }, []);   
    }
});

module.exports = Array;