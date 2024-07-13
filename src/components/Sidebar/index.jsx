import Logo from '../Logo'
import './sidebar.css'

const Sidebar = ()=>{
    const options = ['option1','option2','option3','option4','option5']
    
    return(
        <ul className='sidebar'>
            <Logo></Logo>
            {options.map(option=>
                <div className='option' key={option}>{option}</div>
            )}
            
        </ul>
    )
}

export default Sidebar