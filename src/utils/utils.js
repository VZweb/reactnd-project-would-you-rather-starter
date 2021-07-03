export function answeredQuestions (questions, user) {
    let questionsArray = Object.values(questions).filter(filter_questionsWithResponses)

    let filteredAnsweredQuestions = questionsArray.filter(question => question.optionOne.votes.includes(user) || question.optionTwo.votes.includes(user));

    const filteredAnsweredQuestionsSorted = filteredAnsweredQuestions.sort(function (a, b) {
        if (a.timestamp > b.timestamp) {
          return -1;
        } else if (a.timestamp < b.timestamp) {
          return 1;
        }
        return 0;
      });

    return filteredAnsweredQuestionsSorted
}

export function unansweredQuestions (questions, user) {
    let questionsArray = Object.values(questions)

    let filteredUnansweredQuestions = questionsArray.filter(question => !question.optionOne.votes.includes(user) && !question.optionTwo.votes.includes(user));

    const filteredUnnsweredQuestionsSorted = filteredUnansweredQuestions.sort(function (a, b) {
        if (a.timestamp > b.timestamp) {
          return -1;
        } else if (a.timestamp < b.timestamp) {
          return 1;
        }
        return 0;
      });

    return filteredUnnsweredQuestionsSorted
}

function filter_questionsWithResponses(question) {
    return question.optionOne.votes.length > 0 || question.optionTwo.votes.length > 0;
}

export function isQuestionAnswered (optionOne, optionTwo, user) {
    let combinedOptions = optionOne.votes.concat(optionTwo.votes)
    return combinedOptions.includes(user)
}

