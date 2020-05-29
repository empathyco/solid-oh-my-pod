import styled from "styled-components";

export const InputText = styled.input`
  background-color: transparent;
  margin-bottom: 2em;
`;

export const FormSection = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
  width: 500px;
  @media (max-width: 768px) {
    width: 80%;
  }
`;

export const Label = styled.label`
  text-transform: uppercase;
  margin-bottom: 1em;
`;

export const CardLink = styled.a`
  text-align: center;
  display: block;
  margin-bottom: 50px;
`;

export const Content = styled.div`
  margin-top: 40px;
  margin-left: 8em;

  display: flex;
  flex-wrap: wrap;

  justify-content: flex-start;
  @media (max-width: 900px) {
    justify-content: center;
    margin-left: 0;
    justify-content: center;
  }
`;

export const ProfileName = styled.h3`
  margin-top: auto;
  justify-items: center;
  text-align: center;
  & * {
    font-size: 1.5rem;
    margin: 5px auto;
    text-transform: uppercase;
    color: var(--light-blue) !important;
  }
`;

export const TextArea = styled.textarea`
  width: 300px;
  height: 200px;
  background-color: transparent;
`;

export const NotesButtons = styled.div`
  margin-top: 10px;
  justify-self: right;
  margin-left: auto;
`;

export const TextAreaSection = styled.section`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  margin-left: 50px !important;
  justify-self: center;
  @media (max-width: 1200px) {
    margin-left: auto !important;
  }
`;

export const SaveButtonm = styled.button`
  margin-top: 20px;
  justify-self: right;
  margin-left: auto;
`;
