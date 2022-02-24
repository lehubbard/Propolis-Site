import React, { useState } from 'react';
import Navigation from './navigation';
import { useStaticQuery, graphql } from 'gatsby';
import { css } from "@emotion/react"
import { GiHamburgerMenu } from "@react-icons/all-files/gi/GiHamburgerMenu";

function Layout({ pageTitle, children }) {

    const [navVisible, setNavVisible] = useState(false);
    let navMenu = null;

    const toggleNav = () => !navVisible ? setNavVisible(true) : setNavVisible(false)

    // condition for displaying nav component
    if (navVisible){
        navMenu = <Navigation toggler={toggleNav}/>
    }
    else{
        navMenu = null;
    }

    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }

            }
        }
        `)

    return (
        <main className='page-wrapper' css={pageTitle !== 'Home'
        ? css`background-image: url('');`
        : null
        }>
            <title>{pageTitle} | {data.site.siteMetadata.title}</title>

            {navMenu}

            <div className='page-header' 
            css={pageTitle !== 'Home'
                ? css`background-color: var(--dark-grey);`
                : null
            }>
                <h1>Propolis</h1>
                <div className='nav-icons' 
                    onClick={() => toggleNav()}>
                    <span className={!navVisible ? 'nav-exit-icon hide-nav-exit-icon' : 'nav-exit-icon'}>+</span>
                    <span className={navVisible ? 'hamburger hide-hamburger' : 'hamburger'}><GiHamburgerMenu/></span>
                </div>
            </div>

            {children}
        </main>
     );
}

export default Layout;