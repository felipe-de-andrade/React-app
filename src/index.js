import React from 'react';
import ReactDOM from 'react-dom';
import Post from './components/Post';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

ReactDOM.render(
(
    <div className="content">
        <div className="card">
            <div className="card-header">
            <h1 class="card-title">Hello Word</h1>
            <Post texto="slk tiw" title="Primeiro"/>
            <Post texto="slk tiw" title="Segundo"/>
            <Post texto="slk tiw" title="Terceiro"/>
            </div>
        </div>
    </div>
),
    document.getElementById('root')
)
