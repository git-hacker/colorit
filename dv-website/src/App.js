import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FirstPage from './FirstPage';
import ColorIt from './ColorIt';
import OldChengDu from './OldChengDu';
import RecruitBigData from './RecruitBigData';
import { BrowserRouter, Route, Link } from 'react-router-dom'

import {Layout, Row, Col, Icon, Menu, Dropdown} from 'antd';
const {Header, Content, Footer} = Layout

const menu = (
  <Menu>
    <Menu.Item>
      <a rel="noopener noreferrer" href="/recruitBigData">招聘大数据</a>
    </Menu.Item>
    <Menu.Item>
      <a rel="noopener noreferrer" href="http://www.taobao.com/">Word2Vec</a>
    </Menu.Item>
    <Menu.Item>
      <a rel="noopener noreferrer" href="http://www.tmall.com/">3rd menu item</a>
    </Menu.Item>
  </Menu>
);

const menu_c = (
  <Menu>
    <Menu.Item>
      <a rel="noopener noreferrer" href="/colorit">老照片记忆</a>
    </Menu.Item>
    <Menu.Item>
      <a rel="noopener noreferrer" href="/oldChengDu">老成都</a>
    </Menu.Item>
    <Menu.Item>
      <a rel="noopener noreferrer" href="#">老电影</a>
    </Menu.Item>
  </Menu>
);

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Layout className='Layout'>
        <Header className="App-header">
          <Row>
            <Col span={6}>
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">   AI 空间站</h1>
            </Col>
            <Col span={11}>
              <Row>
                <Col span={3}>
                  <h2><Link to='/'>首页</Link></h2>
                </Col>
                <Col span={4} className='label-1'>
                  <Dropdown overlay={menu}>
                    <Link className="ant-dropdown-link" to="recruitBigData">
                      AI大数据 <Icon type="down" />
                    </Link>
                  </Dropdown>
                </Col>
                <Col span={4} className='label-1'>
                  <Dropdown overlay={menu_c}>
                    <a className="ant-dropdown-link" href="#" style={{marginLeft:'4px'}}>
                      ColorIt <Icon type="down" />
                    </a>
                  </Dropdown>
                </Col>
                <Col span={2}>
                  <h2>相册</h2>
                </Col>
                <Col span={3}>
                  <h2>博客</h2>
                </Col>
                <Col span={4}>
                  <h2>技术支持</h2>
                </Col>
                <Col span={4}>
                  <h2>关于我们</h2>
                </Col>
              </Row>
            </Col>
            <Col span={7}>
              <Row>
                <Col span={12}>
                </Col>
                <Col span={5}>
                  <h2><Icon type="github" />&nbsp;&nbsp;天气</h2>
                </Col>
                <Col span={3}>
                  <h2>留言</h2>
                </Col>
                <Col span={3}>
                  <h2>登陆&nbsp;</h2>
                </Col>
              </Row>
            </Col>
          </Row>
        </Header>
        <Content className='Content'>
            <div>
              <Route exact path="/" component={FirstPage}/>
              <Route exact path="/colorit" component={ColorIt}/>
              <Route exact path="/oldChengDu" component={OldChengDu}/>
              <Route path="/recruitBigData" component={RecruitBigData}/>
            </div>
        </Content>
        <Footer className='Footer'>
          <Row>
          <Col span={8}>
          </Col>
          <Col span={8}>
          <p>
          <span className='icon-link'><img className='icon-img' alt='图片无法加载' src="http://echarts.baidu.com/images/icon-email.png" /></span>
          <span className='icon-link'><img className='icon-img' alt='图片无法加载' src="http://echarts.baidu.com/images/icon-weibo.png" /></span>
          <span className='icon-link'><img className='icon-img' alt='图片无法加载' src="http://echarts.baidu.com/images/icon-github.png" /></span>
          <span className='icon-link'><img className='icon-img' alt='图片无法加载' src="http://echarts.baidu.com/images/icon-twitter.png" /></span>
          </p>
          <p>Copyright ©2017 Created by Minokun</p>
            <span><img alt='图片无法加载' src='https://gw.alicdn.com/tfs/TB1GxwdSXXXXXa.aXXXXXXXXXXX-65-70.gif' className='bn_pic'/></span>
            <span><img alt='图片无法加载' style={{width:'20px', marginRight:'3px'}} src='https://img.alicdn.com/tfs/TB1..50QpXXXXX7XpXXXXXXXXXX-40-40.png'/></span>
            <span>版权所有ICP证：陇ICP备17000649号</span>
          <p>域名所属注册机构: HICHINA ZHICHENG TECHNOLOGY LTE</p>
          </Col>
          <Col span={8}>
          </Col>
          </Row>
        </Footer>
      </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
