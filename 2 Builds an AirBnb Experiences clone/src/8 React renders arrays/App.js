import './style.css'
import Joke from './Joke'

/*
Challenge: turn the strings in the array into <h3> elements instead
*/

export default function App() {
    const colors = [<h3>Red</h3>, <h3>Orange</h3>, <h3>Yellow</h3>, <h3>Green</h3>, <h3>Blue</h3>, <h3>Indigo</h3>, <h3>Violet</h3>]
    return (
        <div>
        	{colors}
        </div>
    )
}




/*export default function App() {
    return(
        <div>
            <Joke
            	Setup="I got my daughter a fridge for her birthday."
            	Punchline="I can't wait to see her face light up when she opens it."
            
            />

			<Joke 
				Setup="How did the hacker escape the police?"
				Punchline="He just ransomware!"
			/>

			<Joke 
				Setup= "Why don't pirates travel on mountain roads?"
				Punchline= "Scurvy."

			/>

			<Joke 
				Setup= "Why do bees stay in the hive in the winter?"
				Punchline="Swarm."

			/>

			<Joke 
				Setup= "What's the best thing about Switzerland?"
				Punchline= "I don't know, but the flag is a big plus!"

			/>

        </div>
    )
}*/