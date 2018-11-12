import React from 'react'
import { withSiteData } from 'react-static'
//
// import logoImg from '../logo.svg'

export default withSiteData(() => (
  <div>
    <h1 style={{ textAlign: 'center' }}>Chào mừng bạn đến với</h1>
    {/* <img src={logoImg} alt="" /> */}
    <button>Nút bấm</button>
  </div>
))
