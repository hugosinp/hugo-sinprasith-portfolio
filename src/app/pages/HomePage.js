import React from 'react'
import { useSelector } from 'react-redux'

import HomePageView from '../components/views/HomePageView'

import { frDico, engDico } from '../static/dico'
import { us_projects, us_entreprises, fr_projects, fr_entreprises } from '../static/data'

const HomePage = () => {

    const myApp = useSelector(state => state.myApp)
    const {
        usLang
    } = myApp

    return (
        <div>
            {
                usLang === true ?
                    <HomePageView 
                        dico={engDico}
                        projects={us_projects}
                        entreprises={us_entreprises}
                    />
                :
                    <HomePageView 
                        dico={frDico}
                        projects={fr_projects}
                        entreprises={fr_entreprises}
                    />
            }
        </div>
    )
}

export default HomePage
