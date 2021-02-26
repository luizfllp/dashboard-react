import React from 'react';
import Container from '../shared/template/Container';
import Content from '../shared/template/Content';
import Footer from '../shared/template/Footer';
import Header from '../shared/template/Header';
import SideNav from '../shared/template/SideNav';
import Toolbar from '../shared/template/Toolbar';


const App = props => {
    return (
        <Container>
            <Header>
                <h1>My Finances</h1>
            </Header>
            <Toolbar>
                <span>toolbar</span>
            </Toolbar>
            <SideNav>
                <span>sidenav</span>
            </SideNav>
            <Content>
                <span>content</span>
            </Content>
            <Footer>
                <span>2021 © COD3R - My Finances. </span>
            </Footer>
        </Container>
    )
}

export default App;