import {Header, NavItem } from './AppBar.styled';
import { AiOutlineCar, AiOutlineFileText } from 'react-icons/ai';

const AppBar = () => {
  
  return (
    <Header>
      <nav
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '20px',
        }}
      >
        <NavItem to="/">
          <AiOutlineCar size="16" />
          Decode VIN
        </NavItem>
        <NavItem to="/variables">
          <AiOutlineFileText size="16" />
          Variables
        </NavItem>
      </nav>
    </Header>
  );
};

export default AppBar
