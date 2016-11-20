import React from 'react';
import Navbar from '../components/common/navbar';

class Homepage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (

      <div className="homepage">
        <nav>
          <Navbar/>
        </nav>
        <div className="homepage__container">
          <div id="carousel-welcome" className="homepage--carousel"></div>

          <div id="investment" className="homepage__services">
            <div className="homepage__service">
              <div className="homepage__service-title">投资服务</div>
              <div className="homepage__service-summary">
                <p>我们是在英国和海外具有丰富经验的投资人，在不同种类的房产投资都获得了非常满意的回报。目前我们也在寻找更多的投资机会包括各种私人、商业投资项目。</p>
                <p>除了我们公司及股东在房产项目上的投资，同时我们也帮助客户，尤其是对英国投资缺乏经验的亚洲投资人在投资选项上做出正确的判断：“赚钱不是您卖出项目时，而是您买进的时候”。</p>
              </div>
              <div className="homepage__service-item">
                <div className="homepage__service-item-title">住房投资</div>
                <div className="homepage__service-item-thumbnail" style={{backgroundImage: "url('/img/house-2216049b.jpg')"}}></div>
                <div className="homepage__service-item-body">
                  <p>根据买方的地点，预算，投资类型（楼花，二手房），期限等要求提供一系列相关服务包括提供房源，选择房产，评估，签约，贷款申请，授权律师，交换合同，支付尾款，到交易完成的一站式服务。</p>
                </div>
              </div>
              <div className="homepage__service-item">
                <div className="homepage__service-item-title">企业投资</div>
                <div className="homepage__service-item-thumbnail" style={{backgroundImage: "url('/img/Financial-Aspects.jpg')"}}></div>
                <div className="homepage__service-item-body">
                  <p>
                    我们有着有多年国际商业投资项目经验的合伙人，并提供满足各种投资者需求的商业、医疗、教育等行业的产品及投资项目，或与英方合资、合作项目。同时刘氏国际提供对卖方公司财务及相关背景调查及评估，及移民、法律等相关服务。</p>
                </div>
              </div>
              <div className="homepage__service-item">
                <div className="homepage__service-item-title">酒店投资</div>
                <div className="homepage__service-item-thumbnail"
                     style={{backgroundImage: "url('/img/2631759-The-Rubens-At-The-Palace-Hotel-London-Hotel-Exterior-1-DEF.jpg')"}}></div>
                <div className="homepage__service-item-body">
                  <p>多年来，我们与不同国际酒店管理集团的良好合作关系让我们有更好的经验帮助无论企业或者个人投资方，为您寻求最为合适的商机和投资项目。</p>
                </div>
              </div>
              <div className="homepage__service-item">
                <div className="homepage__service-item-title">海外投资</div>
                <div className="homepage__service-item-thumbnail"
                     style={{backgroundImage: "url('/img/airport-silhouettes.jpg')"}}></div>
                <div className="homepage__service-item-body">
                  <p>我们提供海外多个黄金投资地区/国家的投资项目和服务，包括英国，巴西，塞浦路斯，迪拜，土耳其等国家。</p>
                </div>
              </div>
            </div>

            <div id="consulting" className="homepage__service">
              <div className="homepage__service-title">咨询服务</div>
              <div className="homepage__service-summary">
                <p>优秀的投资顾问团队不仅帮助您选择您的投资产品，更会大幅度节省时间和精力，减少您的投资困扰，我们的团队包括：投资顾问，税务顾问，律师等等。</p>
                <p>对投资人来说必不可少的是一项是充足的<strong>资金</strong>来源，我们在需要的时候帮您找到需要的资金。</p>
              </div>
              <div className="homepage__service-item">
                <div className="homepage__service-item-title">移民服务</div>
                <div className="homepage__service-item-thumbnail"
                     style={{backgroundImage: "url('/img/flags-of-european-union.jpg')"}}></div>
                <div className="homepage__service-item-body">
                  <p>我们在近年来提供了不同家庭，年龄段的移民服务过程中积攒了大量的经验，也成功尝试了不同类型的移民方式，也与英国顶级的为王室提供服务的律师事务所合作为特殊客户超级体验服务。</p>
                </div>
              </div>
              <div className="homepage__service-item">
                <div className="homepage__service-item-title">海外创业</div>
                <div className="homepage__service-item-thumbnail"
                     style={{backgroundImage: "url('/img/LOndon-Bridge-237569k.jpg')"}}></div>
                <div className="homepage__service-item-body">
                  <p>为来英的各国公司提供一体式服务：从公司选址，注册，开户，保险，广告宣传，到安排企业财富管理，商务贷款，融资等，全面支持您的创业计划。</p>
                </div>
              </div>
              <div className="homepage__service-item">
                <div className="homepage__service-item-title">留学服务</div>
                <div className="homepage__service-item-thumbnail"
                     style={{backgroundImage: "url('/img/University-of-Gloucesters-008.jpg')"}}></div>
                <div className="homepage__service-item-body">
                  <p>针对留学生家长的贴心服务：选校，申请，签证，确认行程，监护人，学校住宿，出发/到达，入学登记，定期访问，联系学校，及时更新学生信息。</p>
                </div>
              </div>
              <div className="homepage__service-item">
                <div className="homepage__service-item-title">公司搬迁（Tier 1）</div>
                <div className="homepage__service-item-thumbnail" style={{backgroundImage: "url('/img/medium-4635660946.jpg')"}}></div>
                <div className="homepage__service-item-body">
                  <p>按英国政府当前100万英镑投资移民规定，我公司帮助企业家/投资人以自有资金或通过向英国银行借贷的形式申请Tier 1 投资移民。</p>
                </div>
              </div>
            </div>

            <div id="other" className="homepage__service">
              <div className="homepage__service-title">其它服务</div>
              <div className="homepage__service-summary">
                <p>
                  同时我们提供各种私人订制服务帮你更好更顺利的了解、发现这个古老有现代的伦敦。刘氏国际曾为许多高端客户在对伦敦的历史，文化，时尚，名流社交，国际美食的了解，融入到英国主流社会起到重要作用。我们的服务包括各种私人定制旅游，私人购物、用餐以及海外旅游度假。</p>
              </div>
              <div className="homepage__service-item">
                <div className="homepage__service-item-title">名流社交</div>
                <div className="homepage__service-item-thumbnail"
                     style={{backgroundImage: "url('/img/fox-hunting_2772078b.jpg')"}}></div>
                <div className="homepage__service-item-body">
                  <p>我们有着毕业于伊顿公学的合伙人,
                    与政界，商界，媒体，艺术，教育，慈善各界有着多年良好合作关系，为多家苏联及中东政要量身定做、安排与英国级社交活动，主要包括：贵族生活体验，私人会所/俱乐部，艺术鉴赏，高尔夫，狩猎，马球等。</p>
                </div>
              </div>
              <div className="homepage__service-item">
                <div className="homepage__service-item-title">私人订制</div>
                <div className="homepage__service-item-thumbnail" style={{backgroundImage: "url('/img/chauffeur-door.jpg')"}}></div>
                <div className="homepage__service-item-body">
                  <p>
                    不论想入住精品酒店或温馨公寓；预定各种旅行、娱乐、体育活动，还是与王室亲历接触的皇家赛马会、下榻英国贵族公爵的私人豪宅，与足球、影视明星们亲密接触，刘氏国际为保障您出行安全提供英国专业私人安全团队服务和珠宝、品牌顾问陪同的私人购物，让您的英国之旅尽显尊贵。</p>
                </div>
              </div>
              <div className="homepage__service-item">
                <div className="homepage__service-item-title">蓝带私房菜</div>
                <div className="homepage__service-item-thumbnail"
                     style={{backgroundImage: "url('/img/Executive-Chef-Charles-Olalia-1-Patina-Photo-Credit-Video-Recipe-Network.jpg')"}}></div>
                <div className="homepage__service-item-body">
                  <p>民以食为天，您在伦敦品尝的一定不是普通的美食，我们为您提供贴身家宴服务，由英国明星级餐厅顶级大厨亲自上门烹制英式、法式、西班牙、印度等国家上等菜肴，让您在伦敦尽享超国际水准佳肴。</p>
                </div>
              </div>
              <div className="homepage__service-item">
                <div className="homepage__service-item-title">爱琴海渡假</div>
                <div className="homepage__service-item-thumbnail"
                     style={{backgroundImage: "url('http://www.flash-screen.com/free-wallpaper/uploads/201105/icos/1305247970.jpg')"}}></div>
                <div className="homepage__service-item-body">
                  <p>
                    我们的度假村坐落在Kusadasi城，距离最近的海滩只有500米。
                    上下共有4层楼4间卧室并都配有观景阳台，3间卫浴，敞开式厨房
                    客厅带有配备烤肉设施的20平米大露台，私人花园，露天泳池，楼
                    顶还有15平方米的海景晒台。适合家庭或朋友一起旅游度假。
                    <a title="投资爱琴海——欢迎你来我们的家" href="https://drive.google.com/open?id=0B0TT-gjNnNlkSFAwUHFyMzI3ZHM"
                       target="_blank">了解更多</a>
                  </p>
                </div>
              </div>
            </div>

          </div>

          <div id="news" className="homepage__news">
            <div className="homepage__news-title">业内新闻</div>
            <a href="#" className="homepage__news-item">
              <div className="homepage__news-item-thumbnail" style={{backgroundImage: "url('/img/news/sidney-hotel.jpg')"}}></div>
              <div className="homepage__news-item-body">
                <div className="homepage__news-item-title">潜在的酒店投资</div>
                <div className="homepage__news-item-date">2015-07-09</div>
                <div className="homepage__news_excerpt">同时，现在还有其他两笔潜在的酒店投资。</div>
              </div>
            </a>
            <a href="https://drive.google.com/file/d/0B0TT-gjNnNlkY240N2xMUVNkTFE/view?usp=sharing" className="homepage__news-item">
              <div className="homepage__news-item-thumbnail"
                   style={{backgroundImage: "url('/img/news/iStock-000010872977XSmall.jpg')"}}></div>
              <div className="homepage__news-item-body">
                <div className="homepage__news-item-title">英国投资都有哪些税费</div>
                <div className="homepage__news-item-date">2015-07-09</div>
                <div className="homepage__news_excerpt">
                  随着越来越多的中国人在海外投资我们每周都收到客户的问题例如购房时的税和费用如何，对此我们特别邀请刘氏国际首席执行官和投资人刘宁特别对英国购房时的税费专门解释分析。无论您是英国居民还是海外投资人，购房过程中先后会有以下费用：律师费、房产评估费、贷款手续费、印花税、房产登记费等。
                </div>
              </div>
            </a>
            <a href="https://drive.google.com/file/d/0B0TT-gjNnNlkRlhlYWhBTHNwUUE/view?usp=sharing" className="homepage__news-item">
              <div className="homepage__news-item-thumbnail" style={{backgroundImage: "url('/img/news/f1.jpg')"}}></div>
              <div className="homepage__news-item-body">
                <div className="homepage__news-item-title">大选之后的房产市场</div>
                <div className="homepage__news-item-date">2015-07-01</div>
                <div className="homepage__news_excerpt">
                  2015年5月8日，将近两个月前那个星期五的上午保守党以绝对优势完全出乎意料的获得大选胜利，在全球政界亦被称为英国选举史上最激动人心的时刻之一。大选的胜利不仅仅给保守党和卡梅伦脸上带来笑容。它也为那些与金融房产等行业带来更多的快乐。
                </div>
              </div>
            </a>
          </div>

          <div id="contact-us" className="homepage__contact">
            <div className="homepage__contact-title">联系我们</div>
            <div className="homepage__contact-body">
              <p>+44 (0)20 7488 0700</p>
              <p><a href="mailto:#">contact@liuinternational.com</a></p>
              <p>Liu international UK Limited</p>
              <p>3 More London Riverside</p>
              <p>London SE1 2RE</p>
            </div>


            <iframe className="homepage__contact-map" style={{border: 0}}
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.486011123935!2d-0.079543399999986!3d51.504299!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487603457e87a241%3A0xb5ae0f69d96d7b85!2sLondon+SE1+2RE!5e0!3m2!1sen!2suk!4v1410698143784"
                    height="400"></iframe>

          </div>
        </div>
      </div>

    );
  }
}

export default (Homepage);