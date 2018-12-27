import Layout from '../components/Layout'
import Fetch from 'isomorphic-unfetch'
import Prices from '../components/Prices';

const Index =  (props) => (
    <Layout>
        <div>            
            <h1>Welcome to BitzPrice</h1>
            <p>Application to view Bitcon prices</p>
            {props.data.time.updated}

            <Prices currency="EUR" bpi={props.data.bpi}/>
        </div>
    </Layout>
);

Index.getInitialProps = async function() {
    const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
    const data = await res.json();
    console.log(data);
    return {
        data: data
    }
}

export default Index;