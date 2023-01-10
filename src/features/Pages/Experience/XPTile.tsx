import { ReactFragment } from "react"

const XPTile = ({chosen}) => {
    console.log(chosen)
    let title = ''
    let link: string | JSX.Element = ''
    let date = ''
    let description = (
        <ul>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
        </ul>
    )

    if (chosen === 'ClearC2') {
        title = 'Software Engineer'
        link = <a href='https://www.clearc2.com/' target='_blank' rel="noopener noreferrer" style={{color: '#a0d6b4'}}>{chosen}</a>
        date = 'October 2021 - Present'
        description = (
            <ul>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
            </ul>
        )
    }

    if (chosen === 'NuCamp') {
        title = 'Bootcamp Instructor'
        link = <a href='https://www.nucamp.co/' target='_blank' rel="noopener noreferrer" style={{color: '#a0d6b4'}}>{chosen}</a>
        date = 'June 2022 - Present'
        description = (
            <ul>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
            </ul>
        )
    }

    if (chosen === 'Astraphos') {
        title = 'Managing Partner'
        link = <a href='https://astraphos.com/' target='_blank' rel="noopener noreferrer" style={{color: '#a0d6b4'}}>{chosen}</a>
        date = 'March 2020 - November 2021'
        description = (
            <ul>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
            </ul>
        )
    }

    if (chosen === 'Dreamland') {
        title = 'Founder'
        link = chosen + ' Recruiting'
        date = 'September 2017 - March 2020'
        description = (
            <ul>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
            </ul>
        )
    }

    if (chosen === 'NC') {
        title = 'Full Stack Student'
        link = <a href='https://www.nucamp.co/bootcamp-overview/full-stack-web-mobile-development' target='_blank' rel="noopener noreferrer" style={{color: '#a0d6b4'}}>NuCamp</a>
        date = 'June 2021 - November 2021'
        description = (
            <ul>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
            </ul>
        )
    }

    if (chosen === 'UNNC') {
        title = 'MSc in Business'
        link = <a href='https://www.nottingham.edu.cn/en/index.aspx' target='_blank' rel="noopener noreferrer" style={{color: '#a0d6b4'}}>University of Nottingham</a>
        date = 'August 2017 - August 2019'
        description = (
        <ul>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
        </ul>
    )
    }

    if (chosen === 'UNL') {
        title = 'BA Global Studies'
        link = <a href='https://www.unl.edu/' target='_blank' rel="noopener noreferrer" style={{color: '#a0d6b4'}}>University of Nebraska</a>
        date = '2009 - 2014'
        description = (
        <ul>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
        </ul>
    )
    }

    if (chosen === 'PKU') {
        title = 'Intensive Mandarin Studies'
        link = <a href='https://english.pku.edu.cn/' target='_blank' rel="noopener noreferrer" style={{color: '#a0d6b4'}}>China's Premier University, Peking University</a>
        date = '2011 - 2012'
        description = (
        <ul>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
        </ul>
    )
    }

    return(
        <div id='xp-tile'>
            <h1 style={{color: '#fff', fontSize: 20}}>
                {title}{' @ '}<span style={{color: '#a0d6b4'}}>{link}</span>
            </h1>
            <h2 style={{color: '#aaa', fontSize: 16, marginTop: -10}}>
                {date}
            </h2>
            <div style={{width: '100%',  color: '#fff', wordWrap: 'break-word'}}>
                {description}
            </div>
        </div>
    )

}

export default XPTile