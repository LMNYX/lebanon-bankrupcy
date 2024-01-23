import Output from "@utils/output";
import { convertCurrency } from "@utils/currency";
import { clickForPalestine } from "@utils/lebanon";

Output.Log("Starting lebanon attack center...");

let currentBank = 0;
let lbpWorth = 0;
let threads = [];

async function clickerThread()
{
    await clickForPalestine();
    currentBank++;
    Output.Log(`${('+' + lbpWorth + ' USD').red} :: Total ${currentBank.toString().red} LBP (${currentBank * lbpWorth} USD)`);
}

(async ()=>
{

    let goofyDuckDuckGoRegex = /(ddg_spice_currency\((.*)\);)/g;

    let _lbpWorth = await convertCurrency('LBP', 'USD');
    _lbpWorth = _lbpWorth.replaceAll('\n', '');
    _lbpWorth = goofyDuckDuckGoRegex.exec(_lbpWorth);
    if (_lbpWorth < 3)
    {
        lbpWorth = 0.0000666508;
        Output.Log("Defaulting to old value, because duckduckgo is trolling...");   
    }
    _lbpWorth = JSON.parse(_lbpWorth[2]);
    lbpWorth = _lbpWorth['to'][0]['mid'];

    Output.Log(`Currently 1 LBP is worth: ${lbpWorth.toString().red} USD.`);

    currentBank = 0;

    let amountOfThreads = 5;

    for (let i = 0; i < amountOfThreads; i++)
        threads.push(setInterval(clickerThread, 1333));

})().catch(Output.Error);