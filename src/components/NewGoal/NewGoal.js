import  React  from 'react';

import './NewGoal.css';


const NewGoal = props =>{

  const  addGoalHandler =  event => {

    event.preventDefault();

     const newgoal ={
         id:Math.random().toString(),
         text:'My New Goal'
     }
     props.onAddGoal(newgoal);
    }


    return(
        <form className="new-goal" onSubmit={addGoalHandler}>
            <input type="text"/>
            <button type="submit">New Goal</button>
        </form>
    );
}

export default NewGoal