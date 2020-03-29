import React from "react"
import styled from 'styled-components'
import {Layout} from "@components/layout"
import {SEO} from "@components/seo"
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'

const SwiperContainer = styled.div`
  width: 100wh;
  height: calc(100vh - 70px);
`
const SwiperButton = styled.div`

`
const nameList = [
   '基本信息',
   '教育背景',
   '工作经历',
   '自我评价',
]

class About extends React.Component {

  componentDidMount () {
    const mySwiper = new Swiper('.swiper-container', {
      pagination: {
        el: '.swiper-pagination',
        type: 'custom',
        renderCustom: (swiper, current, total) => nameList[current-1],
        clickable: true,
      },
      autoplay: {
        delay: 5000,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    })
  }
  render () {
    return <Layout style={{maxWidth: '100%'}}>
              <SEO title="about taoguomao" />
              <SwiperContainer className="swiper-container">
                  <div className="swiper-wrapper">
                      <div className="swiper-slide">Slide 1</div>
                      <div className="swiper-slide">Slide 2</div>
                      <div className="swiper-slide">Slide 3</div>
                  </div>
                  <SwiperButton className="swiper-pagination"></SwiperButton>
                  <div className="swiper-button-prev"></div>
                  <div className="swiper-button-next"></div>
              </SwiperContainer>
            </Layout>
  }
}

export default About
