import React, {Component} from 'react';
import jsPDF from "jspdf";
import TemplateBack from 'url:../../public/images/templateBack.jpg'
import onePage1 from 'url:../../public/images/Template1/onePage1.PNG'
import onePage2 from 'url:../../public/images/Template1/onePage2.PNG'
import twoPage1 from 'url:../../public/images/Template2/twoPage1.PNG'
import twoPage2 from 'url:../../public/images/Template2/twoPage2.PNG'
import twoPage3 from 'url:../../public/images/Template2/twoPage3.PNG'
import twoPage4 from 'url:../../public/images/Template2/twoPage4.PNG'
import twoPage5 from 'url:../../public/images/Template2/twoPage5.PNG'
import threePage1 from 'url:../../public/images/Template3/threePage1.PNG'
import threePage2 from 'url:../../public/images/Template3/threePage2.PNG'
import threePage3 from 'url:../../public/images/Template3/threePage3.PNG'
import threePage4 from 'url:../../public/images/Template3/threePage4.PNG'
import threePage5 from 'url:../../public/images/Template3/threePage5.PNG'
import threePage6 from 'url:../../public/images/Template3/threePage6.PNG'

class Download extends Component {

    downloadPdf_1=()=>{
        //creating object of the package and pass the page type
        var doc = new jsPDF('landscape' , 'px' , 'a4' , 'false');
        //name , type , x-axis , y-axis , width , height
        doc.addImage(onePage1 , 'png' , 0 , 0 , 700 , 600);
        doc.addPage();
        doc.addImage(onePage2 , 'png' , 0 , 0 , 700 , 600);
        doc.save('Workshop Template.pdf');

    }

    downloadPdf_2=()=>{
        //creating object of the package and pass the page type
        var doc = new jsPDF('portrait' , 'px' , 'a4' , 'false');
        //name , type , x-axis , y-axis , width , height
        doc.addImage(twoPage1 , 'png' , 0 , 0 , 450 , 650);
        doc.addPage();
        doc.addImage(twoPage2 , 'png' , 0 , 0 , 450 , 650);
        doc.addPage();
        doc.addImage(twoPage3 , 'png' , 0 , 0 , 450 , 650);
        doc.addPage();
        doc.addImage(twoPage4 , 'png' , 0 , 0 , 450 , 650);
        doc.addPage();
        doc.addImage(twoPage5 , 'png' , 0 , 0 , 450 , 650);
        doc.save('Academic Performance Research Paper.pdf');

    }

    downloadPdf_3=()=>{
        //creating object of the package and pass the page type
        var doc = new jsPDF('portrait' , 'px' , 'a4' , 'false');
        //name , type , x-axis , y-axis , width , height
        doc.addImage(threePage1 , 'png' , 0 , 0 , 450 , 650);
        doc.addPage();
        doc.addImage(threePage2 , 'png' , 0 , 0 , 450 , 650);
        doc.addPage();
        doc.addImage(threePage3 , 'png' , 0 , 0 , 450 , 650);
        doc.addPage();
        doc.addImage(threePage4 , 'png' , 0 , 0 , 450 , 650);
        doc.addPage();
        doc.addImage(threePage5 , 'png' , 0 , 0 , 450 , 650);
        doc.addPage();
        doc.addImage(threePage6 , 'png' , 0 , 0 , 450 , 650);
        doc.save('Basic Academic Research Paper.pdf');

    }

    render() {
        return (
            <div className="bg-secondary">
            <div className= 'container bg-dark bg-gradient'>
                <img src= {TemplateBack} style={{width: '100%' , height:'70%', backgroundSize: 'cover'}}/>

                <br/> <br/>
                <table>
                    <tr align="center">
                        <td>
                            <p align="center" className="text-white fs-3 fw-bolder">Workshop Template</p>
                            <div align ="center">
                                <button  onClick={this.downloadPdf_1} type="button" className="btn btn-success">Download</button>
                            </div>
                        </td>
                        <td>
                            <p align="center" className="text-white fs-3 fw-bolder">Academic Performance Research Paper Template</p>
                            <div align ="center">
                                <button  onClick={this.downloadPdf_2} type="button" className="btn btn-success">Download</button>
                            </div>
                        </td>
                        <td>
                            <p align="center" className="text-white fs-3 fw-bolder">Basic Academic Research Paper Template</p>
                            <div align ="center">
                                <button  onClick={this.downloadPdf_3} type="button" className="btn btn-success">Download</button>
                            </div>
                        </td>
                    </tr>
                </table>
                <br/> <br/>
            </div>
            </div>
        );
    }
}

export default Download;