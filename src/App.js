import React, {useState} from 'react';
import './App.css';
import GoalList from './components/GoalList/GoalList';
import NewGoal from './components/NewGoal/NewGoal';


function App() {

    const [courseGoals,setCourseGoals] = useState( [
      { id:'cg1' , text:'Finish the Course' },
      { id:'cg2' , text:'Do Some Sample Projects' },
      { id:'cg3' , text:'Start writing about React' },
   ])
   


   const addNewGoalHandler = (newgoal) =>{
      //  setCourseGoals(courseGoals.concat(newgoal));
      //Method to be used when state update rely on already existing values 
      setCourseGoals(prevCourseGoals => prevCourseGoals.concat(newgoal));
    }


  return (
    <div className="course-goals"> 
      <h2>Course Goals</h2>
      <NewGoal onAddGoal={addNewGoalHandler}></NewGoal>
      <GoalList goals={courseGoals}></GoalList> 
    </div>
  );
}

export default App;
