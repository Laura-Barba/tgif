import PageLink from "../PageLink/PageLink";

export default function LinkLayout({ component, fields }) {

    return (
        <div className="py-3">
            <PageLink fields={fields} />
        </div>
    )
}
