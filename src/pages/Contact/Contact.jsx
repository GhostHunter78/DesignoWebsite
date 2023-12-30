import { useState } from "react";
import styled from "styled-components";
import CountryLocations from "../../components/CountryLocations";

const Contact = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    clientMessage: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <>
      <OrangeDiv>
        <ContactUs>Contact Us</ContactUs>
        <Description>
          Ready to take it to the next level? Let’s talk about your project or
          idea and find out how we can help your business grow. If you are
          looking for unique digital experiences that’s relatable to your users,
          drop us a line.
        </Description>

        <FormContainer>
          <Form onSubmit={handleSubmit}>
            <Input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
              placeholder="Name"
              autoComplete="username"
            />

            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Email Address"
              autoComplete="email"
            />

            <Input
              type="number"
              id="phone"
              name="phone"
              value={formData.password}
              onChange={handleChange}
              required
              placeholder="Phone"
              autoComplete="phone"
            />

            <ClientMessage
              id="clientMessage"
              name="clientMessage"
              value={formData.clientMessage}
              onChange={handleChange}
              placeholder="Your Message"
            ></ClientMessage>
            <Button type="submit">submit</Button>
          </Form>
        </FormContainer>
      </OrangeDiv>
      <CountryLocations />
    </>
  );
};

export default Contact;

const OrangeDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background: #e7816b;
  padding: 72px 24px;
  background-image: url("/contactPage-backgroundCircles.png");
  background-repeat: no-repeat;
  background-size: 100%;
`;

const ContactUs = styled.h3`
  color: #fff;
  text-align: center;
  font-size: 32px;
  font-weight: 500;
  line-height: 36px;
`;

const Description = styled.p`
  width: 327px;
  color: #fff;
  text-align: center;
  font-size: 15px;
  font-weight: 400;
  line-height: 25px;
  margin-top: 24px;
`;

const FormContainer = styled.div`
  padding: 20px;
  border-radius: 8px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  outline: none;
  background: none;
  border: none;
  width: 327px;
  border-bottom: 1px solid white;
  margin-bottom: 25px;
  padding: 11px;
  color: #fff;
  font-size: 15px;
  font-weight: 500;
  line-height: 26px;
`;

const Button = styled.button`
  padding: 18px 47px 16px 48px;
  border-radius: 8px;
  background: #fff;
  border: none;
  color: #333136;
  text-align: center;
  font-size: 15px;
  font-weight: 500;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-top: 40px;
`;

const ClientMessage = styled.textarea`
  outline: none;
  background: none;
  border: none;
  width: 327px;
  border-bottom: 1px solid white;
  margin-bottom: 25px;
  padding: 11px;
  color: #fff;
  font-size: 15px;
  font-weight: 500;
  line-height: 26px;
`;
