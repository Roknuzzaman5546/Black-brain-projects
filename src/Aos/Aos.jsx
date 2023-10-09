import { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useLoaderData } from 'react-router-dom';
import Service from '../Pages/Service';

function App() {
    const bands = useLoaderData()
    console.log(bands)

    useEffect(() => {
        AOS.init({
            duration: 700,
            offset: 200
        });
    }, []);

    return (
        <div className="App">
            <h1 data-aos="fade-up" className=' mt-3 mb-8 text-center text-2xl font-bold font-Blackops text-orange-400'>Our services</h1>
            <div data-aos="fade-left" className=' grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3'>
                    {
                       bands.map(band => <Service key={band.id} band={band}></Service>)
                    }

            </div>
        </div>
    );
}

export default App;
