import Box from '../box'
import Heading from '../heading'
import ListItem from '../list-item'

import './index.css'

import people from './people.svg'
import bedroom from './bedroom.svg'
import bed from './bed.svg'
import bathroom from './bathroom.svg'

export default function RoomDetails({ guests, bedrooms, beds, baths }) {

    const content = <div className='room-details'>
        <Heading border>Деталі властивості:</Heading>
        <List guests={guests} bedrooms={bedrooms} beds={beds} baths={baths} />
    </div>

    return (
        <Box children={content} shadow />
    )
}

function List({ guests, bedrooms, beds, baths }) {
    return (
        <ul className='room-details__list'>

            <ListItem imageSrc={people}>
                <span>{guests}</span><span>гості</span>
            </ListItem>

            <ListItem imageSrc={bedroom}>
                <span>{bedrooms}</span><span>спальня</span>
            </ListItem>

            <ListItem imageSrc={bed}>
                <span>{beds}</span><span>ліжко</span>
            </ListItem>

            <ListItem imageSrc={bathroom}>
                <span>{baths}</span><span>ванна кімната</span>
            </ListItem>

        </ul>
    )
}