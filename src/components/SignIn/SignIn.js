import React from "react"; 

// BEFORE
// const SignIn = ({ onRouteChange }) => {

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            signInEmail: "",
            signInPassword: ""
        }
    }
    
    onEmailChange = (event) => {
        this.setState({signInEmail: event.target.value})
    }

    onPasswordChange = (event) => { // onPasswordChange is a function that takes an event as an argument and sets the state of signInPassword to the value of the input field. The event is the change in the input field and the value is the value of the input field.
        this.setState({signInPassword: event.target.value})
    }

    onSubmitSignIn = () => {
        fetch("http://localhost:3000/signin", {
            method: "post",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                email: this.state.signInEmail,
                password: this.state.signInPassword
            })
        }).then(response => response.json())
        .then(data => {
            // if (data === "success") {
            //     this.props.onRouteChange("home");
            // }
            if (data.id) {
                this.props.loadUser(data);
                this.props.onRouteChange("home");
            }
        })
    }

    render() {
        const { onRouteChange } = this.props;
        return (
            <article className="br3 ba shadow-5 b--black-10 mv4 w-100 w-50-m w-25-l mw6 center">
                <main className="pa4 black-80">
                    <div className="measure">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f1 fw6 ph0 mh0">Sign In</legend>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                            <input 
                            className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                            type="email" 
                            name="email-address" id="email-address" 
                            onChange={this.onEmailChange} />
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                            <input 
                            className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                            type="password" 
                            name="password" 
                            id="password" 
                            onChange={this.onPasswordChange} // onChange is a React event that listens for changes in the input field and calls the function onPasswordChange when a change is detected and passes the input value to the function as an argument
                            />
                        </div>
                        </fieldset>
                        <div className="">
                            <input onClick={this.onSubmitSignIn} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in" />
                        </div>
                        <div className="lh-copy mt3">
                            <p onClick={() => onRouteChange('register')} href="#0" className="f6 link dim black db pointer">Register</p>
                        </div>
                    </div>
                </main>
            </article>
        );
    }
}

export default SignIn;