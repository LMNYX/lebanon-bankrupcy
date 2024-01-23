import axios from "axios";

export async function convertCurrency(from: string, to: string)
{
    let result = await axios.get(`https://duckduckgo.com/js/spice/currency/1/${from}/${to}`);

    if (result.status != 200)
        return false;

    return result.data;
}