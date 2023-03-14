import {
  formatAriaPhoneNumber,
  formatNameWithoutTitles,
  searchUsers
} from './HelperFunctions';
import { TestData } from './TestData'
import { IUser, UsersListUser } from './Types'

const users = TestData

describe('formatAriaPhoneNumber', () => {
  it('converts the api phone numbers', () => {
    expect(formatAriaPhoneNumber(users[0].phone)).toBe('1 4 6 3 1 2 3 4 4 4 7');
    expect(formatAriaPhoneNumber(users[1].phone)).toBe('2 5 4 9 5 4 1 2 8 9');
    expect(formatAriaPhoneNumber(users[2].phone)).toBe('0 2 4 6 4 8 3 8 0 4');
    expect(formatAriaPhoneNumber(users[3].phone)).toBe('1 4 7 7 9 3 5 8 4 7 8 extension 6 4 3 0');
    expect(formatAriaPhoneNumber(users[4].phone)).toBe('1 4 4 7 9 3 5 6 8 4 2 8 extension 7 4 1 0');
    expect(formatAriaPhoneNumber(users[5].phone)).toBe('1 4 4 7 9 3 5 6 8 4 2 8 extension 7 4 1 0');
    expect(formatAriaPhoneNumber(users[6].phone)).toBe('0 1 0 6 9 2 6 5 9 3 extension 0 9 1 2 5');
    expect(formatAriaPhoneNumber(users[7].phone)).toBe('7 7 5 9 7 6 6 7 9 4 extension 4 1 2 0 6');
    expect(formatAriaPhoneNumber(users[8].phone)).toBe('2 1 0 0 6 7 6 1 3 2');
    expect(formatAriaPhoneNumber(users[9].phone)).toBe('5 8 6 4 9 3 6 9 4 3 extension 1 4 0');
    expect(formatAriaPhoneNumber(users[10].phone)).toBe('4 9 3 1 7 0 9 6 2 3 extension 1 5 6');
  })
});

describe('formatNameWithoutTitles', () => {
  it('removes "Mr" from name', () => {
    const formatted = formatNameWithoutTitles(users[0].name);
    expect(formatted).toBe('John Doe');
  });

  it('removes "Rv" from name', () => {
    const formatted = formatNameWithoutTitles(users[1].name);
    expect(formatted).toBe('Jane Doe');
  });

  it('removes "Fr" from name', () => {
    const formatted = formatNameWithoutTitles(users[2].name);
    expect(formatted).toBe('Bob Smith');
  });

  it('removes "Dr" from name', () => {
    const formatted = formatNameWithoutTitles(users[5].name);
    expect(formatted).toBe('Bruce Wayne');
  });

  it('removes "madam" from name', () => {
    const formatted = formatNameWithoutTitles(users[7].name);
    expect(formatted).toBe('Natasha Romanoff');
  });
});

describe('searchUsers', () => {

  it('is case insensitive', () => {
    const result = searchUsers(users, 'aLiCe');
    expect(result).toEqual([
      {
        'id': 4,
        'name': 'Alice Johnson',
        'phone': '1-477-935-8478 x6430',
        'email': '',
        'username': '',
        'website': '',
        'address': {
          'street': '',
          'suite': '',
          'city': '',
          'zipcode': '',
          'geo': {
            'lat': '',
            'lng': ''
          },
        },
        'company': {
          'name': '',
          'catchPhrase': '',
          'bs': ''
        }
      },
    ]);
  });

  it('returns an empty array if no users match the searchTerm', () => {
    const result = searchUsers(users, 'x');
    expect(result).toEqual([]);
  });
});
