import React from "react";
import { Panel, SubTitle, Title, Text } from "../atoms";
/* Usually I would put these in a better structure like below, but I am concerned about time
components/
 - molecules/
    - index.ts
    - Header.tsx
    - Panel.tsx
*/

type HeaderProps = {
    title: string;
}
export const Header: React.FC<HeaderProps> = ({ title }) => (
    <header className="p-8 flex justify-center">
        <Title>{title}</Title>
    </header>
)
type TaxInformationProps = {
    year: number
    income: number
    tax: number
}
export const TaxInformation: React.FC<TaxInformationProps> = ({ year, income, tax }) => (
    <Panel className="w-full">
        <SubTitle>{year} Breakdown</SubTitle>
        <Text>With an Income of £{income.toLocaleString()}</Text>
        <Text>You would pay £{tax.toLocaleString()}</Text>
    </Panel>
)

type TaxDifferenceProps = {
    taxAmounts: number[],
}
export const TaxDifference: React.FC<TaxDifferenceProps> = ({ taxAmounts }) => (
    <Panel className="w-full">
        <Text>Your NI Tax Bill would have changed £{(Math.max(...taxAmounts) - Math.min(...taxAmounts)).toLocaleString()} between these tax years</Text>
    </Panel>
)