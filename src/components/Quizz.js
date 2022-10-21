import React, {  useState } from "react";
import { correctString } from "../utils/CorrectString";
import CountDown from './CountDown';
import Question from "./Question";
import Answer from './Answer';
import NavButtons from "./NavButtons";
import StatusMessage from "./StatusMessage";
import { FetchData} from '../API/FetchData';

const Quizz = () => {
  const [start, setStart] = useState(true);
  const [loading, setLoading] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [counterTime, setCounterTime] = useState(15);
  const [score, setScore] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(1);
  const [quizzAnswer, setQuizzAnswer] = useState('');
  const [openStatusMessage, setOpenStatusMessage] = useState(false);
  const [timeEnd, setTimeEnd] = useState(false)
  const [quizData, setQuizData] = useState(null);
  const selectedAnswerIndex =
  quizData &&
  quizData[0] &&
  quizData[0].selectedAnswerIndex;


const setSelectedAnswerIndex = (selectedAnswerIndex) =>
  setQuizData(
    quizData.map((object, index) =>
      index === 0
        ? { ...quizData[0], selectedAnswerIndex }
        : object
    )
  );
   function handleStart() { 
  FetchData( {setLoading, setQuizData, setCounterTime, setIsPlaying})
  setStart(false);
}

 return (
    <div >
    {start &&
    <button onClick={handleStart} className= {start ? 'start' : 'notStart'}>Start</button>
    }
  
    {!loading ? (
        quizData && quizData.length > 0 && (
         <div className="container">
         <CountDown 
           isPlaying = {isPlaying}
           setIsPlaying = {setIsPlaying}
           counterTime   = {counterTime}
           setCounterTime   = {setCounterTime}
           setTimeEnd = {setTimeEnd}
         />
          <Question
            title={` ${
            quizData[0] &&
            correctString(quizData[0].question)
            }`}
              />
          <Answer
            answers={
              quizData[0] &&
              quizData[0].answers.map((_) =>
              correctString(_)
              )
            }
              selectedAnswerIndex={selectedAnswerIndex}
              setSelectedAnswerIndex={setSelectedAnswerIndex}
              timeEnd = {timeEnd}
            />
           
            <NavButtons   
              setOpenStatusMessage = {setOpenStatusMessage}
              setIsPlaying = {setIsPlaying}
              setCounterTime   = {setCounterTime}
              quizData = {quizData}
              setQuizData = {setQuizData}
              selectedAnswerIndex = {selectedAnswerIndex}
              setSelectedAnswerIndex = {setSelectedAnswerIndex}
              setQuizzAnswer = {setQuizzAnswer}
              score = {score}
              setScore = {setScore}
              totalQuestions ={totalQuestions}
              setTotalQuestions ={setTotalQuestions}
              setTimeEnd = {setTimeEnd}
              timeEnd = {timeEnd}
              setLoading = {setLoading}
             
            />
            {openStatusMessage &&
            <StatusMessage
              quizData = {quizData}
              quizzAnswer = {quizzAnswer}
              openStatusMessage = {openStatusMessage}
              setOpenStatusMessage = {setOpenStatusMessage}
              isPlaying = {isPlaying}
              selectedAnswerIndex ={selectedAnswerIndex}
              timeEnd = {timeEnd}
              setTimeEnd = {setTimeEnd}
            />
            }
              <span className="score">{score}/{totalQuestions} </span>  
            </div>
        )
    )
    :
    (
      <div className="loading">Loading ....</div>
    )
    }
   
    </div>
  );
};

export default Quizz;
