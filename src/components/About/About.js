import React, {Component} from 'react';

export default class About extends Component {
    render() {
        return (
            <div className='About'>
                <h1>About Medwall</h1>

                <p>
                    Medwall is internal project by <a role='link' tabIndex='0'>Droidinlabs</a>.
                    Medwall is meant to be a vault for all your medical data.
                </p>
                <p>
                    Visit documentation
                    on <a href='https://github.com/deepakkadarivel/medwall-react#readme'>GitHub</a>
                </p>
            </div>
        );
    }
}
