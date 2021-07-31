import React, { Component } from 'react'
import './SideNav.css'

export default class SideNav extends Component {
    render() {
        return (
            <div>
                <div className="logo poppins-600">
                    <span className="orangeText">Dev</span><span>challenges.io</span>
                </div>
                <div className="navMenu noto-500">
                    <ul>
                        <li>Colors</li>
                        <li>Typography</li>
                        <li>Spaces</li>
                        <li>Buttons</li>
                        <li className="navMenuActive">Inputs</li>
                        <li>Grid</li>
                    </ul>
                </div>
            </div>
        )
    }
}
