import React, { Component } from 'react';
import './FirstPage.css';
import { Carousel, Timeline, Icon, Row, Col, Card} from 'antd';
import wxk from './media/wxk.png';
import may from './media/may.jpg';
import Ethan from './media/Ethan.png';

class FirstPage extends Component {
	render() {
		return (
			<div>
				<div className='video-div'>

		            <div className='cover'>
		            	<h1>AI 空间站</h1>
						<p>从数据中发现真理 从真理中窥探未来</p>
						<p>我们是一群探寻真理的猿猴</p>
		            </div>

		            <video className='video-part' 
		              src='//qiniu-video5.vmoviercdn.com/59f6a61b40879.mp4' 
		              autoplay='autoplay' loop='loop' muted='muted'>
		            </video>

		            <Carousel autoplay slidesToShow='3' speed='800' centerMode='ture'>
		              <div className='carousel-label'>
		                <video className='video-label' 
		                  src='//qiniu-xpc5.vmoviercdn.com/59fbdd56ccd69.mp4' 
		                  poster='https://cs.vmovier.com/Uploads/avatar/2017/11/03/south.jpg@960w_540h_1e_1c.jpg' 
		                  >
		                </video>
		              </div>
		              <div className='carousel-label'>
		                <video className='video-label' 
		                  src='//qiniu-video3.vmoviercdn.com/5a01791ec8bf6.mp4' 
		                  poster='https://cs.vmovier.com/Uploads/avatar/2017/11/07/%E7%A5%9E%E5%A5%87%E7%9A%84%E6%8C%AA%E5%A8%81.jpg@960w_540h_1e_1c.jpg' 
		                  >
		                </video>
		              </div>
		              <div className='carousel-label'>
		                <video className='video-label' 
		                  src='//qiniu-xpc5.vmoviercdn.com/59ed5a426cb29.mp4' 
		                  poster='https://cs.vmovier.com/Uploads/avatar/2017/10/23/59e7819cacc69.jpeg@960w_540h_1e_1c.jpg@960w_540h_1e_1c.jpg' 
		                  >
		                </video>
		              </div>
		              <div className='carousel-label'>
		                <video className='video-label' 
		                  src='//qiniu-video5.vmoviercdn.com/59f3d3fe2bcdb.mp4' 
		                  poster='https://cs.vmovier.com/Uploads/avatar/2017/10/28/TIM20171028084559.jpg@960w_540h_1e_1c.jpg' 
		                  >
		                </video>
		              </div>
		              <div className='carousel-label'>
		                <video className='video-label' 
		                  src='//qiniu-video3.vmoviercdn.com/59f06c1e5f644.mp4' 
		                  poster='https://cs.vmovier.com/Uploads/avatar/2017/10/25/%E6%B2%99%E6%BC%A0%E9%9B%A81.jpg@960w_540h_1e_1c.jpg' 
		                  >
		                </video>
		              </div>
		              <div className='carousel-label'>
		                <video className='video-label' 
		                  src='//qiniu-xpc3.vmoviercdn.com/598afa96ac502.mp4' 
		                  poster='https://cs.vmovier.com/Uploads/cover/2017-05-11/59143a27a99f2_cut.jpeg@960w_540h_1e_1c.jpg' 
		                  >
		                </video>
		              </div>
		            </Carousel>
		        </div>

		        <Row className='time-line-div'>
			        <Col span={6}>
			        </Col>
			        <Col span={12}>

				        <div className='pic_title'>
				        </div>

			        	<Row type="flex" justify="space-around" className='human-card'>
			        		<Col span={7}>
			        			<Card style={{ width: "100%" }} bodyStyle={{ padding: 0 }}>
								    <div className="custom-image">
								      <img alt="example" width="100%" src={wxk} />
								    </div>
								    <div className="custom-card">
								      <h3><Icon type="user" />Minokun Wu</h3>
								      <p> <Icon type="github" /> <a target="_blank" href="https://github.com/Minokun">github.com/Minokun</a></p>
								      <p> <Icon type="star" /> MK数据站创始人</p>
								      <p> <Icon type="star" /> 数据挖掘攻城狮</p>
								      <p> <Icon type="star" /> Python全栈攻城狮</p>
								    </div>
								  </Card>
			        		</Col>
			        		<Col span={1}></Col>
			        		<Col span={7}>
			        			<Card style={{ width: "100%" }} bodyStyle={{ padding: 0 }}>
								    <div className="custom-image">
								      <img alt="example" width="100%" src={may} />
								    </div>
								    <div className="custom-card">
								      <h3><Icon type="user" />May Song</h3>
								      <p> <Icon type="github" /> <a target="_blank" href="https://github.com/Minokun">github.com/May</a></p>
								      <p> <Icon type="star" /> 高级WEB前端攻城狮</p>
								      <p> <Icon type="star" /> 高级前端设计师</p>
								      <p> <Icon type="star" /> 程序猿鼓励师</p>
								    </div>
								  </Card>
			        		</Col>
			        		<Col span={1}></Col>
			        		<Col span={7}>
			        			<Card style={{ width: "100%" }} bodyStyle={{ padding: 0 }}>
								    <div className="custom-image">
								      <img alt="example" width="100%" src={Ethan} />
								    </div>
								    <div className="custom-card">
								      <h3><Icon type="user" />Ethan Chen</h3>
								      <p> <Icon type="github" /> <a target="_blank" href="https://github.com/hchen13">github.com/hchen13</a></p>
								      <p> <Icon type="star" /> 深度学习算法攻城狮</p>
								      <p> <Icon type="star" /> AI 研究者</p>
								      <p> <Icon type="star" /> Python全栈攻城狮</p>
								    </div>
								  </Card>
			        		</Col>
			        	</Row>

						<Timeline className='time-line'>
							<Timeline.Item>2018-1-14 Website, Wechat App and API/SDK of ColorIt completed! </Timeline.Item>
							<Timeline.Item>2018-1-13 ColorIt 黑客松项目启动！团队组建！ </Timeline.Item>
							<Timeline.Item dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />} color="red">2017-11-24 AI 空间站开发完成! </Timeline.Item>
							<Timeline.Item>2017-11-18 Recruitment position recognition of machine learning model completed! </Timeline.Item>
							<Timeline.Item>2017-11-01 大数据分析部分启动！ </Timeline.Item>
							<Timeline.Item dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />} color="red">2017-10-08 Spider system complete! 并获取500万初始招聘数据 </Timeline.Item>
							<Timeline.Item>2017-09-01 招聘大数据项目启动 </Timeline.Item>
						</Timeline>

					</Col>

			        <Col span={6}>
			        </Col>
				</Row>
		    </div>
		);
	}
}

export default FirstPage;