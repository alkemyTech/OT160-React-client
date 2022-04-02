import React from 'react'

export default function ActivitiesContent({ activities }) {

    return (
        <>

            <div dangerouslySetInnerHTML={{ __html: activities }} />

        </>
    )
}
