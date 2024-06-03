import React from 'react';
import MuscleItem from './MuscleItem';
import Exercise from '../Classes/Exercise.js';

import '../Pages/NewWorkout.css'
import back_img from '../Images/back.png'
import chest_img from '../Images/chest.png'
import legs_img from '../Images/legs.png'


function NewExerciseDivMG({toggleAddMuscleGroup}) {
    let currExercise = Exercise.fromJsonParserBackToExercise(JSON.parse(localStorage.getItem("currExercise")));

    function handleSaveClick(){
        let muscleItems = document.querySelectorAll("#muscleItem");
        let selected = [];

        muscleItems.forEach((elem) =>{
            if (elem.classList.contains("selected")){
                selected.push(elem.children[0].src);
            }
        })

        if (selected.length === 0 || selected.length > 1){
            alert("You need to choose one muscle group only!")
            return;
        }  else {
            currExercise.setMuscleGroup(selected[0])
            localStorage.removeItem("currExercise");
            localStorage.setItem("currExercise", JSON.stringify(currExercise));
            alert("Muscle group added!")

            toggleAddMuscleGroup()
        }
    }
        
    return (
        <div className="newExerciseDiv">
            <p>Select ONE muscle groups:</p>
            <div className="muscleGroupSelector">
                <MuscleItem img_src={back_img}/>
                <MuscleItem img_src={chest_img}/>
                <MuscleItem img_src={legs_img}/>
                <MuscleItem img_src={chest_img}/>
                <MuscleItem img_src={legs_img}/>
                <MuscleItem img_src={back_img}/>
                <MuscleItem img_src={legs_img}/>
                <MuscleItem img_src={back_img}/>
                <MuscleItem img_src={chest_img}/>
            </div>
            <button onClick={handleSaveClick}>Save selection</button>
        </div>
    )
}

export default NewExerciseDivMG;