import React, { useState } from 'react';
import {
  Card, Button, CardImg, CardText, CardDeck, CardBody, ModalHeader
} from 'reactstrap';
import './Banana.css';
import { Modal, ModalBody } from 'reactstrap';


const Banana = (props) => {
        const {
          buttonLabel,
          className
        } = props;
      
        const [modal, setModal] = useState(false);
      
        const toggle = () => setModal(!modal);

  return (
    <CardDeck className = "Card">
      <Card className = "Kiwi">
        <CardBody>
          <CardText className= "Cat"> Contact Information</CardText>
            <cardText className= "Dog"> Address: 303 Union Ave, Hammond, LA 70402</cardText>
                <cardText className= "Bird"><br/>Email: thebookcasebykz@buisnessemail.com</cardText>
                    <cardText className= "Fish"><br/>Phone: 555-5555</cardText>
        </CardBody>
      </Card>
     
      <Card className = "Pear">
        <CardImg className = "Img" src="https://static.thenounproject.com/png/952397-200.png" alt="Card image cap" />
        <CardBody>
          <CardText>Please allow 5-7 business days to process your return once it is delivered us. Once your return is fully processed, we will mail you a store credit in the form of a Bookcase Gift Card for use on a future purchase. Gift Cards never expire, and are redeemable right away!</CardText>
          <Button color="secondary" size="lg" onClick={toggle}>{buttonLabel}Returns</Button>
                <Modal isOpen={modal} toggle={toggle} className={className}>
                <ModalHeader toggle={toggle}>Mail your return items to the address stated below:</ModalHeader>
                <ModalBody>
                
                <a href="https://www.google.com/maps/dir/30.0095284,-90.259614/southeastern/@30.2624938,-90.6618031,10z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x862722985b04e61d:0xd65f00282c35660!2m2!1d-90.4688572!2d30.5173159">
                303 Union Ave, Hammond, LA 70402
                </a>
                
                </ModalBody>
             </Modal>
        </CardBody>
      </Card>
    </CardDeck>
  );
};

export default Banana;