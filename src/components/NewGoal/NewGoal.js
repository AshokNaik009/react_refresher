import  React ,{useState} from 'react';

import './NewGoal.css';


const NewGoal = props =>{

    const [enteredText,setenteredText] = useState('');

  const  addGoalHandler =  event => {

    event.preventDefault();

     const newgoal ={
         id:Math.random().toString(),
         text:enteredText
     }

     setenteredText('');

     props.onAddGoal(newgoal);
    }


    const onTextChangeHandler = event => {
        setenteredText(event.target.value);
    }

    return(
        <form className="new-goal" onSubmit={addGoalHandler}>
            <input type="text"  value={enteredText}  onChange={onTextChangeHandler} />
            <button type="submit">New Goal</button>
        </form>
    );
}

export default NewGoal