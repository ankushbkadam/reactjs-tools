import { useEffect } from 'react';

const About: React.FC = () => {
/**
 * lets import the linkedin script
 */
useEffect(() => {
    const script = document.createElement('script');

    script.src = 'https://platform.linkedin.com/badges/js/profile.js';
    script.async = true;
    script.defer = true;

    document.body.appendChild(script);

    return () => {
        document.body.removeChild(script);
    };
    }, []);

    return <div className='bg-dark text-white'>
        <h1>About Us</h1>
        <div className='container'>
            <p>
                While developing a software product, 
                we often use some tools from the internet 
                we are here with the vision to combine them 
                at one place.
            </p>
            <div>
                <h2>Meet out contributers</h2>
                <div>
                    <div className="badge-base LI-profile-badge" 
                        data-locale="en_US" 
                        data-size="medium" 
                        data-theme="light"
                        data-type="VERTICAL" 
                        data-vanity="ankush-kadam" 
                        data-version="v1"
                    >
                        <a className="badge-base__link LI-simple-link" 
                            href="https://in.linkedin.com/in/ankush-kadam?trk=profile-badge"
                        >Ankush Kadam</a>
                    </div>
                </div>
            </div>
        </div>
    </div>;
}

export default About;