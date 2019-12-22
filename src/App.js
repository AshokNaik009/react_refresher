import React from 'react';
import './App.css';
import GoalList from './components/GoalList/GoalList';
import NewGoal from './components/NewGoal/NewGoal';


function App() {

   var courseGoals = [
     { id:'cg1' , text:'Finish the Course' },
     { id:'cg2' , text:'Do Some Sample Projects' },
     { id:'cg3' , text:'Start writing about React' },
  ];

   const addNewGoalHandler = (newgoal) =>{
    courseGoals.push(newgoal);
     console.log(courseGoals);
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
