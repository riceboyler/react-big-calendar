import React from 'react';
import BigCalendar from 'react-big-calendar';
import events from '../events';

export default class Advysan extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            culture: 'en',
            dayFormat: 'MM/DD'
        };
    }

    render() {
        return (
            <div {...this.props}>
                <BigCalendar
                    selectable
                    events={events}
                    defaultView="day"
                    defaultDate={ new Date() }
                    onSelectEvent={event => alert(event.title)}
                    onSelectSlot={(slotInfo) => alert(
                        `You selected \n\nstart time ${slotInfo.start.toLocaleString()} - end time ${slotInfo.end.toLocaleString()}`
                    )}
                    views={['week', 'day']}
                />
            </div>
        )
    }
}