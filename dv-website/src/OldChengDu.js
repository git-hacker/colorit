import React, { Component } from 'react';
import './ColorIt.css';
import { Icon, Row, Col, Card,  Popover, Button} from 'antd';
import c1 from './media/oldCD/1.jpg';
import c2 from './media/oldCD/2.jpg';
import c3 from './media/oldCD/3.jpg';
import c4 from './media/oldCD/4.jpg';
import c5 from './media/oldCD/5.jpg';
import c6 from './media/oldCD/6.jpg';
import c1_deal from './media/oldCD/1_deal.jpg';
import c2_deal from './media/oldCD/2_deal.jpg';
import c3_deal from './media/oldCD/3_deal.jpg';
import c4_deal from './media/oldCD/4_deal.jpg';
import c5_deal from './media/oldCD/5_deal.jpg';
import c6_deal from './media/oldCD/6_deal.jpg';

class OldChengDU extends Component {
	render() {
		var rows = []
		var contents = []
		var phots = [c1,c2,c3,c4,c5,c6]
		var phots_deal = [c1_deal,c2_deal,c3_deal,c4_deal,c5_deal,c6_deal]
		var desc = ['成都茶馆','胶片下的老成都 ','老成都宽窄巷子','民俗公园','青羊区红砖房','劝业场']

		for (var i = 0; i < 6; i++) {
			contents.push(
				<div>
				    <Card style={{ width: "100%" }} bodyStyle={{ padding: 0 }}>
					    <div className="custom-image">
					      <img className='emp-img' alt="example" width="100%" src={phots[i]} />
					    </div>
					    <div className="custom-card">
					      <h3><Icon type="info-circle" /> {desc[i]}</h3>
					    </div>
					  </Card>
				  </div>
			);
		}

		for (var i = 0; i < 3; i++) {
			rows.push(
				<div style={{marginTop:'50px'}}>
					<Row>
						<Col span={3}>
						</Col>
						<Col span={7}>
							<Popover placement="right" content={contents[i]} title="智能上色的彩色图片" trigger="hover">
							<Card style={{ width: "100%" }} bodyStyle={{ padding: 0 }}>
							    <div className="custom-image">
							      <img className='emp-img' alt="example" width="100%" src={phots_deal[i]} />
							    </div>
							    <div className="custom-card">
							      <h3><Icon type="info-circle" /> 黑白照片</h3>
							      <p> <Icon type="star" /> {desc[i]}</p>
							    </div>
							  </Card>
							  </Popover>
						</Col>
						<Col span={3}>
						</Col>
						<Col span={7}>
							<Popover placement="left" content={contents[i+3]} title="智能上色的彩色图片" trigger="hover">
								<Card style={{ width: "100%" }} bodyStyle={{ padding: 0 }}>
								    <div className="custom-image">
								      <img className='emp-img' alt="example" width="100%" src={phots_deal[i+3]} />
								    </div>
								    <div className="custom-card">
								      <h3><Icon type="info-circle" /> 黑白照片</h3>
								      <p> <Icon type="star" /> {desc[i + 3]}</p>
								    </div>
								  </Card>
							  </Popover>
						</Col>
						<Col span={3}>
						</Col>
					</Row>
					<br/>
					<br/>
				</div>
			);
		}
		return (
			<div className='bwall'>
				<br/>
				<br/>
				<h2 style={{textAlign:'center'}}>老成都：</h2>
				<br/>
				<br/>
				{rows}
				<br/>
				<br/>
		    </div>
		);
	}
}

export default OldChengDU;