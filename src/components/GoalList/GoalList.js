import React from 'react';
import './GoalList.css';

const GoalList = (props) => {
    return(
        <ul className="goal-list">
            {
                props.goals.map((goals) =>{
                    return <li key={goals.id}>{goals.text}</li>       
                })
            }
        </ul>
    );
};

export default GoalList;