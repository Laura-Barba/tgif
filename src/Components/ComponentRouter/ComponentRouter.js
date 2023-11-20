import { EventLayout } from "../EventLayout"
import { FiftyFifty } from "../Fifty-fifty"
import { Heading } from "../Heading"
import { BookTechMentorForm } from "../BookTechMentorForm"
import { Hero } from "../Hero"
import { LinkLayout } from "../LinkLayout"
import { Date } from "../Date"
import { FullWidth } from "../FullWidth"
import { PageLink } from "../PageLink"
import { Navigation } from "../Navigation"
import { NotFound } from "../Not found"
import { RichText } from "../RichText"
import Sidebar from "../Sidebar/Sidebar"

export default function ComponentRouter({ component, fields }) {
    console.log('ComponentRouter', component)
    const components = () => {
        switch (component) {
            case "eventLayout":
                return <EventLayout
                    component={component}
                    fields={fields}
                />
            case "fiftyFifty":
                return <FiftyFifty
                    component={component}
                    fields={fields} />
            case "heading":
                return <Heading
                    component={component}
                    fields={fields} />
            case "mailForm":
                return <BookTechMentorForm
                    component={component}
                    fields={fields}
                />
            case "hero":
                return <Hero
                    component={component}
                    fields={fields}
                />
            case "linkLayout":
                return <LinkLayout
                    component={component}
                    fields={fields}
                />
            case "date":
                return <Date
                    component={component}
                    fields={fields}
                />
            case "fullWidthLayout":
                return <FullWidth
                    component={component}
                    fields={fields}
                />
            case "pagelink":
                return <PageLink
                    component={component}
                    fields={fields}
                />
            case "navigation":
                return <Navigation
                    component={component}
                    fields={fields}
                />
            case "richText":
                return <NotFound
                    component={component}
                    fields={fields} />
            case "notFound":
                return <RichText
                    component={component}
                    richText={fields} />
            case "sidebar":
                return <Sidebar
                    component={component}
                    richText={fields} />
            default: return
                <div>no component</div>
            // not component found i console.log inte visa i sidan. 
        }
    }

    return (
        // switch case to rendera ut components
        <div className="w-full xl:w-3/5 xl:mx-auto">
            {/* {component && (
                <>
                    <EventLayout
                        component={component}
                        fields={fields}
                    />
                </>
            )} */}
            {components()}
        </div>
    )
}