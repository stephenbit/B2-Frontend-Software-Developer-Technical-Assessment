import { UsersListUser } from "./Types";

export const formatAriaPhoneNumber = (phoneNumber: string): string => {
  const extension = phoneNumber.match(/[xX]/) ? 'extension ' : '';
  const formatted = phoneNumber
    .replace(/[^0-9x]/g, '')
    .replace(/[xX]/g, extension)
    .replace(/(\d)/g, '$1 ');
  return formatted.trim();
};


export const formatNameWithoutTitles = (name: string): string => {
  const removeTitlesRegex =
    /^(mr|mr\.|mrs|mrs\.|ms|ms\.|dr|dr\.|prof|rev|fr|sir|madam|sra|srta|srt|hr|rv)\.? /i;
  const formattedName = name.replace(removeTitlesRegex, '');
  return formattedName;
};

export const searchUsers = (users: UsersListUser[],
  searchTerm: string): UsersListUser[] => {
  if (searchTerm === undefined || null) {
    return users;
  }
  return users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
};
