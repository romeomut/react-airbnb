import React from 'react'
import Heading from '../heading'

import './index.css'
import Box from '../box'

export default function GuestReviews({ list }) {
    return (
        <div className='guestreviews__block'>
            <Heading>Відгуки клієнтів</Heading>
            <div className='guestreviews__list'>
                {list.map(({ id, ...rest }) => (
                    <React.Fragment key={id}>
                        <Item {...rest} />
                    </React.Fragment>
                ))}
            </div>
        </div>
    )
}

function Item({ guestName, rating, review }) {
    return (
        <Box className='guestreviews'>
            <div className='guestreviews__top'>
                <span className='guestreviews__title'>{guestName}</span>
                <span className='guestreviews__rate'>Рейтинг: {rating}</span>
            </div>

            <span className='guestreviews__info'>{review}</span>
        </Box>
    )
}