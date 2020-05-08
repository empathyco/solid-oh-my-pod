import styled from "styled-components";

import { media } from "../../../utils";

export const InputText = styled.input`
  min-width: 500px;
  background-color: transparent;
  margin-bottom: 2em;
`;

export const FormSection = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0 50px;
`;

export const Label = styled.label`
  text-transform: uppercase;
  margin-bottom: 1em;
`;

export const CardLink = styled.a`
  display: block;
  margin-bottom: 50px;
`;

export const Content = styled.div`
  margin-top: 40px;
  margin-left: 8em;

  display: flex;
  flex-wrap: wrap;
  justify-content: left !important;
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
`;

export const SaveButtonm = styled.button`
  margin-top: 20px;
  justify-self: right;
  margin-left: auto;
`;
