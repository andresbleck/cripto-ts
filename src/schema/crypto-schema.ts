import {z} from 'zod'

export const CurrencySchema = z.object({
    code:z.string(),
    name:z.string()
})

export const CryptoItemSchema = z.object({
  NAME: z.string(),
  SYMBOL: z.string()
});

export const CryptoCurrencyResponseSchema = z.object({
  LIST: z.array(CryptoItemSchema)
});

export const PairSchema = z.object({
  currency:z.string() ,
  criptocurrency:z.string()
})

export const CryptoPriceSchema =z.object({
  IMAGEURL : z.string(),
  PRICE:z.string(),
  HIGHDAY: z.string(),
  LOWDAY: z.string(),
  CHANGEPCT24HOUR:z.string(),
  LASTUPDATE:z.string()

})