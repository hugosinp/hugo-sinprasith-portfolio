import React from 'react'
import { useSelector } from 'react-redux'

import HomePageView from '../components/views/HomePageView'

import { frDico, engDico } from '../static/dico'
import { usProjects, frProjects, usEntreprises, frEntreprises, usSkills, frSkills } from '../static/data'

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
                        skills={usSkills}
                        projects={usProjects}
                        entreprises={usEntreprises}
                    />
                :
                    <HomePageView 
                        dico={frDico}
                        skills={frSkills}
                        projects={frProjects}
                        entreprises={frEntreprises}
                    />
            }
        </div>
    )
}

export default HomePage
