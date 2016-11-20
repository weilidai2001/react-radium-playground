import React from 'react';
import Navbar from '../components/common/navbar';

class About extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div className="about-us">
        <nav>
          <Navbar/>
        </nav>
        <div className="about-us__container">
          <div className="about-us__heading about-us__heading--large">关于我们</div>
          <div className="about-us__content">
            <p>刘氏国际（英国）有限公司是目前基于英国的专业高级顾问公司，为中国政府部门、企业及个人投资者在英国设立海外机构、宣传拓展和个人投资置业提供有效咨询服务。</p>
            <div className="about-us__heading about-us__heading--medium">我们的理念 : 抓住机遇</div>
            <p>
              随着中国经济在全球的迅速发展，中国也正以惊人的速度融入世界。与此同时，到英国发展交流的中国政府所属部门、机构和私营企业、投资人也愈来愈多。不难想到，中国与英国之间需要一个衔接的平台，沟通的纽带。刘氏国际（英国）有限公司即着眼于该使命，为所有有意来到英国实现理想的朋友提供最大帮助。</p>
            <div className="about-us__heading about-us__heading--medium">我们的使命 : 缩小差距</div>
            <p>通过我们的各项高级专业服务，您将会对英国的本土在最短时间内有最多的了解，熟悉当地的语言、文化，最大限度的掌握各种商务信息，为您处理业务提供思路和便利。</p>
            <div className="about-us__heading about-us__heading--medium">我们的目标 : 助您成功</div>
            <p>
              当您的计划在英国市场执行或准备执行时，会有各种实际操作的困难，比如对当地政府法规、法律的了解缺乏深度和广度，无从得知合作者的知名度和美誉度等等。刘氏国际（英国）有限公司为中国客户量身定做符合您需要的全套商业投资计划，协助您拥有稳定牢固的客户群，成功地在英国拥有属于自己的市场份额。</p>
          </div>

        </div>
      </div>

    );
  }
}

export default (About);