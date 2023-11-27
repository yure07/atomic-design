import React, { useState } from "react"

const withRadius = (Component1, Component2) => {
    const HocComponent = React.forwardRef((props, ref) => {
        const [showSpan, setShowSpan] = useState(false)

        const handleFocus = (e) => {
            e.target.style.borderColor = '#fff'
            e.target.style.borderRadius = '8px'
            setShowSpan(!showSpan)
        }

        return(
            <div>
                <Component1 {...props} onFocus={handleFocus}/>
                {showSpan ? <Component2 /> : <></>}
            </div>
        )
    })

    return HocComponent
}

export default withRadius 