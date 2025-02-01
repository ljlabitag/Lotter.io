const BASE_URL = 'https://www.lottopcso.com/pcso-lotto-result-';

module.exports = {
    fetchResultPageHTML: async (urlAttachment) => {
        // Build the final URL
        const finalUrl = `${BASE_URL}${urlAttachment}/`;
        // Fetch HTML content from the URL
        const response = await fetch(finalUrl);
        // Turn response to string and log to console
        return await response.text();

    }
}