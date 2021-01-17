import { daysFromCreatedDate, numFormatter } from 'utils/utils';

describe('Test utils methods', () => {
    it('Should return the diference in days from a given date and the current date', () => {
        const givenDate = 'Sat Jan 10 2021 09:10:45 GMT+0000 (Western European Standard Time)';
        const todaysDateMock = 'Sat Jan 01 2021 09:10:45 GMT+0000 (Western European Standard Time)';

        expect(daysFromCreatedDate(givenDate, todaysDateMock)).toEqual(9);
    });

    it('Should return a number as a string when it is < 1000', () => {
      const givenNumber = 300;

      expect(numFormatter(givenNumber)).toEqual('300');
  });

  it('Should return a number + K (1k) as a string when it is >= 1000', () => {
    const givenNumber = 1000;

    expect(numFormatter(givenNumber)).toEqual('1k');
});

it('Should return a number with decimal + K (1k) as a string when it is >= 1000 & has hundreds defined (5600)', () => {
  const givenNumber = 5600;

  expect(numFormatter(givenNumber)).toEqual('5.6k');
});

});
