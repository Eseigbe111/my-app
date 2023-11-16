import First from "./top";
import Second from "./middle";
import Third from "./down";
import './style.css'

export default function App() {
  return (
	<div className="container">
		<First />
		<Second />
		<Third />
	</div>
  );
}

