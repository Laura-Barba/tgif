import { FiftyFifty } from "../Fifty-fifty"

export default function FullWidth({ component, fields }) {
    console.log('full', fields)
    return (
        <div className="ml-[calc(50%-50vw)] mr-[calc(50%-50vw)] py-3">
            <FiftyFifty fields={fields} component={component}/>
        </div>
    )
}   