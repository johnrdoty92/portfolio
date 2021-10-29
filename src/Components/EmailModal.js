import styled from "styled-components";
import ReactModal from "react-modal";
import { PrimaryButton } from "./StyledComponents";
import { useForm } from "@formspree/react";

const EmailModal = ({ isOpen, setShowModal }) => {
  ReactModal.setAppElement("#root");
  const [state, handleSubmit] = useForm("xeqvbjqn");

  return (
    <ReactModal
      isOpen={isOpen}
      style={{ overlay: { backgroundColor: "rgba(0,0,0,0.75)" } }}
      closeTimeoutMS={250}
    >
      <CloseButton
        type="button"
        onClick={() => {
          setShowModal(false);
        }}
      >
        X
      </CloseButton>
      {state.succeeded ? (
        <h2 style={{ textAlign: "center" }}>Thank you for reaching out!</h2>
      ) : (
        <StyledForm onSubmit={handleSubmit}>
          <label htmlFor="name">
            Name<span>*</span>
          </label>
          <input type="text" id="name" name="name" required />
          <label htmlFor="email">
            Email<span>*</span>
          </label>
          <input type="email" id="email" name="email" required />
          <label htmlFor="message">
            Message<span>*</span>
          </label>
          <textarea rows="10" id="message" name="message" required />
          <PrimaryButton className="submit" disabled={state.submitting}>
            SEND
          </PrimaryButton>
          {state.submitting ? (
            <h2 style={{ textAlign: "center" }}>Submitting...</h2>
          ) : null}
        </StyledForm>
      )}
    </ReactModal>
  );
};

export default EmailModal;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  input,
  textarea {
    margin-bottom: 2em;
  }
  span {
    color: red;
  }
  button.submit {
    width: fit-content;
    display: block;
    align-self: center;
    &:disabled {
      background-color: lightgrey;
    }
  }
`;

const CloseButton = styled.button`
  background: none;
  font-size: 1.5rem;
  border: none;
  display: block;
  width: fit-content;
  align-self: end;
`;
