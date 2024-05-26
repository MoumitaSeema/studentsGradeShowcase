const Input = ({ type = "text", id, className, ...attributes }) => {
    return (
        <input type={type} id={id} className={className} {...attributes} />
    )
}

export default Input