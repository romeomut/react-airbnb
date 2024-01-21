import './index.css'

export default function Contact(propr) {

    const { name, image, response_rate, response_time, info, phone } = propr.dat

    return (
        <div className='contact'>
            <div className='contact__top'>
                <img src={image} alt={name} className='contact__img' height={80} width={80} />

                <div className='contact__title'>
                    <h1 className='contact__title-text'>Господар - {name}</h1>
                    <div className='contact__title-sub-block'>
                        <span className='contact__title-sub-value'>{phone}</span>
                        <span className='contact__title-sub-value'>{response_time}</span>
                        <span className='contact__title-sub-value'>{response_rate} відсотків швидкості відгуку</span>
                    </div>
                </div>
            </div>
            <p className="contact_info">{info}</p>
        </div>
    )
}