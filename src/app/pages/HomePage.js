import React from 'react'
import { useSelector } from 'react-redux'

import HomePageView from '../components/views/HomePageView'

import { FR_DICO, ENG_DICO } from '../static/dico'
import { us_projects, us_entreprises, fr_projects, fr_entreprises } from '../static/data'

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
                        projects={us_projects}
                        entreprises={us_entreprises}
                    />
                :
                    <HomePageView 
                        dico={FR_DICO}
                        projects={fr_projects}
                        entreprises={fr_entreprises}
                    />
            }
        </div>
    )
}

export default HomePage
