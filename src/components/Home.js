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
                    <div className="row">
                        <div className="col-md-3" id="res-1">
                            <p>Angular</p>
                            <button type="button" className="btn btn-primary">View More</button>
                        </div>
                        <div className="col-md-3" id="res-2">
                            <p>React</p>
                            <button type="button" className="btn btn-primary">View More</button>

                        </div>
                        <div className="col-md-3" id="res-3">
                            <p>Vue</p>
                            <button type="button" className="btn btn-primary">View More</button>

                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3" id="res-1">
                            <p>ChartJS</p>
                            <button type="button" className="btn btn-primary">View More</button>

                        </div>
                        <div className="col-md-3" id="res-2">
                            <p>HighCharts</p>
                            <button type="button" className="btn btn-primary">View More</button>

                        </div>
                        <div className="col-md-3" id="res-3">
                            <p>CanvasJS</p>
                            <button type="button" className="btn btn-primary">View More</button>

                        </div>
                    </div>
                </div>
            </div>

            <footer class="bottom">Made with ❤ By <a href="https://musthafa-pa.github.io">Musthafa</a></footer>
        </div>
    )
}

export default Home;