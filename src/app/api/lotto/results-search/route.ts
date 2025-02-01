import { NextResponse } from "next/server";
// TODO: Add to JSON file
const baseUrl = "https://www.lottopcso.com/pcso-lotto-result-";

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
function formatDate(dateStr: string): string {
    const [month, day, year] = dateStr.split('-');
    const date = new Date(`${year}-${month}-${day}`);
    const options = { year: 'numeric', month: 'long', day: '2-digit' } as const;
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

/**
 * @swagger
 * /api/lotto/results-search:
 *   post:
 *     tags:
 *       - Lotto
 *     summary: Fetch and parse lotto results
 *     description: Fetches lotto results for a given draw date and game, and returns the winning combination, jackpot prize, and number of winners.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               drawDate:
 *                 type: string
 *                 description: The draw date in MM-DD-YYYY format. This is the date for which the lotto results are being fetched.
 *                 example: "01-31-2025"
 *               game:
 *                 type: string
 *                 description: The name of the lotto game. This should be the specific game identifier, such as "6/55".
 *                 example: "6/58"
 *     responses:
 *       200:
 *         description: A successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: object
 *                   properties:
 *                     winningCombination:
 *                       type: string
 *                       description: The winning combination
 *                       example: "12-34-56-78-90"
 *                     jackpotPrize:
 *                       type: string
 *                       description: The jackpot prize
 *                       example: "Php 54,094,786.60"
 *                     numberOfWinners:
 *                       type: string
 *                       description: The number of winners
 *                       example: "3"
 *       400:
 *         description: Missing input(s). `drawDate` and `game` are required
 *       404:
 *         description: No results found
 */
export async function POST(request: Request) {
    // Parse the JSON payload
    const data = await request.json();
    const { drawDate, game } = data;
    // Format the raw data from the JSON payload
    const formattedDate = formatDate(drawDate);
    // Define the regex pattern to match the game results table
    const regexPattern = new RegExp("<table\\b[^>]*>(?:(?!<\\/table>).)*?" + game + "(?:(?!<\\/table>).)*?<\\/table>");

    // If drawDate is not provided, return an error
    if (!drawDate || !game) {
        return NextResponse.json({ error: "Missing input(s). `drawDate` and `game` are required" }, { status: 400 });
    }

    // Build URL
    let finalUrl = `${baseUrl}${formattedDate}/`;

    // Fetch HTML content from the URL
    const response = await fetch(finalUrl);
    // Turn response to string and log to console
    const html = await response.text();

    // Get Regex Match
    const match = html.match(regexPattern);

    // If no match, return an error
    if (!match) {
        return NextResponse.json({ error: "No results found." }, { status: 404 });
    }

    // Define regex patterns per component
    let regexWinningCombination = /<td\b[^>]*>\d+(-\d+)+<\/td>/g;
    let regexJackpotPrize = /<td\b[^>]*>Php\s\d{1,3}(,\d{3})*(\.\d{2})?<\/td>/g;
    let regexNumberOfWinners = /<td\b[^>]*>\d+<\/td>/g;

    // Get the winning combination, jackpot prize, and number of winners
    let winningCombinationMatch = match[0].match(regexWinningCombination);
    let jackpotPrizeMatch = match[0].match(regexJackpotPrize);
    let numberOfWinnersMatch = match[0].match(regexNumberOfWinners);

    // If no match, return "No data found" response
    if (!winningCombinationMatch || !jackpotPrizeMatch || !numberOfWinnersMatch) {
        return NextResponse.json({ error: "No results found." }, { status: 404 });
    }
    
    // Format the data
    let winningCombination = winningCombinationMatch[0].replace(/<td\b[^>]*>/g, "").replace(/<\/td>/g, "");
    let jackpotPrize = jackpotPrizeMatch[0].replace(/<td\b[^>]*>/g, "").replace(/<\/td>/g, "");
    let numberOfWinners = numberOfWinnersMatch[0].replace(/<td\b[^>]*>/g, "").replace(/<\/td>/g, "");
    
    // Return the data
    return NextResponse.json(
        {
            data: {
                winningCombination: winningCombination,
                jackpotPrize: jackpotPrize,
                numberOfWinners: numberOfWinners
            }
        }
    );
}