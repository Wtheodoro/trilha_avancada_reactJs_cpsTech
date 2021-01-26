import MostraGIF from '../../components/MostraGIF'
import Button from '../../components/Button'
import { useState } from 'react'

function Main() {

    const [gif, setGif] = useState(false)

    const showGif = () => {
        setGif(true)
    }

    const unShowGif = () => {
        setGif(false)
    }
    return (
        <>
        
        {gif &&
            <div onClick={unShowGif}>
                <MostraGIF />
            </div>
        }
        
        <div onClick={showGif}>
            <Button />
        </div>
        </>
    )
    
}

export default Main