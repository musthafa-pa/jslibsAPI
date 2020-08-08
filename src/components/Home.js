import React, { Component } from 'react';
import Navbar from './Navbar'
const Home = (props) => {
    return (
        <div>
            <Navbar />
            <div id="main">
                <div id="section-1">
                    <div id="search-inner">
                        <select id="category">
                            <option>Select a category</option>
                            <option value="Charts">Charts & Graphs</option>
                            <option value="Animation">Animation</option>
                            <option value="Animation">Animation</option>
                            <option value="Animation">Machine learning</option>
                            <option value="Animation">DOM</option>
                            <option value="Animation">Web frameworks</option>
                            <option value="Animation">Functional computing</option>
                            <option value="Animation">NodeJS</option>
                            <option value="Animation">NPM</option>

                        </select>
                        <button type="button" id="search-btn" className="btn btn-warning">Show libraries</button>
                    </div>
                    
                </div>
                <div id="section-2">
                <h5 id="sec_head">4 Results found!</h5>
                <div id="section3">
                    <div id="sec_3_1">
                    <div>
                        <h4 id="sec_3_1_h4">React JS</h4>
                        <p id="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun</p>
                        <button type="button" id="sec_3_1_btn">Learn more!</button>
                        </div>
                    </div>
                    <div id="sec_3_2">
                    <div>
                        <h4 id="sec_3_1_h4">Angular</h4>
                        <p id="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun</p>
                        <button type="button" id="sec_3_1_btn">Learn more!</button>
                        </div>

                    </div>
                    <div id="sec_3_3">
                    <div>
                        <h4 id="sec_3_1_h4">React Native</h4>
                        <p id="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun</p>
                        <button type="button" id="sec_3_1_btn">Learn more!</button>
                        </div>

                    </div>
                    <div id="sec_3_4">
                    <div>
                        <h4 id="sec_3_1_h4">Vue</h4>
                        <p id="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun</p>
                        <button type="button" id="sec_3_1_btn">Learn more!</button>
                        </div>

                    </div>
                </div>
                <div id="section3">
                    <div id="sec_3_1">
                    <div>
                        <h4 id="sec_3_1_h4">Electron</h4>
                        <p id="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun</p>
                        <button type="button" id="sec_3_1_btn">Learn more!</button>
                        </div>
                    </div>
                    <div id="sec_3_2">
                    <div>
                        <h4 id="sec_3_1_h4">NodeJS</h4>
                        <p id="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun</p>
                        <button type="button" id="sec_3_1_btn">Learn more!</button>
                        </div>

                    </div>
                    <div id="sec_3_3">
                    <div>
                        <h4 id="sec_3_1_h4">Webpack</h4>
                        <p id="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun</p>
                        <button type="button" id="sec_3_1_btn">Learn more!</button>
                        </div>

                    </div>
                    <div id="sec_3_4">
                    <div>
                        <h4 id="sec_3_1_h4">Grunt</h4>
                        <p id="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun</p>
                        <button type="button" id="sec_3_1_btn">Learn more!</button>
                        </div>

                    </div>
                </div>
                </div>
                
            </div>

            <footer class="bottom">Made with ❤ By <a href="https://musthafa-pa.github.io">Musthafa</a></footer>
        </div>
    )
}

export default Home;