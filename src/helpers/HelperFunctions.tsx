export const formatAriaPhoneNumber = (phoneNumber: string): string => {
    const extensionIndex = phoneNumber.toLowerCase().indexOf('x');
    const extension = extensionIndex > -1 ? ' extension ' : '';
    const formatted = phoneNumber
        .replace(/[^0-9x]/g, '') // remove anything that’s not a number or x
        .replace(/x/gi, extension); // replace x or X with extension
    return formatted.replace(/(\d)/g, '$1 '); // insert spaces after every digit
};

export const formatName = (name: string): string => {
    const formattedName = name
        .replace(/^(mr|mr\.|mrs|mrs\.|ms|ms\.|dr|dr\.|prof|rev|fr|sir|madam|sra|srta|srt|hr)\.? /i, '')
        .charAt(0)
        .toUpperCase() + name.slice(name.indexOf(' ') + 1).charAt(0).toUpperCase();
    return formattedName;
};