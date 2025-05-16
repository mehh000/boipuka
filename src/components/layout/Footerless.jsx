
import React from 'react'
import Navber from '../Navber'

function Footerless(
    { children }
) {
    return (<>
        <Navber />
        {children}
    </>

    )
}

export default Footerless