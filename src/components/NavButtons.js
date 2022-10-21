import React from 'react';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { FetchData} from '../API/FetchData';
const NavButtons = ({
                    setOpenStatusMessage, 
                    setIsPlaying,
                    setCounterTime,
                    quizData,
                    setQuizData,
                    selectedAnswerIndex, 
                    setSelectedAnswerIndex,
                    setQuizzAnswer,
                    score, setScore,
                    totalQuestions,setTotalQuestions,
                    setTimeEnd,
                    timeEnd,
                    setLoading,
                    
                     }) => {

  function handleStart() { 
          FetchData( {setLoading, setQuizData, setCounterTime, setIsPlaying})
  }
 

    const onClickNextButton = () => {
        setTimeEnd(false)
        quizData[0].selectedAnswerIndex || quizData[0].selectedAnswerIndex === 0 ?
        setSelectedAnswerIndex(quizData[0].selectedAnswerIndex)
        : setSelectedAnswerIndex(null)      
        quizData[0].answers[selectedAnswerIndex] === quizData[0].correctAnswer && timeEnd === false &&
        setScore(score + 1)
        setTotalQuestions(totalQuestions + 1)
        setQuizzAnswer(quizData[0].correctAnswer)
        handleStart()
      };
  return (
    <div>
      <ArrowCircleRightIcon
        onClick={() => {
          setOpenStatusMessage(true)
          setIsPlaying(false)
          setTimeout(() => onClickNextButton() , 5000);
        }}
        sx={{ fontSize: "8vh", color: "#0493FC" }}
      />
        </div>
  )
}

export default NavButtons