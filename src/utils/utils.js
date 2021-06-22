export function answeredQuestions (questions, user) {
    let questionsArray = Object.values(questions).filter(filter_questionsWithResponses)

    let filteredAnsweredQuestions = questionsArray.filter(question => question.optionOne.votes.includes(user) || question.optionTwo.votes.includes(user));

    return filteredAnsweredQuestions
}

export function unansweredQuestions (questions, user) {
    let questionsArray = Object.values(questions)

    let filteredUnansweredQuestions = questionsArray.filter(question => !question.optionOne.votes.includes(user) && !question.optionTwo.votes.includes(user));

    return filteredUnansweredQuestions
}

function filter_questionsWithResponses(question) {
    return question.optionOne.votes.length > 0 || question.optionTwo.votes.length > 0;
}

