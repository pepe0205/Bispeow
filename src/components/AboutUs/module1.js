import React, { useState } from "react";

import '../../css/AboutUs/module1.css'
import sugar from '../../public/image/AboutUs/sugar.png'
import LaTra from '../../public/image/AboutUs/latra.png'
import TranChau from '../../public/image/AboutUs/tranchau.png'
class Module1 extends React.Component {

    render() {
        return (
            <div className="main-module1">
                <div className="module1-inner">
                
                    <div class="module1-item">
                        <div className="col-module1-left module1-circle">
                            <img src={sugar}></img>
                            <div className="circle">
                            <p>Đường mía nấu mỗi ngày</p>
                        </div>
                        </div>
                    
                        <div className="col-module1-right">
                            <p>Đường mía tự nhiên, sàng lọc kĩ, nấu đến khi kết tinh, kiên trì nấu mỗi ngày cho đến khi đạt được vị ngọt ban đầu của mía, khi nếm là vị ngọt chứ không phải ngấy.</p>
                        </div>
                    </div>

                    <div className="module1-item">
                        <div className="col-module1-left module1-circle">
                            <img src={TranChau}></img>
                            <div className="circle">
                            <p>Trân châu tươi mới tự làm</p>
                            </div>
                        </div>
                        <div className="col-module1-right">
                            <p>Kiên trì từ cục bột tròn, nhồi vỗ đều, vo viên đến khi thành hình; tăng thêm khẩu vị khi nhai, thưởng thức hương vị mới mẻ là khát vọng của mỗi người.</p>
                        </div>
                    </div>

                    <div className="module1-item">
                        <div className="col-module1-left module1-circle">
                            <img src={LaTra}></img>
                            <div className="circle-tea">
                            <p>Lá trà tự nhiên sấy khô</p>
                            </div>
                        </div>
                        <div className="col-module1-right">
                            <p>
                                Từ lá trà được sàng lọc kĩ càng, tươi xanh; lá trà cùng với các nguyên vật liệu trộn lẫn sấy khô; mỗi ly trà đều có hương thơm và mùi vị đậm đà. Thưởng thức một ly trà mặc dù thời gian không lâu nhưng lại lưu luyến trong lòng khó quên.
                            </p>
                        </div>
                    </div>
                </div>
            </div>


        );

    }
}

export default Module1;

