import { Layout, Typography, theme } from "antd";
import './Homepage.css';


const {Content} =Layout

function HomePage(){
    const {
        token: { colorBgContainer },
      } = theme.useToken();
    return(
        <div>
            <Typography.Title
                style={{
                    textAlign: 'left',
                    color:'black',
                    background:'#f5f5f5',
                }} level={4}>
                
                    <header className="home">Home</header>
            </Typography.Title>
        
            <Layout>
                <Content>
                    <div style={{
                        margin:'16px 16px 0',
                        padding:24,
                        minHeight:500,
                        background:colorBgContainer,
                        textAlign:'center',
                        paddingTop: '15%',
                    }}>
                        <h1>Welcome To My dasboard</h1>

                    </div>
                </Content>
            </Layout>
        </div>
        
    )
}
export default HomePage;
        