import React, { Component } from 'react'
import Hitung from '../components/Hitung'

export default class Home extends Component {
    render() {
        return (
            <div style={{ padding: '50px' }}>
                <header>
                    <h2>Aplikasi Penghitung Jumlah Pengunjung Mal Matahari</h2>
                </header> 

                <hr />

                <Hitung />

                <hr />

                <footer>
                    <p>Created By Roby Academy</p>
                </footer>
            </div>
        )
    }
}
