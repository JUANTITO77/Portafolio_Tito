import styled from "styled-components";

const ContactForm = () => {
  return (
    <Wrapper>
      <FormContainer>
        <Form>
          <h2>Contact Us</h2>
          <Input type="text" placeholder="Username" />
          <Input type="email" placeholder="E-mail" />
          <Input type="tel" placeholder="Phone" />
          <Textarea placeholder="Message" />
          <Button type="submit">SEND →</Button>
        </Form>
      </FormContainer>
    </Wrapper>
  );
};

export default ContactForm;

// Estilos con styled-components

const Wrapper = styled.div`
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(180deg, #6e68d2, #bdb6f2);
  font-family: "Segoe UI", sans-serif;
  border-radius:10px
`;

const FormContainer = styled.div`
  background: white;
  border-radius: 20px;
  padding: 30px;
  width: 300px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;

  h2 {
    text-align: center;
    margin-bottom: 20px;
    color: #111;
    font-weight: bold;
  }
`;

const Input = styled.input`
  margin-bottom: 15px;
  padding: 10px 15px;
  border: none;
  border-radius: 25px;
  background: #f0f0f0;
  font-size: 14px;
`;

const Textarea = styled.textarea`
  margin-bottom: 15px;
  padding: 10px 15px;
  border: none;
  border-radius: 25px;
  background: #f0f0f0;
  font-size: 14px;
  resize: none;
  height: 80px;
`;

const Button = styled.button`
  background: linear-gradient(to right, #8a6fff, #6e68d2);
  color: white;
  border: none;
  border-radius: 25px;
  padding: 12px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: linear-gradient(to right, #6e68d2, #8a6fff);
  }
`;
