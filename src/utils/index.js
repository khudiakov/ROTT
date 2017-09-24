// @flow

const dateToString = (date: Date) => {
    if (date.getTime() === 0) {
        return 'No Activities';
    }

    let result: string = '';

    let seconds: number = Math.floor(date.getTime() / 1000);

    const hours: number = Math.floor(seconds / 3600);
    if (hours > 0) {
        result += hours + ' h. ';
    }
    seconds %= 3600;

    const minutes: number = Math.floor(seconds / 60);
    if (minutes > 0 || hours !== 0) {
        result += minutes + ' min. ';
    }
    seconds %= 60;

    if (seconds >= 0 || minutes !== 0 || hours !== 0) {
        result += seconds + ' sec.';
    }

    return result;
};

export default { dateToString };
