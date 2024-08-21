class IntervalQuantity{
    constructor(amount, unit){
        this._amount = amount;
        this._unit = unit;
    }

    equals(other){
        return this._unitsAreCompatible(other) &&
               this._amountsInBaseUnitAreEqual(other);
    }

    _amountsInBaseUnitAreEqual(other) {
        return this._amount ==
            this._unit.amountInThisUnit(other._amount, other._unit);
    }

    _unitsAreCompatible(other) {
        return this._unit.isCompatibleWith(other._unit);
    }
}

module.exports = {IntervalQuantity}