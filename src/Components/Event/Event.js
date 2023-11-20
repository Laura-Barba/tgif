import { Person } from "../Person"
import { Tag } from "../Tag"

export default function Event({ events }) {
    return (
        <div className="text-black">
            {events?.map((event, i) => {
                return (
                    <>
                        <div className="bg-white mb-5 rounded-3xl md:rounded-full flex py-5 md:py-2.5 flex-col md:flex-row" key={i}>
                            <Person persons={event.fields.persons} />
                            <div className="flex flex-col justify-center pl-5 pr-5 lg:pl-0">
                                <div className="flex flex-col text-center pb-0 md:pb-3 md:text-left">
                                
                                        <div className="uppercase font-bold text-lg md:text-2xl pr-0 md:pr-5 text-xl">{event.fields.eventName}</div>
                        
                                    <div className="text-sm md:text-lg py-3">{event.fields.eventDescription}</div>
                                </div>
                                <Tag tags={event.fields.tags} />
                            </div>
                        </div>
                    </>
                )
            })}
        </div>
    )
}