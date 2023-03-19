import React from 'react'

import PropTypes from 'prop-types'

import './navigation-links.css'
import { Scrollchor } from 'react-scrollchor'

const NavigationLinks = (props) => {
  return (
    <nav className={`navigation-links-nav ${props.rootClassName} `}>
      <Scrollchor to='#Home' className="navigation-links-text Navigation-Link">
        {props.link1}
      </Scrollchor>
      <Scrollchor to='#Services' className="navigation-links-text1 Navigation-Link">
        {props.link2}
      </Scrollchor>
      <Scrollchor to='#Portfolio' className="navigation-links-text2 Navigation-Link">
        {props.link3}
      </Scrollchor>
      <Scrollchor to='#About' className="navigation-links-text3 Navigation-Link">
        {props.link4}
      </Scrollchor>
      <Scrollchor to='Process' className="navigation-links-text3 Navigation-Link">
        {props.link5}
      </Scrollchor>
      <Scrollchor to='blog' className="navigation-links-text3 Navigation-Link">
        {props.link6}
      </Scrollchor>
    </nav>
  )
}

NavigationLinks.defaultProps = {
  link1: 'Inicio',
  link2: 'Servicios',
  link3: 'Portofolio',
  link4: 'Nosotros',
  link5: "Proceso",
  link6: "Publicaciones",
  rootClassName: '',
}

NavigationLinks.propTypes = {
  link3: PropTypes.string,
  rootClassName: PropTypes.string,
  link2: PropTypes.string,
  link4: PropTypes.string,
  link1: PropTypes.string,
}

export default NavigationLinks
