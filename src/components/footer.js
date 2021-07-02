import * as React from 'react'
import { Link } from 'gatsby'
import {
  mainFooter,
  copyrightArea
} from './footer.module.css'

const Footer = () => {
  return (
    <footer>
      <section className={mainFooter}>
      </section>
      <section class={copyrightArea}>
        <p>made with my 👋 in Belo Horizonte<br/> this website <Link to="/">only collects data</Link> you actively submit</p>
      </section>
    </footer>
  )
}

export default Footer