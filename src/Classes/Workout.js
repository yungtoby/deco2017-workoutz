/**
 * Class representing an entire workout
 */
export default class Workout {
    /**
     * Constructor for creating a workout.
     * @param {String} workoutName - Name of the workout
     * @param {Date} workoutDate - Date of workout
     * @param {Number} weighIn - Current user weight during workout
     * @param {String} weighInType - The weight measurement used (KG / LBS)
     * @param {String} note - Note added to workout
     * @param {Array<Exercise>} exercises - Exercises performed 
     */
    constructor(workoutID, workoutName, workoutDate, weighIn, weighInType, note, exercises){
        if (workoutID == null){
            this.workoutID = Date.now();
        } else {
            this.workoutID = workoutID; // For JSON parsing back and forth
        }
        this.workoutName = workoutName;
        this.workoutDate = workoutDate;
        this.weighIn = weighIn;
        this.weighInType = weighInType;
        this.note = note;
        this.exercises = exercises;
    }

    static fromJsonParserBackToWorkout(json){
        return new Workout(
            json.workoutID,
            json.workoutName,
            new Date(json.workoutDate),
            json.weighIn,
            json.weighInType,
            json.note,
            json.exercises
        );
    }

    /* Getters: */
    getName(){
        return this.workoutName;
    }
    getDate(){
        return this.workoutDate;
    }
    getWeighIn(){
        return this.weighIn;
    }
    getWeighInType(){
        return this.weighInType;
    }
    getNote(){
        return this.note;
    }
    getExercises(){
        return this.exercises;
    }

    /* Setters: */
    setName(setValue){
        this.workoutName = setValue;
    }
    setDate(setValue){
        this.workoutDate = setValue;
    }
    setWeighIn(setValue){
        this.weighIn = setValue;
    }
    setWeighInType(setValue){
        this.weighInType = setValue;
    }
    setNote(setValue){
        this.note = setValue;
    }
    setExercises(setValue){
        this.exercises = setValue;
    }
}