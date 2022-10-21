
export async function FetchData({setLoading, setQuizData,setCounterTime,setIsPlaying}) {
    setLoading(true)
    try {
      const response = await fetch( 'https://opentdb.com/api.php?amount=1')
      const data = await response.json();
      setLoading(false)
      setCounterTime(prevKey => prevKey +1)
      setIsPlaying(true)
       setQuizData(
       data.results.map((object, index) => {
                  return {
                    questionNumber: index,
                   question: object.question,
                    answers: object.incorrect_answers
                     .concat(object.correct_answer)
                      .sort(),
                    correctAnswer: object.correct_answer,
                    selectedAnswerIndex: null,
                 };
                }),
       )
    } catch (error) {
      console.log("Error: " + error);
    }
}
