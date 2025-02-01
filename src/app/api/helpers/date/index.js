module.exports = {
    /**
     * Formats a date string from "MM-DD-YYYY" to "month-dd-yyyy".
     * 
     * @param {string} dateStr - The date string in "MM-DD-YYYY" format.
     * @returns {string} - The formatted date string in "month-dd-yyyy" format.
     * 
     * The function performs the following steps:
     * 1. Parses the input date string.
     * 2. Converts the date to a "month dd, yyyy" format.
     * 3. Replaces spaces with dashes and converts the month to lowercase.
     * 4. Removes leading zeros from single-digit days.
     */
    formatDate: (dateStr) => {
        const [month, day, year] = dateStr.split('-');
        const date = new Date(`${year}-${month}-${day}`);
        const options = { year: 'numeric', month: 'long', day: '2-digit' };
        let locale = date.toLocaleDateString('en-US', options).replace(',', '');
        // replace all spaces with dashes
        locale = locale.replace(/\s/g, '-');
        // lower case first letter
        locale = locale.charAt(0).toLowerCase() + locale.slice(1);
        // if day value is less than 10, remove leading zero
        if (parseInt(day, 10) < 10) {
            locale = locale.replace(/-0/g, '-');
        }
        return locale;
    }
}