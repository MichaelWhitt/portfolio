const generateEdgeBtnTitle = (title = 'title') => {

    return (
        <>
        {title.split('').map((item, idx) => {
            return(
                <div key={idx} className='dosis'>{item.toUpperCase()}</div>
            )
        })}
        </>
    )
}

export default generateEdgeBtnTitle