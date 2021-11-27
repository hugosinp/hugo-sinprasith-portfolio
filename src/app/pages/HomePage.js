import React from 'react'
import { useSelector } from 'react-redux'

import HomePageView from '../components/views/HomePageView'

import { FR_DICO, ENG_DICO } from '../static/dico'

const HomePage = () => {

    const myApp = useSelector(state => state.myApp)
    const {
        us_lang
    } = myApp

    return (
        <div>
            {
                us_lang === true ?
                    <HomePageView 
                        dico={ENG_DICO}
                    />
                :
                    <HomePageView 
                        dico={FR_DICO}
                    />
            }
        </div>
    )
}

export default HomePage
