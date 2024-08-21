const { IntervalQuantity } = require("./interval_quantity");

class RatioQuantity extends IntervalQuantity{

    add(other){
        let totalAmount = this._amount + this._unit.amountInThisUnit(other._amount, other._unit)
        return new RatioQuantity(totalAmount, this._unit);
    }
}

module.exports = {RatioQuantity}