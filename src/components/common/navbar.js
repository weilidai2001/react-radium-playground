import React from 'react';

class Navbar extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div className="nav__content">
        <img className="nav__logo" src={require("../../../assets/img/logo.png")} alt=""/>
        <div className="navbar">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li><a href="/">首页</a></li>
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">业务范围<span className="caret"></span></a>
                <ul className="dropdown-menu">
                  <li><a href="/#investment">投资服务</a></li>
                  <li><a href="/#consulting">咨询服务</a></li>
                  <li><a href="/#other">其它服务</a></li>
                </ul>
              </li>
              <li><a href="/pages/cn/about-us.html">关于我们</a></li>
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">投资项目 <span className="caret"></span></a>
                <ul className="dropdown-menu">
                  <li><a href="/pages/cn/investment.html#residential">住宅投资</a></li>
                  <li><a href="/pages/cn/investment.html#businesses">商业投资</a></li>
                  <li><a href="/pages/cn/investment.html#hotels">酒店投资</a></li>
                </ul>
              </li>
              <li><a href="/index.html#news">业内新闻</a></li>
              <li><a href="/pages/cn/join-us.html">加入我们</a></li>
              <li><a href="/index.html#contact-us">联系我们</a></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;