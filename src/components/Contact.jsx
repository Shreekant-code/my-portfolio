import "./Contact.css"
export const Contact=()=>{
    return(
        <>
        <section className="contact-container" id="contact">
            <h1> <span className="change">Contact </span>  Me</h1>
            <div className="container-form">
                <h1>Fill this form To reach Out</h1>
           <form>
                <label htmlFor="naam">Name</label>
                <input type="text" placeholder="Enter Your Name" required />
                <label htmlFor="phone-No">Phone Number</label>
                <input type="tel" maxLength="10" pattern="\d{10}" inputMode="numeric" placeholder="Enter 10-digit number" />

                <label htmlFor="Email">Email-Id</label>
                <input type="email" placeholder="Enter your Email" required />
                <textarea placeholder="Write a Message For me"></textarea>
                <button className="btn-submit">Submit</button>
           </form>
            </div>

        </section>
       
        
        </>
    )
}