import axios from "axios"
import { CryptoCurrencyResponseSchema } from "../schema/crypto-schema"
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

export async function fetchCurrencyCryptoPrice(pair: Pair) {
  // Posibles formatos de URL a probar:
  // 1. Siguiendo el patrón del endpoint de forex que funciona
  const url1 = `https://data-api.coindesk.com/index/cc/v1/latest/tick/crypto?instruments=${pair.criptocurrency}-${pair.currency}`
  
  // 2. Otra variante común en APIs
  const url2 = `https://data-api.coindesk.com/index/cc/v1/latest/tick?instruments=${pair.criptocurrency}%2F${pair.currency}&type=crypto`
  
  // 3. Formato con separador diferente
  const url3 = `https://data-api.coindesk.com/index/cc/v1/latest/tick/crypto/${pair.criptocurrency}-${pair.currency}`
  
  try {
    // Prueba con la primera opción
    const {data} = await axios(url1)
    console.log('Respuesta exitosa:', data)
    return data
  } catch (error1) {
    console.log('URL1 falló, probando URL2...')
    
    // Si falla, prueba la segunda opción
    try {
      const {data} = await axios(url2)
      console.log('Respuesta exitosa en URL2:', data)
      return data
    } catch (error2) {
      console.error('Todas las URLs probadas fallaron')
      console.error('Error URL1:')
      console.error('Error URL2:')
      return null
    }
  }
}