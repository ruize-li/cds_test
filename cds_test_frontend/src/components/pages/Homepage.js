/**
 * Homepage
 * CSS by Boostrap 5.0
 * Author: Ruize Li
 */
 import $ from "jquery";
 import Turn from "../Turn";
 import './turn.js';

const DemoMagazine = () => {
    const options = {
        width: 800,
        height: 600,
        autoCenter: true,
        display: "double",
        acceleration: true,
        elevation: 50,
        gradients: !$.isTouch,
        when: {
          turned: function(e, page) {
            console.log("Current view: ", $(this).turn("view"));
          }
        }
      };
      
      const pages = [
        'https://raw.githubusercontent.com/ruize-li/colby_digital_studies_storage/master/images/shanghaisketch_48/001-tuya-resized.jpg',
        'https://raw.githubusercontent.com/ruize-li/colby_digital_studies_storage/master/images/shanghaisketch_48/002-tuya-resized.jpg',
        'https://raw.githubusercontent.com/ruize-li/colby_digital_studies_storage/master/images/shanghaisketch_48/003-tuya-resized.jpg',
        'https://raw.githubusercontent.com/ruize-li/colby_digital_studies_storage/master/images/shanghaisketch_48/004-tuya-resized.jpg',
        'https://raw.githubusercontent.com/ruize-li/colby_digital_studies_storage/master/images/shanghaisketch_48/005-tuya-resized.jpg',
        'https://raw.githubusercontent.com/ruize-li/colby_digital_studies_storage/master/images/shanghaisketch_48/006-tuya-resized.jpg',
        'https://raw.githubusercontent.com/ruize-li/colby_digital_studies_storage/master/images/shanghaisketch_48/007-tuya-resized.jpg',
        'https://raw.githubusercontent.com/ruize-li/colby_digital_studies_storage/master/images/shanghaisketch_48/008-tuya-resized.jpg'
      ];


    return (
             <Turn options={options} className="magazine">
            {pages.map((page, index) => (
                <div key={index} className="page">
                <img src={page} alt="" />
                </div>
            ))}
            </Turn>
    )
}



const Homepage = () => {
    return(
        <div className="container">
            <h1>Welcome to Colby Digital Studies!</h1>
            <button type="button" class="btn btn-info">民族画报</button>
            <DemoMagazine />
        </div>
    );
}



export default Homepage;