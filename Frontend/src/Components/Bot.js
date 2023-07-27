import React from 'react';
import './Bot.css';
function Bot() {
    return (
        <>
        <footer>
		<div id="contact">
				
			<span style={{paddingLeft:'1%',fontSize:'25px'}}>Follow us on:</span>
				
		<div class="container1" >

        <a class="link twitter" href="https://twitter.com/i/flow/login">
            <i class="fab fa-2x fa-twitter"></i>
        </a>
       
        <a class="link instagram" href="https://instagram.com/irctc_train_ticket?igshid=MzRlODBiNWFlZA==">
            <i class="fab fa-2x fa-instagram"></i>
        </a>

		<a class="link youtube" href="https://youtube.com/shorts/taQ62p7EpfQ?feature=share">
			<i class="fab fa-2x fa-youtube"></i>
		</a>

		<a class="link email" href="mailto:sri.sd2003@gmail.com">
			<i class="fa-sharp fa-solid fa-2x fa-envelope"></i>
		</a>
		

		<a class="link phone" href="tel:7446789181">
		<i class="fa-2x fa-sharp fa-solid fa-phone"></i>
		</a>

        <a class="link facebook" href="https://www.facebook.com/groups/indian.railway.ticket.agency/">
            <i class="fab fa-2x fa-facebook-f"></i>
        </a>
    </div>
	<div class="text-center"  >
        <p id="t1"style={{float:'right'}}>
      © 2022 Copyright:All Rights Reserved
        </p>
    </div>
		</div>
		</footer>
        </>
      );
}

export default Bot;