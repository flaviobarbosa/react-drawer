import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Drawer from './components/Drawer';

const Container = styled.div`
  height: 100%;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 20px;
`;

const Title = styled.h1``;

const Button = styled.button`
  border: none;
  color: #fff;
  padding: 5px 15px;
  border-radius: 15px;
  cursor: pointer;
  background-color: darkviolet;
`;

const Span = styled.span`
  display: inline-block;
  margin: 20px;
`;

function App() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    console.log('handleClose');
    setOpen(false);
  };

  return (
    <Container>
      <Header>
        <Button onClick={handleOpen}>login</Button>
        <Title>My app</Title>
      </Header>
      <Drawer onClick={handleClose} open={open} onClose={handleClose}></Drawer>
      <Span>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer mollis nunc lobortis risus
        rutrum, quis fermentum nibh pharetra. Aenean condimentum sed ipsum vitae interdum. Praesent
        pellentesque turpis at leo placerat, vel rhoncus orci pulvinar. Donec laoreet efficitur urna
        sed gravida. Curabitur vel diam augue. Aliquam nec commodo neque, varius scelerisque odio.
        Nullam mattis nunc ut sodales ornare. Suspendisse volutpat at massa hendrerit condimentum.
        Aliquam sit amet erat dui. Suspendisse finibus nisi vel mi fringilla pulvinar. Nam ut nulla
        neque. Quisque malesuada dignissim leo id volutpat. Pellentesque eget lorem elit. In vitae
        mi tortor. Nam id sem leo. Ut vestibulum dui orci, at euismod quam dapibus sed. Phasellus
        viverra arcu vel facilisis imperdiet. Aliquam bibendum condimentum arcu, nec euismod enim
        finibus in. Integer placerat dui nisl, quis efficitur sapien semper eu. Aenean mattis erat
        ac turpis lobortis, vel semper orci ultricies. Fusce ut augue vitae sapien imperdiet
        vestibulum vel eu sapien. Morbi et eros in purus faucibus rhoncus nec id augue. Integer elit
        enim, fringilla in felis eu, pretium iaculis massa. Suspendisse sodales porttitor sapien, ut
        varius lectus feugiat semper. Vestibulum eget feugiat diam. Suspendisse sed ullamcorper
        quam, id vestibulum arcu. Suspendisse potenti. Quisque et turpis sit amet erat posuere
        dignissim. Nullam rutrum lorem a eleifend congue. Nullam mattis, sapien id vulputate semper,
        lorem ante volutpat purus, eu consequat nisi massa quis massa. Quisque eget sem eu tortor
        tempor imperdiet. Phasellus id quam ligula. Nulla ultrices blandit turpis, vel porttitor
        nisi congue sed. Maecenas imperdiet magna non cursus pellentesque. Suspendisse ut lacus sed
        libero ullamcorper sagittis in lobortis neque. Nulla eget erat eget sapien ornare volutpat.
        Aenean suscipit augue eu dui fringilla iaculis. Suspendisse maximus, turpis vitae
        ullamcorper elementum, enim massa aliquam leo, elementum sagittis arcu turpis at purus.
        Suspendisse non lobortis magna. Vivamus quis lorem sit amet risus semper accumsan. Nam ut
        imperdiet metus, at efficitur diam. Nam finibus orci justo, eu laoreet arcu mattis id. Etiam
        est urna, fringilla quis ultrices at, ullamcorper in orci. Nullam sit amet elit ac erat
        consectetur hendrerit. Etiam risus tellus, mattis congue lacinia eu, elementum vel ligula.
        Mauris rhoncus nulla nec interdum tincidunt. Integer interdum bibendum odio, vel efficitur
        dolor semper interdum. Quisque ut nulla a nibh lobortis varius. Sed eleifend sit amet tortor
        non tempor. Aenean sollicitudin rhoncus sem, non lacinia ex fringilla eget.
      </Span>
    </Container>
  );
}

export default App;
