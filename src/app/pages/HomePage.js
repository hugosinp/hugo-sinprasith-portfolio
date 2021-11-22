import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import HomePageView from '../components/views/HomePageView'
import { getData } from '../redux/actions/dataActions'

const HomePage = () => {

    const dispatch = useDispatch()

    const myData = useSelector(state => state.myData)
    const {
        loading,
        data,
        error
    } = myData

    useEffect(() =>  {
        dispatch(getData())
    }, [])

    return (
        <div>
            <HomePageView 
                loading={loading}
                data={data}
                error={error}
            />
        </div>
    )
}

export default HomePage
