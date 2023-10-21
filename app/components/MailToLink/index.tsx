function MailToLink ({email}: any) {
    return(
        <a href={`mailto:${email}`}>{email}</a>
    )
}

export default MailToLink