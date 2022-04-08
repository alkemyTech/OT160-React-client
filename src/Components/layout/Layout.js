import React from 'react'

export default function Layout(props) {

    const content = ["navbar", "footer"];

    return (
        <>
            {content[0]}

            {props.children}

            {content[1]}
        </>
    )
}
