import React from "react";
/* Usually I would put these in a better structure like below, but I am concerned about time
components/
 - atoms/
    - index.ts
    - Title.tsx
    - Text.tsx
*/

export const Title: React.FC = ({ children }) => (<h1 className="text-3xl">{children}</h1>)

export const SubTitle: React.FC = ({ children }) => (<h2 className="text-xl">{children}</h2>)

export const Text: React.FC = ({ children }) => (<p>{children}</p>)

type InputProps<T> = {
    onChange: (newValue: T) => void,
    prefix?: React.ReactChild
    suffix?: React.ReactChild
    value: T
}
type TextInputProps = InputProps<string>
export const TextInput: React.FC<TextInputProps> = ({ onChange, prefix, suffix, value }) => (<span className="focus-within:border-slate-900 rounded border-slate-200 border-2 rounded py text-lg">
    {prefix}
    <input className="outline-none bg-transparent px-2" prefix="$" onChange={({ target: { value } }) => onChange(value)} value={value} />
    {suffix}
</span>
)

// TODO: complex logic to allow for input like `"50,000.24"` and output `55000.24` with localisation
type NumberInputProps = InputProps<number>
export const NumberInput: React.FC<NumberInputProps> = ({ onChange, prefix, suffix, value }) => (<span className="focus-within:border-slate-900 rounded border-slate-200 border-2 rounded py text-lg">
    {prefix}
    <input step={0.01} type={'number'} className="outline-none bg-transparent px-2 appearance-none" inputMode={"numeric"} prefix="$" onChange={({ target: { value } }) => onChange(Number(value))} value={value} />
    {suffix}
</span>
)

type ButtonProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
export const Button: React.FC<ButtonProps> = (props) => (<button  {...props} className="px-4 py-2 text-white font-bold rounded bg-slate-900 hover:bg-slate-600 focus:bg-slate-900" />)

type PanelProps = { className?: string }
export const Panel: React.FC<PanelProps> = ({ children, className = "" }) => <div className={`p-4 ${className}`}>
    <div className="border rounded border-solid border-slate-200 p-4 text-center">
        {children}
    </div>
</div>