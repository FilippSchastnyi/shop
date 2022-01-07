import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  border: 1px solid lightblue;
  border-radius: 20px;
  height: 100%;

  > Button {
    border-radius: 0 0 20px 20px;
  }
`;

export const Image = styled.img`
{
  max-height: 250px;
  object-fit: cover;
  border-radius: 20px 20px 0 0;
}`;

export const Content = styled.div`
{
  font-family: Arial, sans-serif;
  padding: 1rem;
  height: 100%;
}`