import Animate from '../../AnimateWrapper'
import { useContext } from 'react'
import { PageAnimationContext } from '../Stacker'

const XPTile = ({chosen}) => {
    let title = ''
    let link: string | JSX.Element = ''
    let date = ''
    let description = (
        <ul>
            <li>1</li>
        </ul>
    )

    const {visitedContext} = useContext(PageAnimationContext)

    const generateDescription = (arr) => {
        
        return(
            <ul id='xp-ul-container'>
                {arr.map(item => (
                    <li id='xp-li' key={item}>{item}</li>
                ))}
            </ul>
        )
    }

    const animateFirstList = () => {

        const arr = [
            'Write performant and maintainable code for ClearC2 CRM Web and Mobile projects and those of our clients, ranging from Fortune 500s to SMEs',
            'Work with a diverse set of tools that suit project needs such as React, Javascript, Typescript, Git/Github, Redux, Remix, SQL, CSS, Apache Cordova, and numerous NPM and internal packages',
            'Attend and collaborate in various internal and external meetings with people from all aspects of development and design',
            'Create and give brownbag presentations on various topics which have included Git and Code Accessibility',
            'Have received multiple bonuses for personal contributions'
        ]

        return(
            <>
                {visitedContext.second && arr.map( (child, idx) => (
                    <Animate from={{x: 50}} to={{x: 0}} delay={idx * 150} config={{duration: 500}} key={child}>
                        <li id='xp-li'>
                            {child}
                        </li>
                    </Animate>
                ))}
            </>  
        )
    }

    if (chosen === 'ClearC2') {
        title = 'Software Engineer'
        link = <a href='https://www.clearc2.com/' target='_blank' rel="noopener noreferrer" style={{color: '#a0d6b4'}}>{chosen}</a>
        date = 'October 2021 - Present'
        description = (
            <ul id='xp-ul-container'>
                {animateFirstList()}
            </ul>
        )
    }

    if (chosen === 'NuCamp') {
        title = 'Bootcamp Instructor'
        link = <a href='https://www.nucamp.co/' target='_blank' rel="noopener noreferrer" style={{color: '#a0d6b4'}}>{chosen}</a>
        date = 'June 2022 - Present'
        description = generateDescription([
            'Instruct prospective developers on various topics such as React, Redux, Javascript, HTML, CSS and more',
            'Create additional resources to help students understand more difficult concepts',
            'Help with student projects, provide general guidance and assistance, and code reviews',
            '4.95 / 5 ⭐ (50 reviews)',
            'Evening and Weekend Instruction Only'
        ])
        
    }

    if (chosen === 'Astraphos') {
        title = 'Managing Partner'
        link = <a href='https://astraphos.com/' target='_blank' rel="noopener noreferrer" style={{color: '#a0d6b4'}}>{chosen}</a>
        date = 'March 2020 - November 2021'
        description = generateDescription([
            'Website development for SMEs',
            'Work with global clients to actualize their website needs',
            'Increase traffic flow, customer sign-ups, and purchases by implementing various features via JS, HTML, CSS and plugins including chat support programs, ad and performance tracking, payment processing, accessibility features, and more',
            'Manage hosting, domains, data-backups, security, and edits'
        ])
    }

    if (chosen === 'Dreamland') {
        title = 'Founder'
        link = chosen + ' Recruiting'
        date = 'September 2017 - March 2020'
        description = generateDescription([
            'Dreamland Recruiting was a recruitment agency that sourced English teachers for schools in Asia',
            'Managed internal website development needs, marketing, accounting, recruitment, business development, and day-to-day tasks necessary to scale',
            'Established an international network of schools and teachers through various marketing techniques',
            'Partnered with a number of businesses in China to successfully develop and market educational products and curricula for children aged 4-8'
        ])
    }

    if (chosen === 'NC') {
        title = 'Full Stack Student'
        link = <a href='https://www.nucamp.co/bootcamp-overview/full-stack-web-mobile-development' target='_blank' rel="noopener noreferrer" style={{color: '#a0d6b4'}}>NuCamp</a>
        date = 'June 2021 - November 2021'
        description = generateDescription([
            '6-month bootcamp',
            'Topics included HTML, CSS, JS, React, React Native, Redux, Node, Git, Express, MongoDB, and more',
            'Collaborated with cohort members on various projects'
        ])
    }

    if (chosen === 'UNNC') {
        title = 'MSc in Business'
        link = <a href='https://www.nottingham.edu.cn/en/index.aspx' target='_blank' rel="noopener noreferrer" style={{color: '#a0d6b4'}}>University of Nottingham</a>
        date = 'August 2017 - August 2019'
        description = generateDescription([
            'Obtained MSc in Business while working on my startup, Dreamland',
            'Located in Ningbo, China',
            'Studies focused on entrepreurship and innovation management',
            'Worked with Chinese companies and citizens to collect data and analyze business trends for research purposes'
        ])
    }

    if (chosen === 'UNL') {
        title = 'BA Global Studies'
        link = <a href='https://www.unl.edu/' target='_blank' rel="noopener noreferrer" style={{color: '#a0d6b4'}}>University of Nebraska</a>
        date = '2009 - 2014'
        description = generateDescription([
            'Global Studies major with minors in Psychology and Mandarin',
            'Dean\'s List Recipient',
            'President of UNL Cultural Ambassadors',
            'Vice President of UNL Chinese Students and Scholars Association',
            'Great Plains National Security Education Community (GPNSEC) Member'
        ])
    }

    if (chosen === 'PKU') {
        title = 'Intensive Mandarin Studies'
        link = <a href='https://english.pku.edu.cn/' target='_blank' rel="noopener noreferrer" style={{color: '#a0d6b4'}}>Peking University</a>
        date = '2011 - 2012'
        description = generateDescription([
            'Intensive Mandarin Studies (Advanced)',
            'Internship at Gamewave Interactive on US Localization Team',
            'English Mentor',
            'Visited over 40 cities throughout China for supplemental studies'
        ])
    }

    return(
        <div id='xp-tile'>
            <div style={{display: 'flex', width: '100%', alignItems: 'center'}}>
                <h1 style={{color: '#fff', fontSize: 25, margin: '0'}}>
                    {title}{' @ '}<span style={{color: '#a0d6b4'}}>{link}</span>
                </h1>
                <h2 style={{color: '#aaa', fontSize: 16, marginLeft: 'auto'}}>
                    {date}
                </h2>
            </div>
            {visitedContext.second && (
                <Animate from={{opacity: 0}} to={{opacity: 1}} delay={200} config={{duration: 1000}}>
                    <hr id='hr' />
                </Animate>
            )}
            <div style={{width: '100%',  color: '#fff', wordWrap: 'break-word'}}>
                {description}
            </div>
        </div>
    )

}

export default XPTile