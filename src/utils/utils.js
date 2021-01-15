import moment from 'moment';

export const daysFromCreatedDate = (date) => {
    const todaysDate = moment(new Date());
    return Math.abs(moment(date).diff(todaysDate, 'days'));
};
