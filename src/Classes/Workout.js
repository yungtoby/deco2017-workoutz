/**
 * Class representing an entire workout
 */
class Workout {
    /**
     * Constructor for creating a workout.
     * @param {String} workoutName - Name of the workout
     * @param {Date} workoutDate - Date of workout
     * @param {Number} weighIn - Current user weight during workout
     * @param {String} weighInType - The weight measurement used (KG / LBS)
     * @param {String} note - Note added to workout
     * @param {Array<Exercise>} exercises - Exercises performed 
     */
    constructor(workoutName, workoutDate, weighIn, weighInType, note, exercises){
        this.workoutID = Date.now();
        this.workoutName = workoutName;
        this.workoutDate = workoutDate;
        this.weighIn = weighIn;
        this.weighInType = weighInType;
        this.note = note;
        this.exercises = exercises;
    }

    getWorkout(){
        return self
    }
}