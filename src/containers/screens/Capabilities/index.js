import React, { Component } from "react";
import "./styles.css";
import { Masterhead, Contentarea } from "../../shared";
import {
  Image,
  Col,
  /* FormGroup,
  FormControl,
  Button,
  Form */ Tab,
  Row,
  Nav,
  NavItem
} from "react-bootstrap";
import Helmet from 'react-helmet';


class Capabilities extends Component {
  renderCapabilitiesContent = () => {
    
    return (
      <div>
        <Helmet>
          <title>Capabilities page</title>
          <meta name="description" content="OpenTechiz 's capabilities page"/>
        </Helmet>
        <Tab.Container id="left-tabs-example" defaultActiveKey="zero">
          <Row className="clearfix">
            <Col xs={12} sm={8}>
              {this.renderActiveKey()}
            </Col>
            <Col xs={12} sm={4}>
              <div className="right_sidebar">
                <Nav stacked>
                  <NavItem eventKey="first">PHP/MYSQL</NavItem>
                  <NavItem eventKey="second">Jquery/Ajax</NavItem>
                  <NavItem eventKey="third">Magento</NavItem>
                  <NavItem eventKey="fourth">Joomla</NavItem>
                  <NavItem eventKey="fifth">Wordpress</NavItem>
                  <NavItem eventKey="sixth">HTML5/CSS3</NavItem>
                  <NavItem eventKey="seventh">Photoshop/Illustrator</NavItem>
                  <NavItem eventKey="eighth">Apache/Nginx</NavItem>
                  <NavItem eventKey="ninth">Varnish</NavItem>
                </Nav>
              </div>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    );
  };

  renderActiveKey = () => {
    return (
      <Tab.Content animation componentClass="div">
        <Tab.Pane eventKey="zero">{this.renderDefaultContent()}</Tab.Pane>
        <Tab.Pane eventKey="first">{this.renderPHP()}</Tab.Pane>
        <Tab.Pane eventKey="second">{this.renderJquery()}</Tab.Pane>
        <Tab.Pane eventKey="third">{this.renderMagento()}</Tab.Pane>
        <Tab.Pane eventKey="fourth">{this.renderJoomla()}</Tab.Pane>
        <Tab.Pane eventKey="fifth">{this.renderWordpress()}</Tab.Pane>
      </Tab.Content>
    );
  };

  renderPHP = () => {
    return (
      <div className="php_content">
        <p>
          Since Open source PHP technology inception it's highly conjunction
          with MySQL. Based on that LAMP stack is most flavored open source
          development for quick and easy development. PHP MySQL is the best fit
          solution for ecommerce solution, web portal development, web
          application development. It helps to strengthen your business online
          presentence with quick turnaround time.
        </p>
        <p>
          We have highly skilled php mysql development team. We offer low cost
          and high performance PHP MySQL development solution for any business
          need. Our team of proficient developers believes in innovation and
          experimenting, while adhering to the client requirements. Our PHP web
          MySQL programming professionals aim to explore various facets of the
          domain.
        </p>
        <p>
          We provides affordable, efficient and timely PHP Programming Services,
          in order to provide Professional Web Programming Services for both new
          and existing Dynamic Websites running on the PHP , Apache and MySQL
          combination becoming choice of masses for delivering dynamic web
          content.
        </p>
      </div>
    );
  };

  renderJquery = () => {
    return (
      <p>
        As expert-rated jQuery/AJAX coders, we adhere to all best practices
        consistent with our development methodologies. We do not employ plugins
        or libraries that are not W3C-compliant, so our JavaScript coding is
        almost universally compatible. Seamlessly integrated with the Semantic
        Web 3.0 functionality of our HTML5 video and audio embeds, that empowers
        our development of rich visual and interactive content that does not
        require Flash-enabled browsers and is fully accessible via HTML5 user
        agents like mobile phone and tablet browsers.
      </p>
    );
  };

  renderMagento = () => {
    return (
      <div>
        <p className="magento_content">
          An open source CMS i.e. Content Management System for eCommerce,
          Magento offers comprehensive solutions to sell and purchase products,
          promoting products and a secured payment gateway. With the help of
          Magento you will not only double your sales but also will be able to
          manage your workflow for better performance. Magento is being widely
          used among all types of businesses starting from small scale business
          i.e. individual business to larger scale businesses. We Expert Magento
          Developers are the leader in Magento Development with over 8+ years’
          industry experience and 150+ customers. Our team of highly experienced
          and capable Magento developers strives continuously to provide each
          and every customer with ecommerce solutions customized to suit their
          needs specifically.
        </p>
        <p>
          Our team of Magento developers and designers are experts in analyzing
          your requirements, which enables us to design and build your Magento
          store exactly as per your requirements.
        </p>
      </div>
    );
  };

