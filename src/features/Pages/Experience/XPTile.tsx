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

    const animateXPList = (arr: string[]) => {

        return(
            <>
                {visitedContext.second && arr.map( (child, idx) => (
                    <ul id='xp-ul-container' key={idx}>
                        <Animate from={{x: 50, opacity:0}} to={{x: 0, opacity:1}} delay={idx * 100} config={{duration: 200}} key={child}>
                            <li id='xp-li'>
                                <span style={{display: 'block', marginTop: 9}}>
                                    <span id='list-bullet' />
                                </span>
                                {child}
                            </li>
                        </Animate>
                    </ul>
                ))}
            </>  
        )
    }

    if (chosen === 'ClearC2') {
        title = 'Software Engineer'
        link = <a href='https://www.clearc2.com/' target='_blank' rel="noopener noreferrer" style={{color: '#a0d6b4'}}>{chosen}</a>
        date = 'October 2021 - Present'
        description = animateXPList([
            'Write performant and maintainable code for ClearC2 CRM Web and Mobile projects and those of our clients, notably a Fortune 500 telecommunications company',
            'Features I have developed include dynamic recursive tree displays, global toast messaging systems, two-factor authentication, dark mode, excel importing, etc.',
            'Work with a diverse set of tools that suit project needs such as React, Remix, Javascript, Typescript, Git/Github, Redux, HTML, CSS, Apache Cordova, AG-Grid, and numerous NPM and internal packages',
            'Create and give brownbag presentations on various topics which have included Git, Code Accessibility, HTMX, and Svelte',
            'Have received multiple bonuses for personal contributions'
        ])
    }

    if (chosen === 'NuCamp') {
        title = 'Bootcamp Instructor'
        link = <a href='https://www.nucamp.co/' target='_blank' rel="noopener noreferrer" style={{color: '#a0d6b4'}}>{chosen}</a>
        date = 'June 2022 - Present'
        description = animateXPList([
            'Instruct prospective developers on various topics such as React, Redux, Javascript, HTML, CSS and hosting projects with Firebase',
            'Create additional resources to help students understand more difficult concepts',
            'Help with student projects, provide general guidance and assistance, and code reviews',
            '4.91 / 5 ⭐ (143 reviews)',
            'Evening and Weekend Instruction Only'
        ])
        
    }

    if (chosen === 'Astraphos') {
        title = 'Managing Partner'
        link = <a href='https://astraphos.com/' target='_blank' rel="noopener noreferrer" style={{color: '#a0d6b4'}}>{chosen}</a>
        date = 'March 2020 - November 2021'
        description = animateXPList([
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
        description = animateXPList([
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
        description = animateXPList([
            '6-month bootcamp',
            'Topics included HTML, CSS, JS, React, React Native, Redux, Node, Git, Express, MongoDB, and more',
            'Collaborated with cohort members on various projects'
        ])
    }

    if (chosen === 'UNNC') {
        title = 'MSc'
        link = <a href='https://www.nottingham.edu.cn/en/index.aspx' target='_blank' rel="noopener noreferrer" style={{color: '#a0d6b4'}}>University of Nottingham</a>
        date = 'August 2017 - August 2019'
        description = animateXPList([
            'Obtained MSc in Business while working on my startup, Dreamland',
            'Located in Ningbo, China',
            'Studies focused on entrepreurship and innovation management',
            'Worked with Chinese companies and citizens to collect data and analyze business trends for research purposes'
        ])
    }

    if (chosen === 'UNL') {
        title = 'BA'
        link = <a href='https://www.unl.edu/' target='_blank' rel="noopener noreferrer" style={{color: '#a0d6b4'}}>University of Nebraska</a>
        date = '2009 - 2014'
        description = animateXPList([
            'Global Studies major with minors in Psychology and Mandarin',
            'Dean\'s List Recipient',
            'President of UNL Cultural Ambassadors',
            'Vice President of UNL Chinese Students and Scholars Association',
            'Great Plains National Security Education Community (GPNSEC) Member'
        ])
    }

    if (chosen === 'PKU') {
        title = 'Mandarin Studies'
        link = <a href='https://english.pku.edu.cn/' target='_blank' rel="noopener noreferrer" style={{color: '#a0d6b4'}}>Peking University</a>
        date = '2011 - 2012'
        description = animateXPList([
            'Intensive Mandarin Studies (Advanced)',
            'Internship at Gamewave Interactive on US Localization Team',
            'English Mentor',
            'Visited over 40 cities throughout China for supplemental studies'
        ])
    }

    return(
        <div id='xp-tile'>
            <div id='xp-tile-title-container'>
                <h1 id='xp-tile-title' style={{color: '#fff', fontSize: 25, margin: 0}}>
                    {title}{' @ '}<span style={{color: '#a0d6b4'}}>{link}</span>
                </h1>
                <h2 id='xp-tile-title-date' style={{color: '#aaa', fontSize: 16, marginLeft: 'auto'}}>
                    {date}
                </h2>
            </div>
            {visitedContext.second && (
                <Animate from={{opacity: 0}} to={{opacity: 1}} delay={200} config={{duration: 1000}}>
                    <hr id='hr' />
                </Animate>
            )}
            <div id='xp-tile-description' style={{width: '100%',  color: '#fff', wordWrap: 'break-word'}}>
                {description}
            </div>
        </div>
    )

}

export default XPTile