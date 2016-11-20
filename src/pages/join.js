import React from 'react';
import Navbar from '../components/common/navbar';

class Join extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div className="join-us">
        <nav>
          <Navbar/>
        </nav>
        <div className="join-us__container">
          <div className="join-us__title">加入我们</div>
          <p>刘氏国际致力于帮助客户解决来到伦敦投资生活中遇到的各种困难。如果您对房产投资
            感兴趣，且擅长市场销售推广，愿为中英投资商务合作尽一份力，欢迎加入我们的团
            队。希望在这里您可以找到您心仪的工作机会，丰富您的履历和见识。</p>
          <div className="join-us__vacancies">
            <div className="join-us__vacancy">
              <div className="join-us__vacancy-title">招聘市场推广（Marketing）</div>
              <div className="join-us__vacancy-description">
                <ul>
                  <li>中英文流利</li>
                  <li>有相关销售、客户管理经验优先</li>
                  <li>维护客户关系</li>
                  <li>网站及社交平台内容更新</li>
                  <li>团队合作精神</li>
                </ul>
              </div>
            </div>
            <div className="join-us__vacancy">
              <div className="join-us__vacancy-title">CEO助理</div>
              <div className="join-us__vacancy-description">
                <ul>
                  <li>中英文流利</li>
                  <li>处理CEO及办公室日常工作</li>
                  <li>安排公司海外客人的接待</li>
                  <li>如需要有代替CEO决定并处理紧急情况的能力</li>
                  <li>中英文翻译</li>
                  <li>有相关经验优先</li>
                </ul>
              </div>
            </div>
            <div className="join-us__vacancy">
              <div className="join-us__vacancy-title">基建工程项目经理、工程师</div>
              <div className="join-us__vacancy-description">
                <ul>
                  <li>具有工程项目管理经验</li>
                  <li>有RICS, CIOB , PRINCE2资格优先</li>
                  <li>熟悉民用和商务基建工程项目各阶段的操作</li>
                  <li>对施工不同阶段的技术检验</li>
                  <li>时间控制、预算的控制</li>
                  <li>确保项目顺利进展和按时交付</li>
                  <li>有团队精神</li>
                </ul>
              </div>
            </div>
            <div className="join-us__vacancy">
              <div className="join-us__vacancy-title">装修、水电工人</div>
              <div className="join-us__vacancy-description">
                <ul>
                  <li>在项目经理的指导下独立工作</li>
                  <li>对各项具体业务熟悉</li>
                  <li>有效CSCS或相关上岗证书</li>
                  <li>工作地点-伦敦</li>
                  <li>工作时间-周一到周五，除非有特殊需要</li>
                </ul>
              </div>
            </div>
            <div className="join-us__vacancy">
              <div className="join-us__vacancy-title">司机</div>
              <div className="join-us__vacancy-description">
                <ul>
                  <li>要求讲中英文</li>
                  <li>对英国各地尤其是旅游景点熟悉</li>
                  <li>友善、容易与人相处</li>
                  <li>工作时间-周一到周五，除非有特殊需要</li>
                </ul>
              </div>
            </div>
            <div className="join-us__vacancy">
              <div className="join-us__vacancy-title">家政服务-保姆、月嫂、陪护、照顾老人</div>
              <div className="join-us__vacancy-description">
                <ul>
                  <li>需要有相关工作经验</li>
                  <li>工作地点-伦敦</li>
                  <li>工作时间-根据客人需要弹性工作时间</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default (Join);