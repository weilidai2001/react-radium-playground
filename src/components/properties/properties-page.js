import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as proertyActions from '../../actions/property-actions';
import PropertiesContainer from './properties-container';

const propertiesStub = {
  properties: [
    {
      "id": 1469384194691,
      "propertyType": "residential",
      "order": "9",
      "price": "£2,950,000",
      "descriptionSummary": "<div>此豪华花园洋房（现房）是难得出现的精品，不可错过！它位于伦敦西北市郊，尽享田园风</div><div>光。这里是老牌富人区，社区环境及治安极佳。同时此处交通便利，住户能随时快捷地进入</div><div>伦敦市区。</div><div><br></div><div>地址： Rickmansworth, Hertfordshire, WD3 4AL</div><div>格局及设施：6间客厅、4间带独立卫浴的睡房、2间衣帽间。包含家庭影院、健身房、花园</div><div>等设施。</div><div>房屋占地面积：452平方米</div><div>洋房花园总占地面积：2.46英亩/近1千平方米</div><div>产权：永久产权</div><div>价格：£2,950,000</div>",
      "googleSearchQuery": "Rickmansworth, Hertfordshire, WD3 4AL",
      "attributes": ["6间客厅、4间带独立卫浴的睡房、2间衣帽间", "含家庭影院、健身房、花园 等设施", "洋房花园总占地面积：2.46英亩/近1千平方米", "永久产权"],
      "gallery": ["https://liuinternational.s3.amazonaws.com/asset/1469384525777.jpg", "https://liuinternational.s3.amazonaws.com/asset/1469384540413.jpg", "https://liuinternational.s3.amazonaws.com/asset/1469384548233.jpg"],
      "descriptionOther": "<div>整栋洋房配有地暖，主要房间铺有实木地板。</div><div>浴室安装知名品牌villeroy and boch系统。</div><div>洋房含报警系统。</div><div><br></div><div>此洋房于2001年由知名建筑设计公司Dusek Design专门为当前房主改造而成。</div><div>一间主卧和两间客卧均自带浴室。第四间卧室则可使用独立的家庭浴室。</div><div>洋房含有家庭影院、健身房和酒窖。</div><div>周边有多家优质学校可供选择，适合有学龄儿童的家庭。</div><div>如有需要，洋房二层通过改造可以增加一间卧室，使卧室总数达到5间。</div><div>厨房/餐厅直面花园，就餐环境优美。厨房配有完整高级设备，入住后立等可用。</div>",
      "floorPlans": ["https://liuinternational.s3.amazonaws.com/asset/1469384604482.jpg"],
      "descriptionTravel": "<div>房产位于Hertfordshire，当地为富人区，公共环境整洁，治安有保障。</div><div>生活交通：</div><div>驾车只需6分钟可至富裕小镇Rickmansworth，方便采买生活用品或进行娱乐休闲活动——</div><div>咖啡厅、酒吧等一应俱全。</div><div>进伦敦：</div><div>驾车至伦敦一区（Kingscross 站）只需54分钟。</div><div>使用公共交通（地铁线Metropolitan Line）进入伦敦一区则只需1个半小时左右。</div><div>游英国：</div><div>M25高速公路尽在咫尺，方便随时驾车游玩整个英国。</div>",
      "bedrooms": "4",
      "bathrooms": "4",
      "livingrooms": "6",
      "thumbnail": "https://liuinternational.s3.amazonaws.com/asset/1469384696834.jpg",
      "descriptionLifestyle": "<div>驾车至伦敦一区（Kingscross 站）只需54分钟。</div><div>使用公共交通（地铁线Metropolitan Line）进入伦敦一区则只需1个半小时左右。</div><div>游英国：</div><div>M25高速公路尽在咫尺，方便随时驾车游玩整个英国。</div>",
      "shortDescription": "伦敦西北市郊独栋豪华花园洋房在售",
      "surroundingsPoster": "https://liuinternational.s3.amazonaws.com/asset/1469385972102.jpg"
    }
  ]
};

class PropertiesPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const {properties} = propertiesStub;

    return (
      <PropertiesContainer properties={properties}/>
    );
  }
}

export default PropertiesPage;