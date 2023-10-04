import React, { useState } from 'react'
import { Fragment } from 'react'
import { Col, Row } from 'reactstrap'
import '../../../CSS/InvestorDashBoard.css'
import pro3 from '../../../assets/images/pro3.jpg'
import InvestorDashBoard from '../../InvestorDashboard/Index'
import ImageGallery from '../../ImageGallary/Index'
import Modal from 'react-modal';

//slider 
import { UncontrolledCarousel } from 'reactstrap';
const PropertyDetail = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const openModal = (image) => {
        setSelectedImage(image);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setSelectedImage(null);
        setModalIsOpen(false);
    };

    const [Image, setImage] = useState(false);
    const images = [
        'https://azizidevelopments.com/assets/images/projects/15795279721750900140.jpg',
        'https://azizidevelopments.com/assets/images/projects/1624972383238283745.jpg',
        'image3.jpg',
        // Add more image URLs as needed
    ];
    const items = [
        {
            src: `https://azizidevelopments.com/assets/images/projects/15795279721750900140.jpg`,
            // altText: 'Slide 1',
            // caption: 'Slide 1',

        },
        {

            src: `https://azizidevelopments.com/assets/images/projects/15795279721750900140.jpg`,
            // altText: 'Slide 2',
            // caption: 'Slide 2',

        },
        {

            src: `https://azizidevelopments.com/assets/images/projects/15795279721750900140.jpg`,
            // altText: 'Slide 3',
            // caption: 'Slide 3',




        }
    ];
    return (
        <Fragment>
            {modalIsOpen ?
                <div className="image-gallery">
                    {/* {images.map((image, index) => (
                        <div key={index} className="image-thumbnail">
                            <img
                                src={image}
                                alt={`Image ${index}`}
                                onClick={() => openModal(image)}
                            />
                        </div>
                    ))} */}
                    <Modal
                        isOpen={modalIsOpen}
                        onRequestClose={closeModal}
                        className="modal-content"
                        overlayClassName="modal-overlay"
                    >
                        <button onClick={closeModal} className="close-button">
                            Close
                        </button>
                        {selectedImage && (
                            <div className="modal-image">
                                <UncontrolledCarousel items={items} />
                            </div>
                            // <img
                            //     src={selectedImage}
                            //     alt="Selected Image"
                            //     className="modal-image"
                            // />
                        )}
                    </Modal>
                </div> : ""
            }

            <div className='title-div'>
                {/* <p className='investor-title'>House no 45,Street 45,E11/4</p> */}
                {/* <p className='investor-title'>{data && data ? data.appartmentaddres : ""}</p> */}
            </div>
            <Row className='m-0'>
                <Col md='3' className='d-flex'>
                    {/* slider area */}
                    {/* <div className="detail-slide">
                    <UncontrolledCarousel items={items} />
                </div> */}
                    {/* <figure> */}
                    <img src={pro3} className="img-investor" alt="Apartment" onClick={() => openModal(pro3)} />

                    {/* <img src={`http://localhost:3005/${data.image}`} className="img-investor" alt="Apartment" /> */}
                    {/* </figure> */}

                </Col>
                <Col md='8'>
                    <div className='single-property-detail-div'>
                        <h5>House, Rented</h5>
                        <h5>House no 45, Street 45, E-11/4</h5>
                        <h5>Bed Rooms: 4</h5>
                        <h5>Bath Rooms: 2</h5>
                        {/* <h5>Occupancy: 1%</h5> */}
                        <h5></h5>
                    </div></Col>
                {/* <Col>
                <Row className='m-0 detail-row'>
                    <Col md='6'>
                        <h5>PKR 450,007</h5>
                        <h5>Annualised return</h5>
                        <h5>Funded Date</h5>
                        <h5>Current Valueation</h5>
                    </Col>
                    <Col md='6'>
                        <h5>567 Investor</h5>
                        <h5>9.0%</h5>
                        <h5>4 Aug 2023</h5>
                        <h5>PKR 1,110,000</h5>
                    </Col>
                </Row>
                
                </Col> */}
            </Row>
            <InvestorDashBoard />

        </Fragment>
    )
}

export default PropertyDetail