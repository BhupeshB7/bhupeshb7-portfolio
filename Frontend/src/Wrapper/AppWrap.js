import React from 'react'
import { SocialMedia, NavigationDots } from '../components'
// import NavigationDots from '../components/NavigationDots'
const AppWrap = (Component, idName, classNames) => function HOC() {
    return (
        <div id={idName} className={`app__container ${classNames}`}>
            <SocialMedia />

            <div className="app__wrapper app__flex">
                {/* <SocialMedia /> */}
                <Component />


            </div>

            <NavigationDots active={idName} />
        </div>
    )
}

export default AppWrap