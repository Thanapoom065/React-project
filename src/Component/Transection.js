import Item from './item'
import './Transcetion.css'


const Transcetion = (props) => {
    const {items} = props

    return (
        <>
        <ul className='item-list'>
            {items.map((element) => {
                return <Item {...element} key={element.id}/>
            })}
        </ul>
        </>
    )
}
export default Transcetion;