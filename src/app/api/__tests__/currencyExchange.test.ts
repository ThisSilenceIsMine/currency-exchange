import { getRate } from '../currencyExchange';

describe('getRate()', () => {
  it('returns rates for "USD" and "GBP" without errors', async () => {
    const targetCurrency = 'GBP';
    const baseCurrency = 'USD';

    const rates = await getRate(baseCurrency, targetCurrency);

    expect(rates).toBeTruthy();
  });
  it('throws error with invalid inputs', async () => {
    await expect(getRate('asdasqw', '102*a/xwe')).rejects.toThrow();
  });
});