  renderJoomla = () => {
    return (
      <div className="joomla_content">
        <p>
          We have built Joomla sites for schools, churches, synagogues,
          corporations, small businesses, software companies, constructions
          companies, hospitals, non-profits, online magazines, shopping stores,
          subscription based companies. We do not use short-term developers or
          offshore teams. We have in-house development team of many years
        </p>
        <p>Our team of expert Joomla developers are here to assist you with:</p>
        <div>
          <p>
            Joomla Development – Custom components, modules and plugins or
            modifications to existing ones.
          </p>
          <p>
            Joomla Templates – Custom Photoshop design using the Warp or Gantry
            frameworks.
          </p>
          <p>
            Joomla Template Conversions – Convert any site or file format to a
            Joomla template.
          </p>
          <p>
            Joomla Website Packages – You pick the package, we install it for
            you.
          </p>
          <p>
            Joomla Support – From general maintenance, to template and
            programming issues. We are here to help.
          </p>
          <p>
            Joomla Site Security – we’ll audit your site, report how security
            can be improved and implement our suggestions.
          </p>
          <p>Search Engine Optimisation for Joomla sites.</p>
          <p>
            Joomla Migrations – Migrate your Joomla 1.0/1.5 site to Joomla
            2.5/3.x.
          </p>
          <p>
            Joomla Training – Joomla and other extension training available via
            Skype or phone.
          </p>
          <p>
            Reponsive Templates – Enhance your current template and ensure it
            displays correctly on tablets and mobile phones.
          </p>
        </div>
      </div>
    );
  };

  renderWordpress = () => {
    return (
      <div className="wordpress_content">
        <p>
          We have built over 100 custom themes and plugins for clients of all
          shapes and sizes. Whether you need a simple website developed or an
          advanced application built for WordPress, we can add tremendous value
          to your business. If you are in need of enterprise WordPress
          consulting, we can work together to create enterprise solutions.
        </p>
        <p>Our WordPress Development Services</p>
        <p>Theme Development</p>
        <p>WordPress Theme Developer</p>
        <p>
          We offer expert WordPress theme development solutions that bring
          incredible value to your business. The price and development time of
          the project is determined by the complexity of the design and the
          needs of your business. Mobile responsive theme development is also
          offered if it fits the needs of your business.
        </p>
        <p>
          Don’t have a design for your site? I can put you in touch with one of
          my preferred design partners to craft a WordPress solution perfect for
          your project needs.
        </p>
        <p>Plugin Development</p>
        <p>WordPress Plugin Developer</p>
        <p>
          Does your website require more advanced customization suitable for a
          WordPress plugin? We can develop a tailored WordPress plugin that fits
          the bill perfectly for your project. From integrating with your
          proprietary systems to creating custom e-commerce applications, We can
          build rock-solid and secure plugins to manage your advanced website
          needs.
        </p>
        <p>Code Auditing</p>
        <p>WordPress Code Auditing</p>
        <p>
          Every WordPress application should be audited for efficiency,
          reliability and security. We write secure and reliable code for
          commercial WordPress products, and we am happy to offer my auditing
          services to ensure that your WordPress project meets WordPress coding
          standards, performs under high stress situations and secures your
          website from potential hackers.
        </p>
      </div>
    );
  };

  renderDefaultContent = () => {
    return (
      <div>
        <p className="sub-content">
          Open Techiz (transformed from Onlinebizsoft) is a Vietnam-based Web/ Mobile development company for the
          large retailers and big brands.
        </p>
        <p className="sub-content">
          We've worked with enterprise-level companiesto deliver high value
          e-commerce services and solutions with strategic consulting,
          functional design and top-tier engineering capabilities.
        </p>
        <p className="sub-content">
          We cover spectrum of Web Development Service. Completely e-commerce
          &amp; CMS web site production with full control on quality
          standards.We also have extensive experience working with big catalog
          size with 100K+ items.
        </p>
        <div className="our_title">
          <h2>Our Skills &amp; Competencies</h2>
        </div>
        <div className="img-solution-wp">
          <div className="img-solution">
            <a
              title="PHP/MySQL"
              href="http://www.onlinebizsoft.com/capabilities/php-mysql.html"
            >
              <Image
                src={require("../../assets/images/mysql.png")}
                alt="PHP/MySQL"
              />
            </a>
            <a
              title="Magento"
              href="http://www.onlinebizsoft.com/capabilities/magento.html"
            >
              <Image
                src={require("../../assets/images/magento.png")}
                alt="Magento"
              />
            </a>
            <a
              title="jQuery"
              href="http://www.onlinebizsoft.com/capabilities/jquery.html"
            >
              <Image
                className="jq_img"
                src={require("../../assets/images/jquery.png")}
                alt="jQuery"
              />
            </a>
            <a
              title="HTML-CSS"
              href="http://www.onlinebizsoft.com/capabilities/html-css.html"
            >
              <Image
                src={require("../../assets/images/html-css.png")}
                alt="HTML-CSS"
              />
            </a>
            <a
              title="Joomla"
              href="http://www.onlinebizsoft.com/capabilities/joomla.html"
            >
              <Image
                src={require("../../assets/images/joomla.png")}
                alt="Joomla"
              />
            </a>
            <a
              title="WordPress"
              href="http://www.onlinebizsoft.com/capabilities/wordpress.html"
            >
              <Image
                src={require("../../assets/images/wp.png")}
                alt="WordPress"
              />
            </a>
            <a
              title="Photoshop"
              href="http://www.onlinebizsoft.com/capabilities/photoshop.html"
            >
              <Image
                src={require("../../assets/images/photoshop.png")}
                alt="Photoshop"
              />
            </a>
          </div>
        </div>
      </div>
    );
  };

  render() {
    return (
      <div>
        <Masterhead slogan="&quot;We Are Good At What We Do&quot;" />
        <Contentarea
          content_name="capabilities"
          custom_content={this.renderCapabilitiesContent()}
        />
      </div>
    );
  }
}

export default Capabilities;
