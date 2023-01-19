import {Header, NavItem } from './AppBar.styled';
import { FiSearch, FiBookOpen } from 'react-icons/fi';


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
          <FiSearch size="16" />
          Search
        </NavItem>
        <NavItem to="/variables">
          <FiBookOpen size="16" />
          Variables
        </NavItem>
      </nav>
    </Header>
  );
};

export default AppBar
