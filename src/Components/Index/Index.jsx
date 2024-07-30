import React from 'react'
import MainHome from '../MainHome/MainHome'
import MainInfo from '../MainInfo/MainInfo'
import MainTeam from '../MainTeam/MainTeam'

export default function Index() {
    return (
      <div className='main2'>
        <MainHome classname='home' />
        <MainInfo classname='info' />
        <MainTeam classname='team' />
      </div>
    )
  }