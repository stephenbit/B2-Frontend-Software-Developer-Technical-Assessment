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
    /^(mr|mr.|mrs|mrs.|ms|ms.|dr|dr.|prof|rev|fr|sir|madam|sra|srta|srt|hr).? /i;
  const formattedName = name
    .replace(removeTitlesRegex, '')
    .charAt(0)
    .toUpperCase() + name.slice(name.indexOf(' ') + 1).charAt(0).toUpperCase();
  return formattedName;
};

export const searchUsers = (users: UsersListUser[], searchTerm: string): UsersListUser[] => {
  return users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
};


