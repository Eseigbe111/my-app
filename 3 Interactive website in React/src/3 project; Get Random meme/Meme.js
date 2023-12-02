import memesData from "./memesData"



export default function Meme() {

    
    /**
     * Challenge: Get a random image from the `memesData` array
     * when the "new meme image" button is clicked.
     * 
     * Log the URL of the image to the console. (Don't worry
     * about displaying the image yet)
     */
    
    
    function getRandomImage(){
        const memearray = memesData.data.memes
        const randomNum = Math.floor(Math.random() * memearray.length)
        const randomIndex = memearray[randomNum]
        const randomImage = randomIndex.url
        return randomImage
    }

    return (
        <main>
            <form>
                <input type='text' 
                    placeholder="Top text"
                    className="form--input"
                />
                <input type='text' 
                    placeholder="Bottom text"
                    className="form--input"
                />
                <button className="form--button" onClick={getRandomImage}>Get a new meme image 🖼</button>
            </form>
        </main>
    )
}