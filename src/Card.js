import React from "react";
import styles from './Card.module.css';

class Card extends React.Component{
    constructor(props){
        super(props);
    }    
    render(){
        const {NAME_CONTACT_DETAILS_OF_THE_LABORATORY
            ,Type
            ,Lab_In_Charge
            ,Phone_Number
            ,Email_Id
            ,Certifilcations
            ,Pincode
            ,City
            ,Types_of_Tests
        } = this.props.labData;
        return (
            <div className={styles.card}>
                <h2>{Lab_In_Charge}</h2>
                <p className={styles.title}>{City} , {Pincode}</p>
                <hr />
                <p className={styles.details}>{NAME_CONTACT_DETAILS_OF_THE_LABORATORY}</p>
                <hr />
                <a href={"mailto:" + Email_Id}>Email</a>
            </div>            
        );
    }
}

export default Card;