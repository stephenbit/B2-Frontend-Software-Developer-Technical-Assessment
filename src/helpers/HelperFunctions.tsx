export const formatAriaPhoneNumber = (phoneNumber: string): string => {
  const extension = phoneNumber.match(/[xX]/) ? 'extension ' : '';
  const formatted = phoneNumber
      .replace(/[^0-9x]/g, '') // remove anything that’s not a number or x
      .replace(/[xX]/g, extension) // replace x or X with extension
      .replace(/(\d)/g, '$1 '); // insert spaces after every one digit
  return formatted.trim();
};






export const formatName = (name: string): string => {
  const removeTitlesRegex =
    /^(mr|mr.|mrs|mrs.|ms|ms.|dr|dr.|prof|rev|fr|sir|madam|sra|srta|srt|hr).? /i;
  const formattedName = name
    .replace(removeTitlesRegex, '')
    .charAt(0)
    .toUpperCase() + name.slice(name.indexOf(' ') + 1).charAt(0).toUpperCase();
  return formattedName;
};


