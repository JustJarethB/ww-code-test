import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { calculateNationalInsurance, NationalInsuranceDataType } from "./api";
import { Button, NumberInput, SubTitle, Panel, Text } from "./components/atoms";
import { Header, TaxDifference, TaxInformation } from "./components/molecules";

const App = () => {
  useDispatch()
  const [income, setIncome] = useState(0);
  const [taxFrom2018, setTaxFrom2018] = useState<NationalInsuranceDataType>();
  const [taxFrom2019, setTaxFrom2019] = useState<NationalInsuranceDataType>();

  const [calcTax2018, calcTax2019] = (['2018-04-06', '2019-04-06'] as const).map(d => calculateNationalInsurance(d))

  const fetchNIForIncome = async () => {
    if (isNaN((income))) {
      return alert("Error: Invalid Number Provided")
    }
    const [res18, res19] = await Promise.all([calcTax2018, calcTax2019].map(calc => calc(((income)))))
    setTaxFrom2018(res18);
    setTaxFrom2019(res19);

  }

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    fetchNIForIncome()
  }
  return (
    <main className="container mx-auto">
      <Header title="NI Panel" />
      <hr />
      <Panel>
        <SubTitle>See A NI Breakdown Of:</SubTitle>
        <form onSubmit={handleSubmit}>
          <div className="py-4">
            <NumberInput value={income} prefix={"£"} onChange={setIncome} />
          </div>
          <div>
            <Button type="submit">See Difference</Button>
          </div>
        </form>
      </Panel>
      <div className="flex">
        {
          taxFrom2018 && (
            <TaxInformation year={2018} income={taxFrom2018.income} tax={taxFrom2018.ni} />
          )
        }
        {
          taxFrom2019 && (
            <TaxInformation year={2019} income={taxFrom2019.income} tax={taxFrom2019.ni} />
          )
        }
      </div>
      {
        taxFrom2018 && taxFrom2019 && (
          <TaxDifference taxAmounts={[taxFrom2018.ni, taxFrom2019.ni]} />
        )
      }

    </main>
  );
};


export default App;
