import { formatAriaPhoneNumber } from './HelperFunctions';

describe('formatAriaPhoneNumber', () => {
  it('converts the api phone numbers', () => {
    expect(formatAriaPhoneNumber('1-463-123-4447')).toBe('1 4 6 3 1 2 3 4 4 4 7');
    expect(formatAriaPhoneNumber('(254)954-1289')).toBe('2 5 4 9 5 4 1 2 8 9');
    expect(formatAriaPhoneNumber('024-648-3804')).toBe('0 2 4 6 4 8 3 8 0 4');
    expect(formatAriaPhoneNumber('1-477-935-8478 x6430')).toBe('1 4 7 7 9 3 5 8 4 7 8 extension 6 4 3 0');
    expect(formatAriaPhoneNumber('1-447-9356-8428 x7410')).toBe(
      '1 4 4 7 9 3 5 6 8 4 2 8 extension 7 4 1 0'
    );
    expect(formatAriaPhoneNumber('1-447-9356 8428 x7410')).toBe('1 4 4 7 9 3 5 6 8 4 2 8 extension 7 4 1 0');
    expect(formatAriaPhoneNumber('010-692-6593 x09125')).toBe(
      '0 1 0 6 9 2 6 5 9 3 extension 0 9 1 2 5'
    );
    expect(formatAriaPhoneNumber('(775)976-6794 x41206')).toBe('7 7 5 9 7 6 6 7 9 4 extension 4 1 2 0 6');
    expect(formatAriaPhoneNumber('210.067.6132')).toBe('2 1 0 0 6 7 6 1 3 2');
    expect(formatAriaPhoneNumber('586.493.6943 x140')).toBe('5 8 6 4 9 3 6 9 4 3 extension 1 4 0');
    expect(formatAriaPhoneNumber('493-170-9623 x156')).toBe('4 9 3 1 7 0 9 6 2 3 extension 1 5 6');
  })
});
