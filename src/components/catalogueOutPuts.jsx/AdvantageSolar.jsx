import { Button } from "@mui/material";
import { useState } from "react";
import EmailTemplate from "../../templates/EmailTemplate";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import image from "../../../public/jus-solar-logo.png";

function AdvantageSolar() {
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);

  function handleInput(event) {
    setEmail(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (email === "" || !/\S+@\S+\.\S+/.test(email)) {
      setIsEmailValid(false);
    } else {
      setIsEmailValid(true);
      alert(`Thank you for subscribing with ${email}`);
      setEmail("");
    }
  }

  return (
    <div className="relative h-[103vh] py-10 bg-[#34495e] text-white mt-[70px] sm:h-[40vh]">
      <div className="bg-[#f5b041] h-[11vh] w-[100%] m-auto rounded-tr-2xl  rounded-tl-2xl absolute top-[-40px] flex  justify-around items-center">
        <div>
          <EmailTemplate
            logo={<LocationOnIcon />}
            location="Location"
            address="No77 Stadium Rd,Port Harcourt"
          />
        </div>
        <div>
          <EmailTemplate
            logo={
              <a href="https://wa.me/2349032351284">
                <WhatsAppIcon />
              </a>
            }
            location="Contact Us"
            address="+234 0932351284"
          />
        </div>
        <div>
          <EmailTemplate
            logo={
              <a href="mailto:jussolar209@gmail.com">
                <EmailIcon />
              </a>
            }
            location="Email"
            address="JusSolar209@email.com"
          />
        </div>
        <div>
          <EmailTemplate
            logo={
              <a href="https://wa.me/2349032351284">
                <FacebookIcon />
              </a>
            }
            location="Facebook"
            address="Jus Solar"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-7 sm:flex justify-around mt-2 p-4 sm:p-0 sm:mt-10">
        <div>
          <img className="w-[60px] mb-2" src={image} alt="logo" />
          <p>
            Jus Solar is a leading solar energy company based in Port Harcourt,
          </p>
          <p> Rivers State, with its office located at</p>
          <p>No. 77 Stadium Road, Trust Fund Building.</p>
          <p> We specialize in offering a comprehensive range of</p>
          <p>high-quality solar products and solutions.</p>
        </div>
        <div>
          <h2 className="mb-3 hover:text-[#f5b041] font-[800]">About Us</h2>
          <ul className=" flex flex-col gap-3 ">
            <li className="hover:text-[#f5b041]">Terms and Condition</li>
            <li className="hover:text-[#f5b041]">About Us</li>
            <li className="hover:text-[#f5b041]">Personal Info</li>
          </ul>
        </div>
        <div>
          <h1 className="mb-3 hover:text-[#f5b041] font-[800]">Our Company</h1>
          <ul className=" flex flex-col gap-3 ">
            <li className="hover:text-[#f5b041]">Delivery</li>
            <li className="hover:text-[#f5b041]">Legal Notice</li>
            <li className="hover:text-[#f5b041]">About Us</li>
            <li className="hover:text-[#f5b041]">Contact Us</li>
          </ul>
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <h2 className="mb-3 hover:text-[#f5b041] font-[800]">Newsletter</h2>
            <p>Our company our pride</p>

            <input
              className="p-[3px] bg-transparent border-stone-300 border-[2px] my-5 block w-[200px] sm:p-[10px]"
              type="email"
              placeholder="Enter your email address here"
              value={email}
              onChange={handleInput}
            />
            {!isEmailValid ? <p>Please enter a valid email address</p> : null}
            <Button
              type="submit"
              variant="contained"
              style={{ background: "#f5b041 " }}
            >
              SUBSCRIBE
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AdvantageSolar;
