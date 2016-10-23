import delay from './delay';

var properties = [
  {
    "id": "R1",
    "propertyType": "residential",
    "price": "£685,000",
    "brochureUrl": "/files/Lexicon.pdf",
    "thumbnail": "/img/properties/lexicon.jpg",
    "shortDescription": "伦敦一区一室一厅现房公寓",
    "location": "Lexicon, London EC1V",
    "googleSearchQuery": "Lexicon, London EC1V",
    "attributes": ["48.7平米高科技公寓 地理位置优越", "7分钟步行至Angel Station 8分钟步行至Old Street Station", "毗邻伦敦电子城和City University", "名家设计装潢 智能家居系统", "环绕各式餐厅、酒吧、博物馆"],
    "descriptionLifestyle": "<div>2016年初交付的Lexicon位于伦敦东北一区,处在伦敦的黄金发展区域,地理位 置优越,可直接步行到城市中心。公寓共 36 层,由世界第一       高楼迪拜的哈利法 塔背后的工程师打造,洋溢现代化气息。</div><div>周边环境信息</div><div>环绕各式餐厅、酒吧、电影院、博物馆;</div><div>毗邻金融城,是国际创业界焦点; 分布众多高校科研机构,包括伦敦大学学院(UCL)、伦敦城市大学(City)、伦敦 政治经济学院(LSE)等。</div>",
    "floorPlans": ["/img/properties/R1/R1_5.png"],
    "descriptionTravel": "<div>交通便利,毗邻伦敦摄政运河和城市码头,临近各个地铁站:</div><ul><li>步行 7 分钟到 Angel Station;</li><li>步行 8 分钟到 Old Street Station,;</li><li>步行 15 分钟到 Moorgate Station;</li><li>步行 17 分钟到 King’s Cross St. Pancras; 步行 19 分钟到 Liverpool Street Station。</li></ul>",
    "gallery": ["/img/properties/R1/R1_1.jpg", "/img/properties/R1/R1_2.jpg", "/img/properties/R1/R1_3.png", "/img/properties/R1/R1_4.jpg", "/img/properties/R1/R1_6.jpg"],
    "bedrooms": 1,
    "bathrooms": 1,
    "livingrooms": 1,
    "descriptionSummary": "<div>2016年初交付的Lexicon位于伦敦东北一区,处在伦敦的黄金发展区域,地理位 置优越,可直接步行到城市中心。公寓共 36 层,由世界第一       高楼迪拜的哈利法 塔背后的工程师打造,洋溢现代化气息。</div><div>周边环境信息</div><div>环绕各式餐厅、酒吧、电影院、博物馆;</div><div>毗邻金融城,是国际创业界焦点; 分布众多高校科研机构,包括伦敦大学学院(UCL)、伦敦城市大学(City)、伦敦 政治经济学院(LSE)等。</div><div>其它信息</div><ul><li>智能家居系统,随时控制照明、室内温度等;</li><li>音频和人像识别开门系统; 大堂接待处全年无休,24 小时服务;</li><li>全楼覆盖闭路电视监控安全系统。</li></ul><div>Lexicon 正迅速成为房地产投资的黄金旺地,越来越多的国际学生、银行家、IT 精英等高收入人士将目光投到这一区域。无论工作还是求学,Lexicon 都是乐享 伦敦国际化都市生活的不二之选。</div>",
    "descriptionOther": "<ul><li>智能家居系统,随时控制照明、室内温度等;</li><li>音频和人像识别开门系统; 大堂接待处全年无休,24 小时服务;</li><li>全楼覆盖闭路电视监控安全系统。</li></ul><div>Lexicon 正迅速成为房地产投资的黄金旺地,越来越多的国际学生、银行家、IT 精英等高收入人士将目光投到这一区域。无论工作还是求学,Lexicon 都是乐享 伦敦国际化都市生活的不二之选。</div>",
    "surroundingsPoster": "https://liuinternational.s3.amazonaws.com/asset/1468686070886.png",
    "order": "50"
  }, {
    "id": "R2",
    "propertyType": "residential",
    "price": "SOLD",
    "thumbnail": "/img/properties/Pimlico-SW1V.jpg",
    "shortDescription": "伦敦市中心全新装修公寓",
    "location": "Pimlico, London SW1V",
    "googleSearchQuery": "Pimlico, London SW1V",
    "attributes": ["现房、产权 123年、36平米", "最近地铁站Pimlico、Victoria", "步行距离：泰晤士河边、议会大厦、白金汉宫、伦敦眼、Sloane Square、Harrods、Knightsbridge", "近Imperial College", "物业费 £95/月，council tax £56/月"],
    "bedrooms": 1,
    "bathrooms": 1,
    "livingrooms": 1,
    "order": "1200"
  }, {
    "id": "R3",
    "propertyType": "residential",
    "price": "£2,750,000 ",
    "thumbnail": "/img/properties/hampstead-NW3.jpg",
    "shortDescription": "伦敦高尚地段4室2厅豪华别墅",
    "location": "Hampstead London NW3",
    "googleSearchQuery": "Hampstead London NW3",
    "attributes": ["296平米永久产权 地理位置优越", "1分钟步行至Finchley Road地铁站、银行、超市", "5分钟步行至O2 centre(餐厅、咖啡、电影院、书店等)", "名家设计装潢、室内大型高清3D影院系统", "所有灯光、音响、影像apps控制"],
    "bedrooms": 4,
    "bathrooms": 2,
    "livingrooms": 2,
    "order": "700"
  }, {
    "id": "R4",
    "propertyType": "residential",
    "price": "SOLD",
    "thumbnail": "/img/properties/earls-court.jpg",
    "shortDescription": "伦敦一区 85平米 Earls Court最新精装修公寓",
    "location": "Earl's Court, London",
    "googleSearchQuery": "Earl's Court, London",
    "attributes": ["共享永久产权", "最新装修宽敞Penthouse style 公寓", "伦敦1区1分钟到地铁站", "1分钟到达附近餐厅、咖啡店、超市等", "市中心、机场方便快捷"],
    "bedrooms": 2,
    "bathrooms": 1,
    "livingrooms": 1,
    "order": "1000"
  }, {
    "id": "R5",
    "propertyType": "residential",
    "price": "£8,500,000",
    "thumbnail": "/img/properties/oxford-mansion.jpg",
    "shortDescription": "英国牛津郡独栋8豪华万平米花园洋房",
    "location": "Oxfordshire, England",
    "googleSearchQuery": "Oxfordshire, England",
    "attributes": ["独栋6房洋房，独栋3房客房", "永久产权", "距伦敦62公里/50分钟车程", "建筑总面积 938 平方米", "19.5 英亩/80000 平方米花园绿地", "私家泳池 + 网球场"],
    "bedrooms": 2,
    "bathrooms": 2,
    "livingrooms": 1,
    "order": "900"
  }, {
    "id": "R6",
    "propertyType": "residential",
    "price": "£2,800,000",
    "thumbnail": "/img/properties/2015-07-09-13-11-58-300x224.png",
    "shortDescription": "法国南部图卢兹城堡",
    "location": "Chateau, Toulouse, South France",
    "googleSearchQuery": "Chateau, Toulouse, South France",
    "attributes": ["主城堡,城堡公寓和城堡客房", "建筑总面积 1200 平方米", "10 公顷/10000 平方米花园绿地自然湖泊/50分钟车程", "豪华庭院,私家恒温泳池", "城堡拥有并定制上等葡萄酒", "近滑雪场,高尔夫,温泉"],
    "bedrooms": 11,
    "bathrooms": 8,
    "livingrooms": 8,
    "order": "800"
  }, {
    "id": "R7",
    "propertyType": "residential",
    "price": "£975,000 - £6,000,000",
    "thumbnail": "/img/properties/2015-07-16-17-11-13-300x225.png",
    "shortDescription": "伦敦中心豪华公寓",
    "location": "Great Minster House, London SW1",
    "googleSearchQuery": "Great Minster House, London SW1",
    "attributes": ["2015年现房，999年产权", "地段优越交通便利", "西敏寺大本钟步行10分钟", "24/7大堂服务", "2015年夏竣工", "地下停车场"],
    "bedrooms": "1-3",
    "bathrooms": "1-3",
    "livingrooms": "1-2",
    "order": "600"
  }, {
    "id": "R8",
    "propertyType": "residential",
    "price": "£430,000",
    "brochureUrl": "/files/New-Festival-Quarter-E14.pdf",
    "thumbnail": "/img/properties/Screen-Shot-2015-04-06-at-08.22.44-300x204.png",
    "shortDescription": "东伦敦花园公寓",
    "location": "New Festival Quarter, E14",
    "googleSearchQuery": "Lindfield Street, E14",
    "attributes": ["现房，115年产权", "交通便利、近N. Circular Road", "学区房", "距离David Lloyd 网球中心、Vue电影院、Ask 餐厅150米", "公共花园/私家停车位"],
    "gallery": ["/img/properties/R8/R8_1.jpg", "/img/properties/R8/R8_2.jpg", "/img/properties/R8/R8_3.jpg", "/img/properties/R8/R8_4.jpg", "/img/properties/R8/R8_5.jpg", "/img/properties/R8/R8_7.jpg"],
    "fullDescription": "\n      <p>位于金丝雀码头对面，这处住宅的地理位置极为优越，可以为您的生\n      活起居带来极大地便利。房屋朝向为西，在宽敞明亮的房间里，您可\n      以享受着和煦的朝阳，开始一天的生活。24 小时大堂服务、安全录像\n      设施控制、高档的厨具和卫浴等等为您生活的惬意和舒心提供了保障。</p>\n      <h3>基本信息</h3>\n      <ul>\n        <li>52.3 平米</li>\n        <li>现房</li>\n        <li>产权 250 年（自 2010 年 10 月 1 日起）</li>\n      </ul>\n      <h3>房屋情况</h3>\n      <ul>\n        <li>楼层位置 1 层（共 9 层）</li>\n        <li>朝向为西</li>\n        <li>敞开式客厅/厨房</li>\n        <li>配有阳台</li>\n        <li>全套高端 AEG 厨房用具</li>\n        <li>罗卡白卫浴</li>\n        <li>全套节能 LED 灯设置、节能系统装潢</li>\n      </ul>\n      <h3>物业</h3>\n      <ul>\n        <li>免费私家住户运动房</li>\n        <li>24 小时大堂服务</li>\n        <li>安全录像设施控制</li>\n        <li>公共私人全套保险门设置</li>\n      </ul>\n      <h3>其他</h3>\n      <ul>\n        <li>租金 1586/月 (年回报 4.9%)</li>\n        <li>地方政府税£1052/年</li>\n        <li>服务费£1160/年</li>\n      </ul>\n    ",
    "floorPlans": ["/img/properties/R8/R8_6.png"],
    "travelDescription": "\n      <h3>周边设施及环境</h3>\n      <p>公园景致,北临 Bartlett 公园园景公寓,西邻 Lime House,金丝雀码头近\n      在咫尺;距离 David Lloyd 网球中心、Vue 电影院、Ask 餐厅 150 米;可\n      便捷前往周边学校,距离 Queen and Mary University London1.6 英里, Barts2.1 英里等等;轻轨 DLR 可直达金融城,Westfield 购物中心/奥林匹克\n      公园,格林威治和 City Airport。 位于金丝雀码头对面,步行即可到达东伦敦各大商圈及休闲娱乐中心;\n      7 分钟可到达 Canary Wharf,9 分钟可到达 Stratford City;轻轨 DLR 可直 达金融城,Westfield 购物中心/奥林匹克公园,格林威治和 City Airport。\n      步行 10 分钟到达 All Saints 轻轨站,半小时内前往伦敦市中心各处。\n      例如 14 分钟到达 Bank,18 分钟到达 London Bridge,19 分钟到达 Liverpool Street,25 分钟到达 Kings Cross St Pancras 等等。</p>\n    ",
    "bedrooms": 2,
    "bathrooms": 1,
    "livingrooms": 1,
    "order": "60"
  }, {
    "id": "R9",
    "propertyType": "residential",
    "price": "£585,000",
    "thumbnail": "/img/properties/2015-03-21-13-22-28-300x205.png",
    "shortDescription": "伦敦一区期房",
    "location": "Southwark Bridge Road, London SE1",
    "googleSearchQuery": "Southwark Bridge Road, London SE1",
    "attributes": ["2017年秋竣工、999年产权", "伦敦眼、泰晤士河景", "步行至国会大厦、金融城", "名家设计，冬景花园", "私家健身房、电影院", "24/7大堂服务"],
    "bedrooms": 1,
    "bathrooms": 1,
    "livingrooms": 1,
    "order": "60"
  }, {
    "id": "R10",
    "propertyType": "residential",
    "price": "£595,000起",
    "thumbnail": "/img/properties/launge1-300x198.png",
    "shortDescription": "泰晤士南岸一区小型公寓现房",
    "location": "The One Elephant, Elephant Castle",
    "googleSearchQuery": "The One Elephant, Elephant Castle",
    "attributes": ["2016年春竣工，250 年产权", "伦敦一区, 距离地铁站160 米", "超豪华室内厨房卫浴装潢", "私家阳台，住户读书角/花园", "闭路电视监控安全系统", "24/7大堂服务"],
    "bedrooms": 1,
    "bathrooms": 1,
    "livingrooms": 1,
    "order": "45"
  }, {
    "id": "R11",
    "propertyType": "residential",
    "price": "£450,000",
    "thumbnail": "/img/properties/IMG-1032-300x225.jpg",
    "shortDescription": "金融城附近一区现房",
    "location": "London, E1",
    "googleSearchQuery": "London, E1",
    "attributes": ["邮编E1, 紧邻金融城", "交通便利,15分钟步行至：金融城、伦敦塔、塔桥圣凯瑟琳码头、博罗市场、Spitalfields Market、哥伦比亚鲜花市场", "SMEG 厨具，CCTV监视系统"],
    "bedrooms": 1,
    "bathrooms": 1,
    "livingrooms": 1,
    "order": "40"
  }, {
    "id": "R12",
    "propertyType": "residential",
    "price": "SOLD",
    "thumbnail": "/img/properties/gallery10-300x168.jpg",
    "shortDescription": "伦敦时尚公寓房",
    "location": "Stratosphere, Stratford, London E15",
    "googleSearchQuery": "Stratosphere, Stratford, London E15",
    "attributes": ["2017年夏竣工、999年产权", "步行1分钟到Stratford 地铁站 2 分钟到Westfield 购物中心", "毗邻奥林匹克公园场馆", "2016年后为伦敦2区", "住户私家健身房"],
    "bedrooms": 1,
    "bathrooms": 1,
    "livingrooms": 1,
    "order": "1300"
  }, {
    "id": "R13",
    "propertyType": "residential",
    "price": "SOLD",
    "thumbnail": "/img/properties/325-300x200.jpeg",
    "shortDescription": "北伦敦现代公寓",
    "location": "Finchley, London N3",
    "googleSearchQuery": "Finchley, London N3",
    "attributes": ["现房，115年产权", "交通便利、近N. Circular Road", "学区房", "距离David Lloyd 网球中心、Vue电影院、Ask 餐厅150米", "公共花园/私家停车位"],
    "bedrooms": 2,
    "bathrooms": 1,
    "livingrooms": 1,
    "order": "1100"
  }, {
    "id": "B1",
    "propertyType": "business",
    "title": "意大利著名旅游胜地撒丁岛投资项目",
    "brochureUrl": "",
    "thumbnail": "/img/properties/italian-warehouse.jpg",
    "shortDescription": "伦敦一区一室一厅现房公寓",
    "location": "Lexicon, London EC1V",
    "googleSearchQuery": "Lexicon, London EC1V",
    "attributes": ["Olbia Costa Smeralda 国际机场1小时车程", "距海边6分钟", "3幢建筑面积分别为：510 平米/610平米/360平米", "土地4600平米", "注资：90万英镑", "投资潜力：可以申请酒店、工厂、储存、船舶等"]
  }, {
    "id": "H1",
    "propertyType": "hotel",
    "title": "英国中部酒店项目",
    "thumbnail": "/img/properties/Hotel-Room.jpg",
    "attributes": ["翻新项目", "110间房", "注资5百万英镑，翻新后将市值达到8百万", "周期18个月", "有专业运营管理公司代管"]
  }, {
    "id": "H2",
    "propertyType": "hotel",
    "title": "曼城市中心4*酒店投资项目",
    "thumbnail": "/img/properties/manchester-hotel.png",
    "attributes": ["永久产权 2011年开业", "12层 共150间客房", "面积5700 平米", "1千7百万英镑", "2013 年税前利润为130万英镑"]
  }, {
    "id": "H3",
    "propertyType": "hotel",
    "title": "英国中部酒店项目",
    "thumbnail": "/img/properties/leeds-hotel.jpg",
    "attributes": ["近曼彻斯特、利兹、湖区", "120间房", "注资8百万英镑，建成后市值1千2百万英镑", "可供贷款60%，利率3.25%", "周期3年", "有专业运营管理公司代管"]
  }, {
    "id": 1468694894005,
    "propertyType": "residential",
    "shortDescription": "伦敦好房Camden Courtyards 火热预售",
    "location": "NW1 Camden",
    "price": "£610,000",
    "thumbnail": "https://liuinternational.s3.amazonaws.com/asset/1468695262116.jpg",
    "descriptionSummary": "<div>英国最大的品牌房地产企业之一 Barratt (邦瑞)开发的Camden Courtyards公寓楼，现</div><div>火热预售一至三居室。</div><div>Camden Courtyards位于历史悠久，文化生活丰富的Camden区。紧邻伦敦中心一区,</div><div>交通便利。附近是皇家摄政公园和伦敦大学学院。</div><div><br></div><div>【期房】</div><div>地址：伦敦NW1 Camden区</div><div>户型：一居室、二居室、三居室</div><div>设施：大堂门卫服务、社区花园、自行车储藏室等</div><div>房屋面积：一居室50平方米起</div><div>价格：一居室GBP 610,000起</div><div>2017年春竣工</div>",
    "attributes": ["伦敦NW1 Camden区", "一居室、二居室、三居室", "大堂门卫服务、社区花园、自行车储藏室等", "一居室50平方米起", "一居室GBP 610,000起", "2017年春竣工"],
    "gallery": ["https://liuinternational.s3.amazonaws.com/asset/1468696969766.jpg", "https://liuinternational.s3.amazonaws.com/asset/1468696980176.jpg", "https://liuinternational.s3.amazonaws.com/asset/1468697009132.jpg", "https://liuinternational.s3.amazonaws.com/asset/1468697178782.jpg", "https://liuinternational.s3.amazonaws.com/asset/1468697411751.jpg", "https://liuinternational.s3.amazonaws.com/asset/1468697420968.jpg", "https://liuinternational.s3.amazonaws.com/asset/1469383520625.jpg"],
    "descriptionOther": "<div>精装修:木质地板、地毯;地热供暖; 一体式设计厨房,设施齐全:烤箱、微波炉、抽油烟机、电冰箱、洗碗机; </div><div>主卧室:嵌入式衣橱 其他设备:洗衣烘干一体洗衣机,BT网络及Sky电视网络接入等。</div><div><br></div><div>所用公寓安装复合式门锁; </div><div>公共区域CCTV监控; </div><div>小区电子卡输入刷出;</div><div>2 年邦瑞房屋质量保证;</div><div>10 年NHBC建筑质量保证 ; </div><div>999 year lease</div>",
    "descriptionLifestyle": "<div>Camden Courtyards地处文艺气息浓厚的Camden区,许多英国作家、艺术家和影视 艺人出自此处。</div><div>Camden区有大大小小的市集,各具特色。</div><div>步行15分钟可到达风景如画的皇家摄政公园</div><div>坐地铁两站路或骑车10分钟,到达UCL-伦敦大学学院——它与剑桥、牛津、帝国理工、伦敦政经并称“G5超级精英”大学。</div><div>骑车15分钟, 途径摄政公园,到达伦敦商学院——全球最顶尖的10所商学院之一。</div>",
    "descriptionTravel": "<div>Camden Road 地铁站:步行2分钟 Camden Town 地铁站:步行7分钟</div><div>Kentish Town 地铁站:步行13分钟</div><div>St Pancras欧洲之星火车站: 骑车7分钟/步行20分钟 </div><div>皇家摄政公园:骑车7分钟/步行20分钟</div><div><br></div><div>乘坐地铁/火车: </div><div>18分钟到达唐人街 </div><div>19分钟到达牛津街购物街 </div><div>25分钟到达白金汉宫 </div><div>30分钟到达东南金融区金丝雀码头</div>",
    "bedrooms": "1-3",
    "bathrooms": "1+",
    "livingrooms": "1+",
    "order": "10",
    "googleSearchQuery": "102 St Pancras Way, London NW1 9ND",
    "floorPlans": ["https://liuinternational.s3.amazonaws.com/asset/1469385829802.jpg"],
    "surroundingsPoster": "https://liuinternational.s3.amazonaws.com/asset/1469385817696.jpg"
  }, {
    "id": 1468789030631,
    "propertyType": "residential",
    "shortDescription": "伦敦1区核心地带Elephant Park二期项目West Grove多户型在售",
    "price": "£539,000起",
    "descriptionSummary": "<div>Elephant Park位于伦敦黄金一区地带,是集现代公寓、户外花园、健身中心、私人会 所为一体的高级生活社区。</div><div><br></div><ul><li>地址:伦敦一区 Elephant Castle </li><li>户型:工作室公寓、一室一厅、两室一厅和三室一厅 </li><li>设施:24小时门卫、社区健身房、花园、公共活动室等 </li><li>价格:£539,000起</li></ul>",
    "attributes": ["伦敦一区 Elephant Castle", "工作室公寓、一室一厅、两室一厅和三室一厅", "24小时门卫、社区健身房、花园、公共活动室等"],
    "thumbnail": "https://liuinternational.s3.amazonaws.com/asset/1468789213231.png",
    "gallery": ["https://liuinternational.s3.amazonaws.com/asset/1469382281791.jpg", "https://liuinternational.s3.amazonaws.com/asset/1469382289022.jpg", "https://liuinternational.s3.amazonaws.com/asset/1469382296399.jpg", "https://liuinternational.s3.amazonaws.com/asset/1469382306165.jpg", "https://liuinternational.s3.amazonaws.com/asset/1469382315212.jpg", "https://liuinternational.s3.amazonaws.com/asset/1469382323749.jpg", "https://liuinternational.s3.amazonaws.com/asset/1469382370466.jpg"],
    "descriptionTravel": "<div>Elephant Park位于伦敦1区黄金地区,所有伦敦市内的风景名胜——各大博物馆、泰 晤士河畔唐人街、各大名校等——均可骑车甚至步行到达!</div><div><br></div><div>最近地铁站Elephant Castle及公车站:5分钟步行</div><div><br></div><div>从Elephant Castle到伦敦其他重要站点所需时间(坐地铁或火车): Waterloo火车站 4 分钟</div><div>Bank金融区 5分钟</div><div>Piccadilly Circus购物区 8 分钟</div><div>牛津街购物区 10分钟</div><div>唐人街 14分钟</div><div>金丝雀码头金融区 16分钟</div><div>St Pancras欧洲之星火车站 21分钟 希思罗机场 42分钟</div>",
    "bedrooms": "1+",
    "bathrooms": "1+",
    "livingrooms": "1+",
    "googleSearchQuery": "Elephant Park London",
    "order": "30",
    "descriptionLifestyle": "<div>Elephant Park周边有丰富无比的餐饮和娱乐选择，只需步行您便可到达：</div><div>最具风情的伦敦露天市场 Borough Market</div><div>数不胜数的特色餐厅</div><div>大本钟和伦敦眼</div><div>莎士比亚露天剧场</div><div>帝国军事博物馆</div><div>知名全球的泰特美术馆</div>",
    "surroundingsPoster": "https://liuinternational.s3.amazonaws.com/asset/1469382665095.jpg",
    "floorPlans": ["https://liuinternational.s3.amazonaws.com/asset/1469385090087.png", "https://liuinternational.s3.amazonaws.com/asset/1469385097292.png"]
  }, {
    "id": 1468789843156,
    "propertyType": "residential",
    "shortDescription": "The Stage 高级公寓伦敦潮流区 EC2",
    "price": "£695,000 起",
    "thumbnail": "https://liuinternational.s3.amazonaws.com/asset/1468789945568.jpg",
    "order": "20",
    "surroundingsPoster": "https://liuinternational.s3.amazonaws.com/asset/1469380047827.jpg",
    "descriptionSummary": "<div>The Stage 位于伦敦新贵Shoreditch 核心区，37 层的综合功能摩天楼，</div><div>含高级公寓、商业用房和娱乐中心等。</div><div><br></div><div>【期房】</div><div>地址：伦敦EC2 Shoreditch 区</div><div>户型：一居室至三居室</div><div>设施：24 小时门卫、有偿家政服务、美容院和健身中心、顶层酒吧等</div><div>房屋面积：具体面积请电邮询问</div><div>价格：GBP 695,000 起</div><div>2017 年竣工</div><div>999-year lease</div>",
    "attributes": ["伦敦EC2 Shoreditch 区", "一居室至三居室", "24 小时门卫、有偿家政服务、美容院和健身中心、顶层酒吧等", "GBP 695,000 起", "2017 年竣工", "999-year lease"],
    "gallery": ["https://liuinternational.s3.amazonaws.com/asset/1469380163678.jpg", "https://liuinternational.s3.amazonaws.com/asset/1469380172095.jpg", "https://liuinternational.s3.amazonaws.com/asset/1469380201153.jpg", "https://liuinternational.s3.amazonaws.com/asset/1469380215148.jpg"],
    "floorPlans": ["https://liuinternational.s3.amazonaws.com/asset/1469380409796.jpg"],
    "descriptionOther": "<div>公寓配备：Sonos 智能音箱系统、超快光纤网路、绝大多数公寓带阳台、</div><div>智能能源系统——酒店式一键关电源</div><div>全新卫浴，带地暖</div><div><br></div><div>6 年出租收入保障 (6 Year Corperate Rental Guarantee)</div><div>3 年健身美容中心免费会员</div><div><br></div><div>The Stage 开发过程中出土了东伦敦都铎王朝某剧院遗址，二莎士比亚曾</div><div>经在此演出。The Stage 将把遗址完整保存，成为日后公共景点。</div><div>入住此处，仿佛与莎翁做邻居。世界就是你的舞台。</div>",
    "descriptionTravel": "<div>最近车站：</div><div>Shoreditich High Street 地铁站：2 分钟步行</div><div>Old Street 地铁站：5 分钟步行</div><div>Liverpool Street 地铁站：5 分钟步行</div><div>乘坐地铁/火车：</div><div>8 分钟到到达St Pancras 欧洲之星火车站</div><div>9 分钟到达牛津街购物街</div><div>10 分钟到达唐人街</div><div>18 分钟到达西敏寺</div><div>由于房产位置十分核心，选择骑行也可轻松玩转伦敦市中心～</div><div>13 分钟到达伦敦桥</div><div>18 分钟到达考文特花园风情购物区</div><div>23 分钟到达金丝雀码头</div><div>伦敦1 区东部不少景点和餐椅场合均可步行到达！</div>",
    "descriptionLifestyle": "<div>位于Shoreditch 区的The Stage，是伦敦最火热的潮流中心，同时紧邻</div><div>Bank 金融区，不论工作娱乐都十分便利。</div><div>这里有英国的“硅谷”Silicon Roundabout 科技创业区。</div><div>这里还有数不尽的当地特色餐饮。</div><div>附近的Bricklane 到处是独立设计师品牌店，出售独一无二的产品和服饰。</div><div>周边高级就餐场合包括Sushi Samba 等</div>",
    "bedrooms": "1-3",
    "bathrooms": "1-3",
    "googleSearchQuery": "28 Curtain Rd, London EC2A 3NZ, United Kingdom"
  }, {
    "id": 1468790186373,
    "shortDescription": "Two Fifty One高级公寓伦敦市中心SE1",
    "price": "£596,000起",
    "propertyType": "residential",
    "order": "10",
    "descriptionSummary": "<div>Two Fifty One位于繁华的伦敦市中心Southwark区，41层高级现代公寓，含有多户型住房以及各项休闲娱乐设施。</div><div><br></div><div>【期房】</div><div>地址：伦敦SE1 Southwark区</div><div>户型：一居室、二居室、三居室</div><div>设施：24小时门卫、社区健身房、花园、公共活动室等</div><div>房屋面积：48.4平方米起</div><div>价格：GBP 596,000起</div><div>房屋租金：1800/月起</div><div>自带2年出租收入保障 (2 Year Corperate Rental Guarantee)</div><div>2017年竣工</div>",
    "attributes": ["伦敦SE1 Southwark区", "一居室、二居室、三居室", "24小时门卫、社区健身房、花园、公共活动室等", "48.4平方米起", "自带2年出租收入保障 (2 Year Corperate Rental Guarantee)", "2017年竣工"],
    "surroundingsPoster": "https://liuinternational.s3.amazonaws.com/asset/1469379536218.jpg",
    "gallery": ["https://liuinternational.s3.amazonaws.com/asset/1469379162950.jpg", "https://liuinternational.s3.amazonaws.com/asset/1469379205747.png", "https://liuinternational.s3.amazonaws.com/asset/1469379218281.png", "https://liuinternational.s3.amazonaws.com/asset/1469379230450.png", "https://liuinternational.s3.amazonaws.com/asset/1469379247829.png", "https://liuinternational.s3.amazonaws.com/asset/1469379285829.jpg", "https://liuinternational.s3.amazonaws.com/asset/1469379341902.jpg"],
    "descriptionTravel": "<div>Borough地铁站：5分钟步行</div><div>London Bridge地铁站：8分钟步行</div><div>Southerwark地铁站：9分钟步行</div><div>London Waterloo East火车站：13分钟步行</div><div><br></div><div>乘坐地铁/火车：</div><div>19分钟到达唐人街</div><div>16分钟到达牛津街购物街</div><div>11分钟到达St Pancras欧洲之星火车站</div>",
    "descriptionLifestyle": "<div>Southwark的文化娱乐选择十分丰富，近在咫尺的包括：</div><div>大本钟和伦敦眼</div><div>最具风情的伦敦露天市场 Borough Market</div><div>知名全球的泰特美术馆</div><div>集餐饮、娱乐和文化活动一体的Southbank文化中心</div><div>以及数不胜数的特色餐厅、咖啡馆等</div>",
    "descriptionOther": "<div>全部户型安装地暖系统</div><div>社区自带餐厅和咖啡馆</div><div>4部小区居民使用电梯，其中两部为19层以上居民专用</div><div>楼内配自行车储藏间</div><div>10年英国建房理事会质量保证</div><div>999-year lease</div>",
    "bedrooms": "1-3",
    "bathrooms": "1-3",
    "thumbnail": "https://liuinternational.s3.amazonaws.com/asset/1469379788430.jpg",
    "googleSearchQuery": "251 Southwark Bridge Road, London SE1 6NP"
  }, {
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
  },
  {
    "id": 123,
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
  }];

const generateId = () => {
  return (new Date()).getTime();
};

class PropertyApi {
  static getAllProperties() {
    return new Promise((resolve, reject) => {
      resolve(Object.assign([], properties));
    });
  }

  static saveProperty(property) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (property.id) {
          console.log("saving existing property");
          const existingCourseIndex = properties.findIndex(a => a.id == property.id);
          properties.splice(existingCourseIndex, 1, property);
        } else {
          //Just simulating creation here.
          //The server would generate ids and watchHref's for new courses in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          property.id = generateId();
          properties.push(property);
        }

        resolve(Object.assign({}, property));
      }, delay);
    });
  }

  static deleteProperty(propertyId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfPropertyToDelete = properties.findIndex(course => course.courseId == propertyId);
        properties.splice(indexOfPropertyToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default PropertyApi;