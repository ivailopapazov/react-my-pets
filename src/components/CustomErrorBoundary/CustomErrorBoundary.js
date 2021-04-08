import React from 'react';

class CustomErrorBoundary extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            hasError: false
        };
    }

    static getDerivedStateFromError(error) {
        return {
            hasError: true
        }
    }

    componentDidCatch(error, errorInfo) {
        console.log('Error from componentDidCatch: ', error);
    }
    
    render() {
        if (this.state.hasError) {
            return <h1>I'm soo sorry</h1>
        }

        return this.props.children;
    }
}

export default CustomErrorBoundary;