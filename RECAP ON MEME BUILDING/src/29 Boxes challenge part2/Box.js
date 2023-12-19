export default function Box(props){
    console.log(props.On)
    const styles ={
        backgroundColor: (props.On)? "#222222" : 'none'
    }
    return(
        <div className="box" key={props.id} style={styles}></div>
    )
}