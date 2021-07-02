import React, {Component} from 'react';
import jsPDF from "jspdf";
import TemplateBack from 'url:../../public/images/templateBack.jpg'

class Download extends Component {

    downloadPdf_1=()=>{
        //creating object of the package and pass the page type
        var doc = new jsPDF('landscape' , 'px' , 'a4' , 'false');
        //name , type , x-axis , y-axis , width , height
        //doc.addImage(page , 'png' , 65 , 20 , 500 , 400);
        //doc.addPage();
        //doc.addImage(page2 , 'png' , 65 , 20 , 500 , 400);
        doc.text('Workshop Template' , 120 , 410 );
        doc.save('Workshop Template.pdf');

    }

    downloadPdf_2=()=>{
        //creating object of the package and pass the page type
        var doc = new jsPDF('portrait' , 'px' , 'a4' , 'false');
        //name , type , x-axis , y-axis , width , height
        //doc.addImage(pdfImage , 'png' , 65 , 20 , 500 , 400);
        //doc.addPage();
        doc.text('Academic Performance Research Paper' , 120 , 410 );
        doc.save('Academic Performance Research Paper.pdf');

    }

    downloadPdf_3=()=>{
        //creating object of the package and pass the page type
        var doc = new jsPDF('portrait' , 'px' , 'a4' , 'false');
        //name , type , x-axis , y-axis , width , height
        //doc.addImage(pdfImage , 'png' , 65 , 20 , 500 , 400);
        //doc.addPage();
        doc.text('Basic Academic Research Paper' , 120 , 410 );
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