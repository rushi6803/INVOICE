import React, { useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useReactToPrint } from 'react-to-print';
import './InvoicePreview.css';
import logo from './ASSET/upi-qr.png';
function InvoicePreview() {
    const { state } = useLocation();
    const {
        companyName,
        companyLogo,
        customerName,
        contactNumber,
        invoiceDate,
        invoiceNumber,
        carNumber,
        carName,
        paymentMethod,
        kilometer,
        items,
        footerNote
    } = state || {};

    const calculateTotal = () => {
        return items.reduce((total, item) => total + item.quantity * item.price, 0);
    };

    const componentRef = useRef();
    const handlePrint = useReactToPrint({ content: () => componentRef.current });

    return (
        <div>
          
            <div className="invoice-preview" ref={componentRef}>
                <div className="head">
                    <h1>{companyName || 'Keshav Motors'}</h1>
                    <p><b>Sanket Patel:</b> +91-9104213009</p>
                    <p>GF-15 Astha-2 Complex, Madhav School Road, Metro Pillar No: 156, Vastral, Ahmedabad</p>
                </div>

                <div className="invoice-details">
                    <table className='table1'>
                        <tbody>
                            <tr>
                                 <tr className='customer'><b>TO:</b> {customerName}</tr>
                                <tr className='customer1'><b>Contact Number:</b> {contactNumber}</tr>
                  
                               
                          
                            <td className='data'>
                                <tr><b>Invoice Number:</b> {invoiceNumber}</tr>
                                <tr><b>Date:</b> {invoiceDate}</tr>
                                <tr><b>Car Number:</b> {carNumber}</tr>
                                <tr><b>Car Name:</b> {carName}</tr>
                                <tr><b>Kilometer:</b> {kilometer}</tr>
                                <tr><b>Payment Method:</b> {paymentMethod}</tr>
                            </td>
                            </tr>
                        </tbody>
                    </table>
                    <hr />
                   
                 
                </div>

                <h2><u>INVOICE</u></h2>
                <div className="box">
                <table className="invoice-table">

                    <thead>
    <tr>
        <th>S.No</th>
        <th>Description</th>
        <th>Qty</th>
        <th>Rate</th>
        <th>Total</th>
    </tr>
    <tr>
        <td><hr /></td>
        <td><hr /></td>
        <td><hr /></td>
        <td><hr /></td>
        <td><hr /></td>
    </tr>
</thead>
<tbody>
    {items.map((item, idx) => (
        <tr key={idx}>
            <td>{idx + 1}</td>
            <td>{item.description}</td>
            <td>{item.quantity}</td>
            <td>₹{item.price}</td>
            <td>₹{item.quantity * item.price}</td>
        </tr>
    ))}
                        <tr><td></td></tr>
                        <tr><td></td></tr>
                        <tr><td></td></tr>
                        <tr><td></td></tr>
                        <tr><td></td></tr>
                        <tr><td></td></tr>
                        <tr><td></td></tr>
                        <tr><td></td></tr>
                        <tr><td></td></tr>
                        <tr><td></td></tr>
                        <tr><td></td></tr>
                        <tr><td></td></tr>
                        <tr><td></td></tr>
                        <tr><td></td></tr>
                        <tr><td></td></tr>
                        <tr><td></td></tr>
                        <tr><td></td></tr>
                        <tr><td></td></tr>
                        <tr><td></td></tr>
                        <tr><td></td></tr>
                        <tr><td></td></tr>
                        <tr><td></td></tr>
                        <tr><td></td></tr><tr><td></td></tr>
                        <tr><td></td></tr>
                        <tr><td></td></tr>
                        <tr><td></td></tr>
                        <tr><td></td></tr>
                        <tr><td></td></tr>
                        <tr><td></td></tr>
                        <tr><td></td></tr>
                        <tr><td></td></tr>
                        <tr><td></td></tr>
                        <tr><td></td></tr>
                        <tr><td></td></tr>
                        <tr><td></td></tr>
                        <tr><td></td></tr>
                        <tr><td></td></tr>
                        <tr><td></td></tr>
                        <tr><td></td></tr>
                        <tr><td></td></tr>
                        <tr><td></td></tr>
                        <tr><td></td></tr>
                        <tr><td></td></tr><tr><td></td></tr>
                        <tr><td></td></tr><tr><td></td></tr><tr><td></td></tr><tr><td></td></tr><tr><td></td></tr>
                         <tr>
                                <td> <b>   TOTAL               </b>             </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td> <b>  ₹{calculateTotal()}</b></td>
                            </tr>
                       
                    </tbody>
                   
                </table>
                 </div>
               

               

                <footer className="footer">
                    <table>
                        <tbody>
                            <tr>
                                <td><b>Remarks:</b> Next Service Due on 10,000km or 1 Year</td>
                                <td><b>From Keshav Motors:</b></td>
                            </tr>
                            <tr>
                                <td>
                                    <u><b>Declaration:</b></u>
                                    <p>We declare that this invoice shows</p>
                                    <p>actual price of goods described and that</p>
                                    <p>all particulars are true and correct.</p>
                                </td>
                                <td>
                                    <p><b>Company's Bank Detail</b></p>
                                    <p><b>Bank Name:</b> Kotak Mahindra</p>
                                    <p><b>A/C No:</b> 2749426875</p>
                                    <p><b>Branch & IFSC:</b> ODHAV & KKBK0002563</p>
                                     <p><b>UPI ID:</b> kaneriyasanket6377-1@oksbi</p>
                                </td>
                            </tr>
                            <tr>
                                <td><b>SUBJECT TO AHMEDABAD JURISDICTION.</b></td>
                                <td><img src={logo} alt="Logo" /></td>
                            </tr>
                        </tbody>
                    </table>
                </footer>
            </div>
        </div>
    );
}

export default InvoicePreview;
