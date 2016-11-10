'use strict';
import React from 'react';
class Footer extends React.Component {
  render() {
     return (
         <ul className="footerList clearfix">
             <li>
                 <a href="page21.html">
                     <p>
                         <img src={require("../images/footerListNo1.png")} alt="" width="32%" className="img1"/>
                         <img src={require("../images/footerListCur1.png")} alt="" width="32%" className="img2"/>
                     </p>
                     <p>供需</p>
                 </a>
             </li>
             <li className="current">
                 <a href="page12.html">
                     <p>
                         <img src={require("../images/footerListNo2.png")} alt="" width="32%" className="img1"/>
                             <img src={require("../images/footerListCur2.png")} alt="" width="32%" className="img2"/>
                     </p>
                     <p>发布</p>
                 </a>
             </li>
             <li>
                 <a href="page23.html">
                     <p>
                         <img src={require("../images/footerListNo3.png")} alt="" width="32%" className="img1"/>
                         <img src={require("../images/footerListCur3.png")} alt="" width="32%" className="img2"/>
                     </p>
                     <p>我</p>
                 </a>
             </li>
         </ul>
     );
  }
}
export default Footer;
