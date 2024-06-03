/**
 * Class representing a single set within an exercise.
 * (Named Excs_Set to not be confused with built-in JS Set datatype)
 */
class Excs_Set {
    /**
     * Constructor for creating an "exercise" set.
     * @param {Integer} reps - Number of reps
     * @param {Integer} weight - Weight during the set
     * @param {String} weightType - KG or LBS
     */
    constructor(reps, weight, weightType) {
        this.reps = reps;
        this.weight = weight;
        this.weightType = weightType;
    }
}