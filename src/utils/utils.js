import moment from 'moment';

export const daysFromCreatedDate = (date, todaysDate) => {
    return Math.abs(moment(date).diff(todaysDate, 'days'));
};
