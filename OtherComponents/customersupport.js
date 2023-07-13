import React from 'react';
import Faq from "react-faq-component";
import './customersupport.css';
import Nav from './Nav';
const data = {
    title: "FAQ (Frequently Asked Questions)",
    rows: [
        {
            title: "What is Travel On?",
            content: `Travel On(Le Travenues Technology Ltd.) was started by Rajnish Kumar and 
            Aloke Bajpai in June 2007. iTravelOn is an intelligent, AI-based travel app, 
            with a user base of over 170 million travellers. TravelOn uses Artificial Intelligence for deal discovery, personalized recommendations, dynamic marketing, airfare predictions, train delay information, PNR confirmation status, infrastructure cost optimization, 
            business intelligence and for providing fully-automated customer service over chat and voice.`,
        },
        {
            title: "Why is TravelOn different from other travel booking platforms?",
            content:
                'TravelOn is an intelligent, AI-based travel platform that helps you organise, book and track your trips. With unique features such as the Online/Offline Train Running Status, PNR Prediction, Refund Calculator, TDR tracking, Station Alarm and so on, the TravelOn Trains app offers a seamless booking experience. The app can currently be used in 8 Indian languages. On the other hand, the TravelOn trains app also offers the users some unique features such as fare prediction, auto web check-in and so on!',
        },
        {
            title: "How do I get a refund on a ticket booking through TravelOn?",
            content: `For refund of a confirmed booking, you need to place a cancellation request from the My Trips section of the TravelOn app.
            For refund related to a failed booking, the amount deducted from your account will be reversed in the source account within 7 days.`,
        },
        {
            title: "How can I track refunds on TravelOn?",
            content: <ul >
                <li style={{color:'grey'}}>Please follow the steps mentioned below to track your refund status:</li>
                <li style={{color:'grey'}}> Log in to your TravelOn account</li>
                <li style={{color:'grey'}}> Click on the customer service tab</li>
                <li style={{color:'grey'}}> Select your trip from the 'MyTrips' section</li>
                <li style={{color:'grey'}}>Click on the booking ID and check the refund status</li>
            </ul>,
        },
        {
            title:"How do I cancel my ticket on TravelOn?",
            content:<ul><li style={{color:'grey'}}>Please follow these simple steps to cancel your ticket on TravelOn:</li>
                <li style={{color:'grey'}}>Log in to TravelOn</li>
            <li style={{color:'grey'}}> Visit the 'My Trips' section on the app</li>
            <li style={{color:'grey'}}> Select the desired booking, scroll down and click on the 'cancel ticket' tab to initiate cancellation.</li>
            <li style={{color:'grey'}}> In case of partial cancellation, please select the desired passenger(s) and click on the cancel tab.</li>
            </ul>,
        },
        {
            title: "What is the package version",
            content: 'current version is 1.2.1',
        },
    ],
};
const styles = {
    bgColor: 'aliceblue ',
    rowContentColor: 'grey',
     transitionDuration: "1s",
     innerWidth:'4%',
     outerWidth:'10%',

};

const config = {
    animate: true,
    tabFocus: true,
    openOnload: 0,
    expandIcon: "+",
    collapseIcon: "-",
};

function Customersupport() {
    return ( 
        <>
        <Nav/>
        <div id="cs1">
        <div id="cs2">
        <h3 style={{color:'darkgray'}}>Documents to Carry</h3>
        <br></br>
        <h4>
        
When your railway ticket booking is confirmed with EaseMyTrip, you need to carry your government recognized ID on the departure date. Train ticket-checker may come any time and may ask you to show railway booking along with your ID. Here is the list of IDs that you can carry while boarding the train:
Carry any one of them:<br></br>
- Aadhar Card<br></br>
- Voter ID<br></br>
- Pan card<br></br>
- Passport<br></br>
- Driving License<br></br>
- Bank passbook that was your photograph.<br></br>
- Student ID card with photograph, issued by recognized school/college<br></br>

At EaseMyTrip, you can go for train booking online with different types of quotas in railway such as ladies quota, tatkal booking, general booking, senior citizen booking, etc. So, what are you waiting for? Go for it!<br></br>


        </h4>
        <h3 style={{color:'darkgray'}}>How to Book Train Ticket Online</h3>
        <br></br>
        <h4>
        
        
Booking train tickets with EaseMyTrip is extremely easy. Follow the below-mentioned steps to make your train booking with EaseMyTrip:<br></br>
Step 1: Visit easemytrip.com and then click on Trains tab.<br></br>
Step 2: Type the name of the departure point in ‘From’ section and destination point in "To" section. Also, select the departure date and then click on Search button.<br></br>
Step 3: Now, you will see a list of trains according to your search. Choose the train and seat as per your preference. Use filter option to select seat type or category.<br></br>
Step 4: Click continue button if the departure and destination station are confirmed.<br></br>
Step 5: Now, you have to mention all the mandatory details related to your booking. Enter the IRCTC user id, select the boarding point, enter contact details and traveller information (the details are to be mentioned separately for every passenger/child).<br></br>
Step 6: Once all the details are filled on Review &Travellers page, review all the details to avoid any issue. Check the Price Summary and if you are okay with everything, go ahead with your payment.<br></br>
Step 7: If you have any coupon code, enter the same in the required field and save your money.<br></br>
Step 8: Now, make your payment using your preferred option. You can choose from a wide range of options from Debit card, Credit card, UPI, net banking, or wallet money.<br></br>
Step 9: Once the payment is done, IRCTC authentication page will open, and you are required to fill in your IRCTC user ID password after that you will also receive your e-ticket on mobile and email ID.<br></br>

This process for booking train tickets online is simpler with EaseMyTrip. It is better to book your travel online rather than standing in queue for long hours. You just need to have IRCTC user id to book your train tickets with us. In case you don’t 
have IRCTC user id, you can easily create it online on the official site or by visiting our website.<br></br>

        </h4>
        <div id='cs3' style={{width:"90%", margin:"auto"}}>
            <Faq 
                data={data}
                styles={styles}
                config={config}
            />
        </div>
        </div>
        </div>
        </>
     );
}

export default Customersupport;