import { CurrencySchema,PairSchema, CryptoItemSchema } from "../schema/crypto-schema";
import {z} from 'zod'

export type Currency = z.infer<typeof CurrencySchema>
//export type Cryptocurrency =z.infer<typeof CryptoCurrencyResponseSchema>
export type Cryptocurrency =z.infer<typeof CryptoItemSchema>

export type Pair= z.infer<typeof PairSchema>