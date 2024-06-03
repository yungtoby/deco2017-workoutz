/**
 * Class representing a single exercise within a workout.
 */
export default class Exercise {
    /**
     * Constructor for creating an exercise.
     * @param {String} exerciseName - Name of the exercise
     * @param {String} muscleGroup - Muscle group utilized
     * @param {Array<Integer>} pauseTime - Min and sec pause avg in exercise
     * @param {Array<Set>} sets - An array of the total amount of sets  
     */
    constructor(exerciseName, muscleGroup, pauseTime, sets=[]){
        this.exerciseName = exerciseName;
        this.muscleGroup = muscleGroup;
        this.pauseTime = pauseTime;
        this.sets = sets;
    }

    /**
     * Static parser func for making object out of
     * newly parsed JSON string.
     * @param {Parsed JSON obj} json 
     * @returns 
     */
    static fromJsonParserBackToExercise(json){
        return new Exercise(
            json.exerciseName,
            json.muscleGroup,
            json.pauseTime,
            json.sets
        );
    }

    /* Getters: */
    getName(){
        return this.exerciseName;
    }
    getMuscleGroup(){
        return this.muscleGroup;
    }
    getPauseTime(){
        return this.pauseTime;
    }
    getSets(){
        return this.sets
    }

    /* Setters: */
    setName(setValue){
        this.exerciseName = setValue;
    }
    setMuscleGroup(setValue){
        this.muscleGroup = setValue;
    }
    setPauseTime(setValue){
        this.pauseTime = setValue;
    }
    appendSet(setValue){
        this.sets.push(setValue);
    }
}