import { CurrencySchema,PairSchema, CryptoItemSchema, CryptoPriceSchema } from "../schema/crypto-schema";
import {z} from 'zod'

export type Currency = z.infer<typeof CurrencySchema>
//export type Cryptocurrency =z.infer<typeof CryptoCurrencyResponseSchema>
export type Cryptocurrency =z.infer<typeof CryptoItemSchema>

export type Pair= z.infer<typeof PairSchema>

export type CryptoPrice = z.infer<typeof CryptoPriceSchema>