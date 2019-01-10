import styled from 'styled-components';

export const Container = styled.div`
  display: ${props => (props.show ? 'flex' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 400px;
  width: 100%;
  max-height: 200px;
  height: 100%;
  margin: auto;
  border-radius: 3px;
  background: #fff;
  padding: 20px;

  h3 {
    font-weight: bold;
    margin: 10px 0;
  }

  form {
    input {
      width: 360px;
      padding: 12px 20px;
      margin: 10px 0;
      display: inline-block;
      border: 1px solid #ccc;
      border-radius: 4px;
      box-sizing: border-box;
      font-size: 16px;
    }
  }
`;

export const Cancelar = styled.button`
  width: 175px;
  background-color: #9e9e9e;
  color: white;
  padding: 14px 20px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 15px;
  font-weight: bold;

  &:hover {
    background-color: #bdbdbd;
  }
`;

export const Adicionar = styled.button`
  width: 175px;
  background-color: #4caf50;
  color: white;
  padding: 14px 20px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  margin-left: 10px;
  font-size: 15px;
  font-weight: bold;

  &:hover {
    background-color: #66bb6a;
  }
`;
