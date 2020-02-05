import React from 'react';
import ReactDOM from 'react-dom';
import Post from './components/Post';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

ReactDOM.render(
(
    <div className="content">
        <div className="card">
            <div className="card-header">
            <App texto="slk tiw" title2="Terceiro app"/>
            <h1 class="card-title">Hello Word</h1>
            </div>
        </div>
    </div>


),
    document.getElementById('root')
)
