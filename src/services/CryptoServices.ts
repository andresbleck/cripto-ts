import axios from "axios"
import { CryptoCurrencyResponseSchema, CryptoPriceSchema } from "../schema/crypto-schema"
import type { Pair } from "../types"

export async function getCryptos() {
    const url = 'https://data-api.coindesk.com/asset/v1/top/list?page=1&page_size=20&sort_by=CIRCULATING_MKT_CAP_USD&sort_direction=DESC&groups=ID,BASIC,SUPPLY,PRICE,MKT_CAP,VOLUME,CHANGE,TOPLIST_RANK&toplist_quote_asset=USD'
    const {data : {Data}} = await axios(url)
    
    
   const result = CryptoCurrencyResponseSchema.safeParse(Data)
    if (!result.success) {
    console.error(result.error.format())
    return []
  }

  return result.data.LIST
}

export async function fetchCurrencyCryptoPrice(pair:Pair){
  const url =`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${pair.criptocurrency}&tsyms=${pair.currency}`
  const {data :{DISPLAY}} = await axios(url)
  const result = CryptoPriceSchema.safeParse(DISPLAY[pair.criptocurrency][pair.currency])
  if(result.success){
    return result.data
  }
}