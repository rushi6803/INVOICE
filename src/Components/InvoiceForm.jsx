import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function InvoiceForm() {
    const navigate = useNavigate();

    const [companyName, setCompanyName] = useState('');
    const [companyLogo, setCompanyLogo] = useState('');
    const [footerNote, setFooterNote] = useState('');

    const [customerName, setCustomerName] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [invoiceDate, setInvoiceDate] = useState('');
    const [invoiceNumber, setInvoiceNumber] = useState('');
    const [carNumber, setCarNumber] = useState('');
    const [carName, setCarName] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('');
    const [kilometer, setKilometer] = useState('');
    const [items, setItems] = useState([{ description: '', quantity: 1, price: 0 }]);

    const handleItemChange = (index, e) => {
        const newItems = [...items];
        newItems[index][e.target.name] = e.target.value;
        setItems(newItems);
    };

    const addItem = () => setItems([...items, { description: '', quantity: 1, price: 0 }]);
    const removeItem = (index) => setItems(items.filter((_, i) => i !== index));

    const handlePreview = () => {
        const invoiceData = {
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
        };
        navigate('/preview', { state: invoiceData });
    };

    return (
        <div className='invoice-container'>
            <h2>Create Invoice</h2>
            <table>
            <tr>
            <input type="text" placeholder="Invoice Number" value={invoiceNumber} onChange={(e) => setInvoiceNumber(e.target.value)} />
            <input type="date" value={invoiceDate} onChange={(e) => setInvoiceDate(e.target.value)} />
            <input type="text" placeholder="Customer Name" value={customerName} onChange={(e) => setCustomerName(e.target.value)} />
            <input type="text" placeholder="Contact Number" value={contactNumber} onChange={(e) => setContactNumber(e.target.value)} />
            </tr>
            <tr>
            <input type="text" placeholder="Car Number" value={carNumber} onChange={(e) => setCarNumber(e.target.value)} />
            <input type="text" placeholder="Car Name" value={carName} onChange={(e) => setCarName(e.target.value)} />
            <input type="text" placeholder="Payment Method" value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)} />
            <input type="text" placeholder="Kilometer" value={kilometer} onChange={(e) => setKilometer(e.target.value)} />
            </tr>
            </table>
            <h3>Invoice Items</h3>
            {items.map((item, index) => (
                <div key={index} className="item-row">
                    <input type="text" name="description" placeholder="Description" value={item.description} onChange={(e) => handleItemChange(index, e)} />
                    <input type="number" name="quantity" placeholder="Qty" value={item.quantity} onChange={(e) => handleItemChange(index, e)} />
                    <input type="number" name="price" placeholder="Price" value={item.price} onChange={(e) => handleItemChange(index, e)} />
                    <button onClick={() => removeItem(index)}>X</button>
                </div>
            ))}
            <button onClick={addItem}>+ Add Item</button>

            <div style={{ marginTop: '20px' }}>
                <button onClick={handlePreview}>Preview Invoice</button>
            </div>
        </div>
    );
}

export default InvoiceForm;
