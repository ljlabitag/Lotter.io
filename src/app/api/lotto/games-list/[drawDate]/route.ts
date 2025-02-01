import { NextResponse } from "next/server";
import { formatDate } from "../../../helpers/date/index.js";
import { fetchResultPageHTML } from "../../../helpers/externalFetch/index.js";


/**
 * @swagger
 * tags:
 *   - name: Lotto
 *     description: Endpoints related to Lotto results and games
 * /api/lotto/games-list/{drawDate}:
 *   get:
 *     tags:
 *       - Lotto
 *     summary: Fetch and parse lotto game list
 *     description: Fetches the list of lotto games for a given draw date.
 *     parameters:
 *       - in: path
 *         name: drawDate
 *         required: true
 *         schema:
 *           type: string
 *           format: date
 *           example: "01-31-2025"
 *         description: The draw date in MM-DD-YYYY format.
 *     responses:
 *       200:
 *         description: A successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       gameCode:
 *                         type: string
 *                         description: The game code
 *                         example: "6/58"
 *                       gameName:
 *                         type: string
 *                         description: The full game name
 *                         example: "6/58 Ultra Lotto"
 *       400:
 *         description: Missing drawDate parameter
 *       404:
 *         description: No lotto games found for the given draw date
 *       500:
 *         description: Internal Server Error
 */
export async function GET(request: Request, { params }: { params: Promise<{ drawDate: string }> }) {
    try {
        const { drawDate } = await params;

        if (!drawDate) {
            return NextResponse.json({ error: 'Missing drawDate parameter' }, { status: 404 });
        }

        const formattedDate = formatDate(drawDate);
        
        // Fetch HTML data from external source (lottopcso.com)
        let html = await fetchResultPageHTML(formattedDate);

        // Define the regex pattern to match the game results table
        let regexPattern = /<th\b[^>]*>(?:<strong>)?6\/\d{2} .*?Lotto(?:<\/strong>)?<\/th>/g;
        // Array to store the results
        let result = [];
    
        // Loop through the matches
        do {
            let match = html.match(regexPattern);
            // If no match, break the loop
            if (!match) {
                break;
            }
            // Get the exact match
            let exact = match[0]
            
            // Remove <th> and <strong> tags
            let gameName = exact.replace(/<th\b[^>]*>/g, "").replace(/<\/th>/g, "")
                .replace(/<strong>/g, "").replace(/<\/strong>/g, "");
            // Remove "_ Lotto" from the game name
            let gameCode = gameName.replace(/ (.* )*Lotto/g, "");
            // Push the data to the result array
            result.push({gameCode: gameCode, gameName: gameName});
            // Remove the exact match from the HTML
            html = html.replace(exact, '');
        } while (regexPattern.exec(html));

        if (result.length === 0) {
            return NextResponse.json({ error: 'No lotto games found for draw date: ' + formattedDate }, { status: 404 });
        }


        // Return the data
        return NextResponse.json(
            {
                data: result
            }
        );
    } catch (error) {
        return NextResponse.json({ error: "Internal Server Error: " + error.message }, { status: 500 });
    }
}