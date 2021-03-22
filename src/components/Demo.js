import React, { Component } from 'react';
import './Demo.css';

const options = [
    {label: 'IT', value: 'it'},
    {label: 'Engineer', value: 'engineer'},
    {label: 'Unemployed', value: 'unemployed'},
];

class Demo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: 'Pesho',
            age: 18,
            bio: 'Lorem Ipsum',
            occupation: 'unemployed',
            errors: {
                username: '',
                email: '',
            }
        };

        this.emailInput = React.createRef();

        this.onChangeHandler = this.onChangeHandler.bind(this)
    }

    onSubmitHandler(e) {
        e.preventDefault();

        if (this.state.username.length < 5) {
            console.log('asdsd');
            this.setState(state => 
                ({errors: { ...state.errors, username: 'You name should be at least 5 characters long!'}}))
        } 

        if (!this.emailInput.current.value.includes('@')) {
            this.setState(state => ({errors: { ...state.errors, email: 'There should be an @ sign' }}));
            this.emailInput.current.value = '';
            this.emailInput.current.focus();
        } else {
            this.setState(state => ({errors: { ...state.errors, email: '' }}));
        }
    };

    // onUsernameChangeHandler(e) {
    //     this.setState({username: e.target.value});
    // };

    // onAgeChangeHandler(e) {
    //     this.setState({age: e.target.value});
    // }

    onChangeHandler(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    render() {
        return (
            <div>
                <h1>Demo Form</h1>

                <form>
                    <label htmlFor="username">Username</label>
                    <input 
                        type="text" 
                        id="username" 
                        name="username" 
                        value={this.state.username} 
                        onChange={this.onChangeHandler} 
                    />
                    {this.state.errors.username && 
                        <div className='input-validation'>{this.state.errors.username}</div>
                    }

                    <label htmlFor="email">Email</label>
                    <input
                        ref={this.emailInput}
                        type="email"
                        id="email"
                        name="email"
                        placeholder="example@pesho.com"
                    />
                    {this.state.errors.email && 
                        <div className='input-validation'>{this.state.errors.email}</div>
                    }

                    <label htmlFor="age">Age</label>
                    <input
                        type="number"
                        id="age"
                        name="age"
                        value={this.state.age}
                        onChange={this.onChangeHandler} 
                    />

                    <label htmlFor="bio">Bio</label>
                    <textarea name="bio" onChange={this.onChangeHandler} value={this.state.bio} />

                    <label htmlFor="occupation"></label>
                    <select
                        name="occupation"
                        id="occupation"
                        onChange={this.onChangeHandler}
                        value={this.state.occupation}
                    >
                        {options.map(x => 
                            <option key={x.value} value={x.value}>{x.label}</option>    
                        )}
                    </select>


                    <input type="file" name="upload-picture" />
                    <input
                        type="submit"
                        value="Send"
                        onClick={this.onSubmitHandler.bind(this)}
                    />
                </form>
            </div>
        );
    }

}

export default Demo;