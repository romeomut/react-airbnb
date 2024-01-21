import Box from '../box'
import Heading from '../heading'
import ListItem from '../list-item'

import './index.css'

import hasAirportShuttle from './hasAirportShuttle.svg'
import hasChildFriendly from './hasChildFriendly.svg'
import hasConciergeService from './hasConciergeService.svg'
import hasFreeBreakfast from './hasFreeBreakfast.svg'
import hasFreeWiFi from './hasFreeWiFi.svg'
import hasGym from './hasGym.svg'
import hasParking from './hasParking.svg'
import hasPetsAllowed from './hasPetsAllowed.svg'
import hasPool from './hasPool.svg'
import hasRoomService from './hasRoomService.svg'

export default function Amenities(props) {

    const amenit = {
        hasAirportShuttle: 'Трансфер до/з аеропорту',
        hasChildFriendly: 'Підходить для дітей',
        hasConciergeService: 'Консьєрж-сервіс',
        hasFreeBreakfast: 'Безкоштовний сніданок',
        hasFreeWiFi: 'Безкоштовний Wi-Fi',
        hasGym: 'Спортивний зал',
        hasParking: 'Безкоштовний вуличний паркінг',
        hasPetsAllowed: 'Дозволено розміщення з домашніми тваринами',
        hasPool: 'Басейн',
        hasRoomService: 'Обслуговування номерів',
    }

    const amenitImg = {
        hasAirportShuttle,
        hasChildFriendly,
        hasConciergeService,
        hasFreeBreakfast,
        hasFreeWiFi,
        hasGym,
        hasParking,
        hasPetsAllowed,
        hasPool,
        hasRoomService,
    }

    const content = <div className='amenities'>
        <Heading border>Зручності</Heading>

        <ul className='amenities__list'>
            {Object.keys(props.amenities).map(item => (props.amenities[item] &&
                <ListItem imageSrc={amenitImg[item]} key={amenitImg[item]}>
                    <span>{amenit[item]}</span>
                </ListItem>
            ))}
        </ul>

    </div>

    // 

    return (
        <Box children={content} shadow />
    )
}