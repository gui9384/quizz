import React from "react";
import Button from '@mui/material/Button';
const AnswerGrid = ({
  answers,
  setSelectedAnswerIndex,
  selectedAnswerIndex,
  timeEnd,
}) => {
  const isBoolean = answers && answers.length === 2;
   const nonSelectedButtonStyle = {
    backgroundColor: "#868686",
    fontWeight: "bold",
    width: '250px',
    margin:'10px',
    "&:hover": {
      backgroundColor: 'blue',
      color: "black",
      fontWeight: "bold",
    
    },
  };
  
   const selectedButtonStyle = {
    backgroundColor: '#0493FC',
    color: "#FFF",
    fontWeight: "bold",
    width: '250px',
    margin:'10px',
    "&:hover": {
      color: "#FFF",
      fontWeight: "bold",
     
     
    },
  };

  return (
    <div>
      <Button 
      disabled={timeEnd}
        variant="contained"
        onClick={
          isBoolean
            ? () => setSelectedAnswerIndex(1)
            : () => setSelectedAnswerIndex(0)
        }

         style={
           isBoolean
             ? selectedAnswerIndex === 1
               ? selectedButtonStyle
               : nonSelectedButtonStyle
             : selectedAnswerIndex === 0
             ? selectedButtonStyle
             : nonSelectedButtonStyle
         }
      >{isBoolean ? answers && answers[1] : answers && answers[0]}</Button>
       <br/>
      <Button 
      disabled={timeEnd}
        variant="contained"
        onClick={
          isBoolean
            ? () => setSelectedAnswerIndex(0)
            : () => setSelectedAnswerIndex(1)
        }
         style={
           isBoolean
             ? selectedAnswerIndex === 0
               ? selectedButtonStyle
               : nonSelectedButtonStyle
             : selectedAnswerIndex === 1
             ? selectedButtonStyle
             : nonSelectedButtonStyle
         }
      >{isBoolean ? answers && answers[0] : answers && answers[1]}</Button>
      <br/>
      {!isBoolean && (
        <Button 
        disabled={timeEnd}
          variant="contained"
          onClick={() => setSelectedAnswerIndex(2)}
           style={
             selectedAnswerIndex === 2
               ? selectedButtonStyle
               : nonSelectedButtonStyle
           }
        >{answers && answers[2]}</Button>
      )}
      <br/>
      {!isBoolean && (
        <Button 
        disabled={timeEnd}
          variant="contained"
          onClick={() => setSelectedAnswerIndex(3)}
           style={
             selectedAnswerIndex === 3
               ? selectedButtonStyle
               : nonSelectedButtonStyle
           }
        >{answers && answers[3]}</Button>
      )}
    </div>
  );
};

export default AnswerGrid;
