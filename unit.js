const {RatioQuantity} = require("./ratio_quantity");
const {IntervalQuantity} = require("./interval_quantity");

class Unit{
    constructor(ratioToRelativeUnit = 1, relativeUnit, offset = 0){
        if (relativeUnit) {
            this._baseUnit = relativeUnit._baseUnit;
            this._ratioToBaseUnit = ratioToRelativeUnit * relativeUnit._ratioToBaseUnit;
        } else {
            this._baseUnit = this;
            this._ratioToBaseUnit = ratioToRelativeUnit 
        }
        this._offset = offset;
    }

    amountInThisUnit(otherAmount, otherUnit){
        if (!this.isCompatibleWith(otherUnit)){
            throw new TypeError("Incompatible Units");
        }
        return (otherAmount - otherUnit._offset) * otherUnit._ratioToBaseUnit / this._ratioToBaseUnit + this._offset;
    }

    isCompatibleWith(other){
        return this._baseUnit === other._baseUnit;
    }
}

class RatioUnit extends Unit{
    s(amount){
        return new RatioQuantity(amount, this);
    }
}

class IntervalUnit extends Unit{
    s(amount){
        return new IntervalQuantity(amount, this);
    }
}

module.exports = {Unit, RatioUnit, IntervalUnit}