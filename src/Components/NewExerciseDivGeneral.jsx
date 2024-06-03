import '../Pages/NewWorkout.css'

function NewExerciseDivGeneral({toggleAddMuscleGroup, toggleAddExercise}) {
    return (
        <div className="newExerciseDiv">

            <input type="text" name="" placeholder="... Exercise name ..." />
            <button onClick={toggleAddMuscleGroup}>Add Muscle Group(s)</button>

            <div className="newExerciseOptionDiv_one">
                <input name="setReps" min="0" placeholder="Reps" type="number" />
                <input name="setWeight" min="0" placeholder="Weight" type="number" />
            </div>
            <button>Append to field and click to add pause time</button>

            <div className="newExerciseOptionDiv_two">
                <input name="setReps" min="0" placeholder="Reps" type="number" />
                <input name="setWeight" min="0" placeholder="Weight" type="number" />
                <select name="" id="">
                    <option value="KG">KG</option>
                    <option value="LBS">LBS</option>
                </select>
            </div>
            <button >Append to above and click me to add a set</button>

            <div className="setList">
                <p>Set List:</p>
                <div className="setListScroller">
                    <p>Set 1: 10 reps - 20kg</p>
                    <p>Set 2: 10 reps - 20kg</p>
                    <p>Set 3: 10 reps - 20kg</p>
                    <p>Set 4: 10 reps - 20kg</p>
                    <p>Set 5: 10 reps - 20kg</p>
                </div>
            </div>

            <button onClick={toggleAddExercise}>Save Exercise</button>
            <p id="warning">Field marked with asterisk (*) are required</p>
        </div>
    )
}

export default NewExerciseDivGeneral