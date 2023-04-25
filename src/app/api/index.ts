import { curry } from 'ramda'
// tRPC would be great here
export type NITaxYear = "2018-04-06" | "2019-04-06"
type FetchBodyPayload = { income: number }
type FetchHeaderPayload = { 'x-run-date': NITaxYear }
type FetchResponseType = {
    income: string, taxYear: string, ni: string
}
export type NationalInsuranceDataType = {
    income: number,
    taxYear: string,
    ni: number
}
export const calculateNationalInsurance = curry(async (taxYear: NITaxYear, income: number): Promise<NationalInsuranceDataType> => {
    const fetchBody: FetchBodyPayload = { income: income };
    const fetchHeader: FetchHeaderPayload = { "x-run-date": taxYear }
    const response = await fetch(`/v1/national-insurance`, {
        body: JSON.stringify(fetchBody), headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            ...fetchHeader
        }, method: "POST"
    })
    const json = (await response.json()) as FetchResponseType

    return {
        income: parseFloat(json.income),
        taxYear,
        ni: parseFloat(json.ni)
    }
})
