/**
 * @file
 * @author jinguangguo
 * @date 2016/2/18
 */

// 加载某个样式文件
import '../scss/index.scss';

// 加载后端node模块的文件
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, IndexRoute, browserHistory, hashHistory } from 'react-router';

// 可以直接加载html
import '../widget/header/header';

// 加载进入某个png图片
import chuiziPng from '../img/chuizi.png';

// module
import {Test} from '../widget/Test/Test.js';

const App = React.createClass({
    render() {
        return (
            <div>
                <h1>App</h1>
                <ul>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/inbox">Inbox</Link></li>
                </ul>
                <hr/>
                {this.props.children}
            </div>
        )
    }
});

const About = React.createClass({
    render() {
        return (
            <div className="module-about">
                <h3>About</h3>
                <img src={chuiziPng} alt="锤子" />
                <div className="img-box"></div>
            </div>
        );
    }
});

const Inbox = React.createClass({
    render() {
        return (
            <div>
                <h2>Inbox</h2>
                {this.props.children || "Welcome to your Inbox"}
            </div>
        )
    }
});

const Message = React.createClass({
    render() {
        return <h3>Message {this.props.params.id}</h3>
    }
});

render((
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <Route path="about" component={About} />
            <Route path="inbox" component={Inbox}>
                <Route path="messages/:id" component={Message} />
            </Route>
        </Route>
    </Router>
), document.getElementById('main'));
