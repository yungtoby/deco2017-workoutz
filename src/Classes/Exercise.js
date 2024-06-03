/**
 * Class representing a single exercise within a workout.
 */
class Exercise {
    /**
     * Constructor for creating an exercise.
     * @param {Array<String>} muscleGroups - Muscle groups utilized
     * @param {Array<Integer>} pauseTime - Min and sec pause avg in exercise
     * @param {Array<Set>} sets - An array of the total amount of sets  
     */
    constructor(muscleGroups, pauseTime, sets){
        this.muscleGroups = muscleGroups;
        this.pauseTime = pauseTime;
        this.sets = sets;
    }
}