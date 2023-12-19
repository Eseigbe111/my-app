import React from "react"
import memesData from "./memesData"


export default function Meme(){
   
    const [meme, setMeme] = React.useState({
        topText:"",
        bottomText:"",
        randomImage:"https://i.imgflip.com/1ur9b0.jpg"
    })

    
    const [allMemes, setAllMemes] = React.useState([]) // the reason we use allMemes is because apart from images it gets from API it also gets the id, height, width etc of the memes

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes") 
            .then(res => res.json())
            .then(item => setAllMemes(item.data.memes))
    }, [])



    function getMemesImage(){
        setMeme(prevMeme => {
            const randomIndex = Math.floor(Math.random() * allMemes.length)
            const randomUrl = allMemes[randomIndex].url

            return {
                ...prevMeme,
                randomImage:randomUrl
            }

    })
        console.log(meme)
    }

    function handleChange(event){
        const {name, value} = event.target
        setMeme(prevMeme => (
            {
                ...prevMeme,
            [name] : value
        }
        ))
    }

    

    return(
        <main>
            <div>
                <input 
                    type="text"
                    placeholder="Top text"
                    onChange={handleChange}
                    name="topText"
                    value={meme.topText}
                />

                <input 
                    type="text" 
                    placeholder="Bottom text"
                    onChange={handleChange}
                    name="bottomText"
                    value={meme.bottomText}
                />
            </div>
            <div>
                <button onClick={getMemesImage}>
                Get a new meme image 🖼️
                </button>
                <img src={meme.randomImage} width='40%'/>
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}