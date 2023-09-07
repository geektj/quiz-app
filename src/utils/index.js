export const STATUS = {
    NOT_VISITED: 'not-visited',
    VISITED: 'visited',
    NOT_ANSWERED: 'not-answered',
}

export const getStatus = (data) => {
    let status = '';
    if (!data?.visited && !data?.selectedAnswer) {
        status = STATUS.NOT_VISITED;
    } else if (data?.visited && !data?.selectedAnswer) {
        status = STATUS.NOT_ANSWERED;
    } else if (data?.visited && data?.selectedAnswer) {
        status = STATUS.VISITED;
    }

    return status;
}