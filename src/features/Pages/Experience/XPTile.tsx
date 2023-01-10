import { ReactFragment } from "react"

const XPTile = ({chosen}) => {
    let title = ''
    let link: string | JSX.Element = ''
    let date = ''
    let description = (
        <ul>
            <li>1</li>
        </ul>
    )

    if (chosen === 'ClearC2') {
        title = 'Software Engineer'
        link = <a href='https://www.clearc2.com/' target='_blank' rel="noopener noreferrer" style={{color: '#a0d6b4'}}>{chosen}</a>
        date = 'October 2021 - Present'
        description = (
            <ul id='xp-ul-container'>
                <li>Write performant and maintainable code for ClearC2 CRM Web and Mobile projects and those of our clients, ranging from Fortune 500s to SMEs</li>
                <li>Work with a diverse set of tools that suit project needs such as React, Javascript, Typescript, Git/Github, Redux, Remix, SQL, CSS, Apache Cordova, and numerous NPM and internal packages</li>
                <li>Attend and collaborate in various internal and external meetings with people from all aspects of development and design</li>
                <li>Create and give brownbag meetings on various topics which have included Git and Code Accessibility </li>
                <li>Have received multiple bonuses for team and project contributions</li>
            </ul>
        )
    }

    if (chosen === 'NuCamp') {
        title = 'Bootcamp Instructor'
        link = <a href='https://www.nucamp.co/' target='_blank' rel="noopener noreferrer" style={{color: '#a0d6b4'}}>{chosen}</a>
        date = 'June 2022 - Present'
        description = (
            <ul id='xp-ul-container'>
                <li>Instruct prospective developers on various topics such as React, Redux, Javascript, HTML, CSS and more</li>
                <li>Create additional resources to help students understand more difficult concepts</li>
                <li>Help with student projects, provide general guidance and assistance, and code reviews</li>
                <li>4.95 / 5 ⭐ (50 reviews)</li>
                <li>Evening and Weekend Instruction Only</li>
            </ul>
        )
    }

    if (chosen === 'Astraphos') {
        title = 'Managing Partner'
        link = <a href='https://astraphos.com/' target='_blank' rel="noopener noreferrer" style={{color: '#a0d6b4'}}>{chosen}</a>
        date = 'March 2020 - November 2021'
        description = (
            <ul id='xp-ul-container'>
                <li>Website development for SMEs</li>
                <li>Work with global clients to actualize their website needs.</li>
                <li>Increase traffic flow, customer sign-ups, and purchases by implementing various features via JS, HTML, CSS and plugins including chat support programs, ad and performance tracking, payment processing, accessibility features, and more.</li>
                <li>Manage hosting, domains, data-backups, security, and edits.</li>
            </ul>
        )
    }

    if (chosen === 'Dreamland') {
        title = 'Founder'
        link = chosen + ' Recruiting'
        date = 'September 2017 - March 2020'
        description = (
            <ul id='xp-ul-container'>
                <li>Dreamland Recruiting was a recruitment agency that sourced English teachers for schools in Asia.</li>
                <li>Managed internal website development needs, marketing, accounting, recruitment, business development, and day-to-day tasks necessary to scale</li>
                <li>Established an international network of schools and teachers through various marketing techniques.</li>
                <li>Partnered with a number of businesses in China to successfully develop and market educational products and curricula for children aged 4-8. </li>
            </ul>
        )
    }

    if (chosen === 'NC') {
        title = 'Full Stack Student'
        link = <a href='https://www.nucamp.co/bootcamp-overview/full-stack-web-mobile-development' target='_blank' rel="noopener noreferrer" style={{color: '#a0d6b4'}}>NuCamp</a>
        date = 'June 2021 - November 2021'
        description = (
            <ul id='xp-ul-container'>
                <li>6-month bootcamp</li>
                <li>Topics included HTML, CSS, JS, React, React Native, Redux, Node, Git, Express, MongoDB, and more</li>
                <li>Collaborated with cohort members on various projects</li>
            </ul>
        )
    }

    if (chosen === 'UNNC') {
        title = 'MSc in Business'
        link = <a href='https://www.nottingham.edu.cn/en/index.aspx' target='_blank' rel="noopener noreferrer" style={{color: '#a0d6b4'}}>University of Nottingham</a>
        date = 'August 2017 - August 2019'
        description = (
            <ul id='xp-ul-container'>
                <li>Obtained MSc in Business while working on my startup, Dreamland</li>
                <li>Located in Ningbo, China</li>
                <li>Studies focused on entrepreurship and innovation management</li>
                <li>Worked with Chinese companies and citizens to collect data and analyze business trends for research purposes</li>
            </ul>
    )
    }

    if (chosen === 'UNL') {
        title = 'BA Global Studies'
        link = <a href='https://www.unl.edu/' target='_blank' rel="noopener noreferrer" style={{color: '#a0d6b4'}}>University of Nebraska</a>
        date = '2009 - 2014'
        description = (
            <ul id='xp-ul-container'>
                <li>Majored in Global Studied with minors in Psychology and Mandarin</li>
                <li>Dean's List Recipient</li>
                <li>President of UNL Cultural Ambassadors</li>
                <li>Vice President of UNL Chinese Students and Scholars Associated</li>
                <li>Great Plains National Security Education Community (GPNSEC) Member</li>
            </ul>
    )
    }

    if (chosen === 'PKU') {
        title = 'Intensive Mandarin Studies'
        link = <a href='https://english.pku.edu.cn/' target='_blank' rel="noopener noreferrer" style={{color: '#a0d6b4'}}>China's Premier University, Peking University</a>
        date = '2011 - 2012'
        description = (
            <ul id='xp-ul-container'>
                <li>Intensive Mandarin Studies (Advanced)</li>
                <li>Internship at Gamewave Interactive on US Localization Team</li>
                <li>English Mentor</li>
                <li>Visited over 40 cities throughout China</li>
            </ul>
    )
    }

    return(
        <div id='xp-tile'>
            <h1 style={{color: '#fff', fontSize: 25}}>
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