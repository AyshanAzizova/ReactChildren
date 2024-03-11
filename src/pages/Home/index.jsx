import React from 'react'
import style from './index.module.css'
import Card from '../../components/Card'
import { red } from '@mui/material/colors'
import { Link } from 'react-router-dom'

const index = () => {
  return (
    <>
      <div className={style.section}>
        <div className={style.content}>
          <h1>Present your business in a whole new way</h1>
          <p>Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit!</p>
          <button className={style.btn}>Get Started</button>
          <button className={style.btn}>Learn More</button>
        </div>
      </div>
      <div className={style.cards}>
        <Card >
          <div className={style.card}>
            <i style={{ color: red }} class="fa-solid fa-building"></i>
            <h2>Featured title</h2>
            <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
            <a href='#'>Call to action </a>
          </div>
        </Card>
        <Card >
          <div className={style.card}>
            <i style={{ color: red }} class="fa-solid fa-building"></i>
            <h2>Featured title</h2>
            <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
            <p></p>
          </div>
        </Card>
        <Card >
          <div className={style.card}>
            <i style={{ color: red }} class="fa-solid fa-building"></i>
            <h2>Featured title</h2>
            <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
          </div>
        </Card>
      </div>
    </>
  )
}

export default index
