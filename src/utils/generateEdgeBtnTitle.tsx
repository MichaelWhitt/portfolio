const generateEdgeBtnTitle = (title = 'title') => {

    return (
        <>
        {title.split('').map((item, idx) => {
            return(
                <div key={idx}>{item}</div>
            )
        })}
        </>
    )
}

export default generateEdgeBtnTitle