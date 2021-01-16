import { daysFromCreatedDate } from 'utils/utils';

describe('Test utils methods', () => {
    it('Should return the diference in days from a given date and the current date', () => {
        const givenDate = 'Sat Jan 10 2021 09:10:45 GMT+0000 (Western European Standard Time)';
        const todaysDateMock = 'Sat Jan 01 2021 09:10:45 GMT+0000 (Western European Standard Time)';

        expect(daysFromCreatedDate(givenDate, todaysDateMock)).toEqual(9);
    });
});
