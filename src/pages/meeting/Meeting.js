import React, { useState } from 'react';
import AvailableServices from './AvailableServices';
import MeetingBanner from './MeetingBanner';

const Meeting = () => {
    const [date, setDate] = useState(new Date())

    return (
        <>
            <MeetingBanner date={date} setDate={setDate}></MeetingBanner>
            <AvailableServices date={date}></AvailableServices>
        </>
    );
};

export default Meeting;