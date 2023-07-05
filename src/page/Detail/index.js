import React from 'react'
import './index.scss'
import { Col, Row } from 'antd'
import Sidebar from '../../components/common/Sidebar'
import Content from '../../components/common/Content'
import Convenient from '../../components/common/Content/Convenient'
import Suggest from '../../components/common/Suggest'
import Location from '../../components/common/Location'
// import { Helmet } from 'react-helmet'
import { useTranslation } from 'react-i18next'
import QuestionsAndRatings from './components/Content/QuestionsAndRatings/QuestionsAndRatings'
const DetailPage = () => {
  const { t } = useTranslation();
  return (
    <div className='body'>
      {/* <Helmet>
        <title>aaaa</title>
      </Helmet> */}
      <div className='bodyContainer'>
        <div className='content'>
          <Row>
            <Col span={6}>
              <Sidebar />
            </Col>
            <Col span={18}>
              <Content />
            </Col>
            <Col span={24}>
              <Convenient />
            </Col>
          </Row>
        </div>
        <div className="location">
          <Location />
        </div>
        <div className="suggest">
          <Suggest />
        </div>
        <div className="">
          <QuestionsAndRatings />
        </div>
      </div>
    </div>
  )
}

export default DetailPage