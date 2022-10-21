import React from 'react'
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { correctString } from "../utils/CorrectString";

const StatusMessage = ({quizData, 
                        openStatusMessage, 
                        setOpenStatusMessage,
                        selectedAnswerIndex,
                        timeEnd, 
                    }) => {
                            
const handleClose = ( reason) => {
    if (reason === 'clickaway') {  return;  }
        setOpenStatusMessage(false);
      };
  return (
    <Snackbar open={openStatusMessage} autoHideDuration={4000} onClose={handleClose}>
            <MuiAlert onClose={handleClose} 
            severity={
            quizData[0].answers[selectedAnswerIndex] === quizData[0].correctAnswer
            
            ? "success"  : "error"
            } 
           >
           { timeEnd ?
            ` The time is finised no point !!!` 
              :
             quizData[0].answers[selectedAnswerIndex] === quizData[0].correctAnswer ?
             ` The  answer is correct !!`
             :
            ` The good answer is  ${correctString(quizData[0].correctAnswer)}`
           }
        </MuiAlert>
   </Snackbar>
  )
}

export default StatusMessage