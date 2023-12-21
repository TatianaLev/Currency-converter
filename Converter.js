const RATES={
    usd: 0.014,
    eur: 0.013
};

function convert({rub, currency}){
    if (!RATES[currency]) {
        returnnull;
    }

    return rub * RATES[currency];
}