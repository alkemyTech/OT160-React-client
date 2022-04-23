import React from 'react'

export default function ActivitiesContent({ activityContent }) {

    return (
        <>
            <div dangerouslySetInnerHTML={{ __html: activityContent }} />
        </>
    )
}
