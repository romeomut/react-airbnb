import Box from '../box'
import Heading from '../heading'
import ListItem from '../list-item'

import './index.css'

const restruct = (object) => {

    let newObject = {}

    for (const key in object) {

        if (Array.isArray(object[key])) {
            newObject[key] = object[key].toString().replaceAll(',', ', ')
            continue
        }

        newObject[key] = object[key]
    }

    return newObject
}

// 

export default function Additional(props) {

    const additional = {
        house_rules: "Правила дому",
        cancellation_policy: "Політика скасування",
        local_transportation: "Місцевий транспорт",
        host_languages: 'Мови хоста',
        special_offers: "Спеціальні пропозиції:",
        'check-in_instructions': "Інструкції щодо реєстрації",
    }

    const newObject = restruct(props.add)


    const content = <div className='additional'>
        <Heading border>Додаткові властивості</Heading>

        <ul className='additional__list'>
            {Object.keys(newObject).map(item => (
                <ListItem title={additional[item]} key={additional[item]}>
                    <span>{newObject[item]}</span>
                </ListItem>
            ))}
        </ul>
    </div>

    return (
        <Box children={content} shadow />
    )
}

