import React, { Component } from 'react';
import './ColorIt.css';
import { Steps, Carousel, Icon, Row, Col, Card, Upload, message } from 'antd';
import o1 from './media/photos/1.jpg';
import o2 from './media/photos/2.jpg';
import o3 from './media/photos/3.jpg';
import o4 from './media/photos/4.jpg';
import o1_deal from './media/photos/1_deal.jpg';
import o2_deal from './media/photos/2_deal.jpg';
import o3_deal from './media/photos/3_deal.jpg';
import o4_deal from './media/photos/4_deal.jpg';
const Step = Steps.Step;

let common_url = 'https://cors-anywhere.herokuapp.com/http://120.79.187.171:8888/api/colorit';

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

function beforeUpload(file) {
  const isJPG = file.type === 'image/jpeg';
  if (!isJPG) {
    message.error('只允许传JPG格式的图片！');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJPG && isLt2M;
}

class ColorIt extends Component {

	state = {
		loading: false,
		img_data: o1,
	};
	handleChange = (info) => {
		
		if (info.file.status === 'uploading') {
		  this.setState({ loading: true });
		  return;
		}
		if (info.file.status === 'done') {
			// Get this url from response in real world.
			getBase64(info.file.originFileObj, imageUrl => this.setState({
				imageUrl,
				loading: false,
			}));
			this.setState({
				img_data: 'data:image/jpeg;base64,' + info.file.response,
			});
		}
	}

	render() {
		const uploadButton = (
	      <div>
	        <Icon type={this.state.loading ? 'loading' : 'plus'} />
	        <div className="ant-upload-text">Upload</div>
	      </div>
	    );
	    const imageUrl = this.state.imageUrl;
		return (
			<div className='bwall'>
				<br/>
				<br/>
				<Row>
					<Col span={6}>
					</Col>
					<Col span={12}>
						<h2>记忆墙：</h2>
						<br/>
						<Upload
					        name="image"
					        listType="picture-card"
					        className="avatar-uploader"
					        action={common_url}
					        showUploadList={false}
					        beforeUpload={beforeUpload}
					        onChange={this.handleChange}
					      >
					        {imageUrl ? <img src={imageUrl} alt="" style={{width:190,marginTop:-20}}/> : uploadButton}
					      </Upload>
					      <br/>
					</Col>
					<Col span={6}>
					</Col>
				</Row>
				<br/>
				<br/>
				<br/>
				<Row>
					<Col span={6}>
					</Col>
					<Col span={5}>
						<Card style={{ width: "100%" }} bodyStyle={{ padding: 0 }}>
						    <div className="custom-image">
						      <img className='emp-img' alt="example" width="100%" src={imageUrl ? imageUrl : o1_deal} />
						    </div>
						    <div className="custom-card">
						      <h3><Icon type="info-circle" /> 黑白照片</h3>
						      <p> <Icon type="star" /> 上世纪80年代黑白照片</p>
						    </div>
						  </Card>
					</Col>
					<Col span={2}>
					</Col>
					<Col span={5}>
						<Card style={{ width: "100%" }} bodyStyle={{ padding: 0 }}>
						    <div className="custom-image">
						      <img className='emp-img' alt="example" width="100%" src={this.state.img_data} />
						    </div>
						    <div className="custom-card">
						      <h3><Icon type="info-circle" /> 智能上色的彩色图片</h3>
						      <p> <Icon type="star" /> ColorIt智能上色平台处理</p>
						    </div>
						  </Card>
					</Col>
					<Col span={6}>
					</Col>
				</Row>
				<br/>
				<h1>照片长廊,给记忆添加色彩</h1>
				<br/>
				<Carousel autoplay slidesToShow='3' speed='800' centerMode='ture'>
		              <div className='carousel-label'>
		              	<img className='color_img' src={o1_deal}/>
		              </div>
		              <div className='carousel-label'>
		              	<img className='color_img' src={o2_deal}/>
		              </div>
		              <div className='carousel-label'>
		              	<img className='color_img' src={o3_deal}/>
		              </div>
		              <div className='carousel-label'>
		              	<img className='color_img' src={o4_deal}/>
		              </div>
	            </Carousel>
	            <br/>
				<Carousel autoplay slidesToShow='3' speed='800' centerMode='ture'>
		              <div className='carousel-label'>
		              	<img className='color_img' src={o1}/>
		              </div>
		              <div className='carousel-label'>
		              	<img className='color_img' src={o2}/>
		              </div>
		              <div className='carousel-label'>
		              	<img className='color_img' src={o3}/>
		              </div>
		              <div className='carousel-label'>
		              	<img className='color_img' src={o4}/>
		              </div>
	            </Carousel>
	            <br/>
	            <br/>
		    </div>
		);
	}
}

export default ColorIt;