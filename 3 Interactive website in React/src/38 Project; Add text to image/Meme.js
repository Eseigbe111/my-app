import React from "react"
import memesData from "./memesData.js"

export default function Meme() {
    /**
     * Challenge: 
     * 1. Set up the text inputs to save to
     *    the `topText` and `bottomText` state variables.
     * 2. Replace the hard-coded text on the image with
     *    the text being saved to state.
     */
    
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg" 
    })
    
    
    
    
    const [allMemeImages, setAllMemeImages] = React.useState(memesData)
    
    
    function getMemeImage() {
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
        
    }
    function handleChange(event){
        const {name, value} = event.target
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                [name] : value
            }
        })
    }

    return (
        <main>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    onChange={handleChange}
                    name="topText"
                    value={meme.topText}
                    className="form--input"
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    onChange={handleChange}
                    name="bottomText"
                    value={meme.bottomText}
                    className="form--input"
                />
                <button 
                    className="form--button"
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                </button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}