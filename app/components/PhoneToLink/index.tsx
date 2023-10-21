function PhoneToLink ({phone}: any) {
    return(
        <a href={`tel:${phone}`}>{phone}</a>
    )
}

export default PhoneToLink