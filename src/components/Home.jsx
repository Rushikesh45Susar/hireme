import React , {useState  } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    const [first, setfirst] = useState('Mayur');
    const name =  "gdgagfad"; 

    return(
        <>
            <h2>Hello , Mayur</h2>
            <button onClick={()=>{setfirst("pratik")}}>click</button>
            <h5>{first}</h5>
            <Link to="/jobdetails" state={{detail : name}} >Show Job Des</Link>
        </>
    )
}

export default Home;