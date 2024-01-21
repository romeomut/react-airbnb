import Box from '../box'
import Heading from '../heading'
import ListItem from '../list-item'

import './index.css'


export default function NearBy(props) {

    const content = <div className='nearby'>
        <Heading border>Пам'ятки поблизу</Heading>
        <ul className='nearby__list'>
            {props.dat.map(({ id, name, link }) =>
                <ListItem key={id}>
                    <a href={link} className='nearby__link' target='_blank' rel="noreferrer">{name}</a>
                </ListItem>
            )}
        </ul>
    </div>

    return (
        <Box children={content} shadow />
    )
}