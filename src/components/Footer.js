'use strict';
import React from 'react';
import { Link } from 'react-router';
class Footer extends React.Component {
  render() {
     return (
         <ul className="footerList clearfix">
             <li>
                 <Link to='/Supply' activeClassName="current">
                     <p>
                         <img src={require('../images/footerListNo1.png')} alt="" width="32%" className="img1"/>
                         <img src={require('../images/footerListCur1.png')} alt="" width="32%" className="img2"/>
                     </p>
                     <p>供需</p>
                 </Link>
             </li>
             <li>
                 <Link to='/' activeClassName="current">
                     <p>
                         <img src={require('../images/footerListNo2.png')} alt="" width="32%" className="img1"/>
                             <img src={require('../images/footerListCur2.png')} alt="" width="32%" className="img2"/>
                     </p>
                     <p>发布</p>
                 </Link>
             </li>
             <li>
                 <Link to='/My' activeClassName="current">
                     <p>
                         <img src={require('../images/footerListNo3.png')} alt="" width="32%" className="img1"/>
                         <img src={require('../images/footerListCur3.png')} alt="" width="32%" className="img2"/>
                     </p>
                     <p>我</p>
                 </Link>
             </li>
         </ul>
     );
  }
}
export default Footer;
