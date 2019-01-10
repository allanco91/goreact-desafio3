import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 100%;
  height: 92%;
  width: 25%;
  position: fixed;
  top: 3%;
  left: 2%;
  background-color: rgba(255, 255, 255, 0.9);
  padding: 0 15px 0 15px;
  text-align: center;
  border-radius: 3px;

  p {
    margin-top: 20px;
    font-weight: bold;
  }
`;

export const ContentDev = styled.div`
  margin-top: 15px;
  display: flex;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid #eeeeee;

  img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    margin-bottom: 10px;
    border: 3px solid #01579b;
  }
`;

export const DataDev = styled.div`
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  strong {
    font-size: 16px;
  }

  span {
    font-size: 14px;
    color: #999999;
  }
`;

export const Botoes = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;

export const Apagar = styled.button`
  color: #c62828;
  margin-left: 20px;
  align-self: stretch;
  height: 30px;
  background: #fff;
  border: 0;
  cursor: pointer;
`;

export const Mostrar = styled.a`
  color: #757575;
  margin-left: 20px;
  align-self: stretch;
  height: 30px;
  background: #fff;
  border: 0;
  cursor: pointer;
`;
