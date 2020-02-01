import React, { useState } from 'react'
import Head from 'next/head'
import {Row, Col , List ,Icon} from 'antd'
import axios from 'axios'
import Header from '../components/Header'
import '../static/style/pages/index.css'

const Home = (list) => {
  const [mylist] = useState(list.data.result)
  return(
    <div>
    <Head>
      <title>Home</title>
    </Head>
    <Header />
    <Row className="comm-main" type="flex" justify="center">
      <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}  >
      <div>    
      <List
        header={<div>最新日志</div>}
        itemLayout="vertical"
        dataSource={mylist}
        renderItem={item => (
          <List.Item>
            <div className="list-title">{item.title}</div>
            <div className="list-icon">
              <span><Icon type="calendar" /> {item.createTime}</span>
              <span><Icon type="folder" /> 视频教程</span>
              <span><Icon type="fire" /> 5498人</span>
            </div>
            <div className="list-context">{item.desc}</div>  
          </List.Item>
        )}
      />    
    </div>
      </Col>

      <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
        右侧
      </Col>
    </Row>

 </div>
  )

}
Home.getInitialProps = async ()=>{
  const promise = new Promise((resolve)=>{
    axios('http://rap2api.taobao.org/app/mock/241764/article').then(
      (res)=>{
        resolve(res.data)
      }
    )
  })
  return await promise
}
export default Home