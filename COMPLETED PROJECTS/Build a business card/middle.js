import icon from './images/Icon.png'
import linkedin from './images/Vector.png'


export default function Second() {
    return(
        <div className='second'>
            <h1>Temple Eseigbe</h1>
            <h3>Frontend Developer</h3>
            <h4><a href='https://app.netlify.com/teams/teseigbe349/overview' target='_blank'>Portfolio</a></h4>
            <button className='btn-1'><img src={icon} /><a href="mailto:temposeremen@gmail.com">Email</a></button>
            <button className='btn-2'><img src={linkedin} /><span className='t-1'><a href='https://www.linkedin.com/in/temple-eseigbe/' target='_blank'>LinkedIn</a></span></button>
            <h2 className='about'>About</h2>
            <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
            <h2>Interests</h2>
            <p className='par-2'>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
        </div>
    )
}