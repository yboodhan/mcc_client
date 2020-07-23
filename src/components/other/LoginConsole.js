import React from 'react';
import FacebookLoginButton from './FacebookLoginButton';

const LoginConsole = props => {
    return (
        <div class="Login text-center">
            <div>
                <div class="card-header">
                    <strong>LOGIN</strong>
                </div>
                <div class="card-body">
                    <form>
                        <div className="form-group p-2">
                            <label className="pr-2" for="username">Username: </label>
                            <input type="text" name="username" id="username"/>
                        </div>
                        <div className="form-group p-2">
                            <label className="pr-2" for="password">Password: </label>
                            <input type="password" name="password" id="password" />
                        </div>
                    </form>
                </div>
                <div class="card-footer text-muted">
                    <button>Submit</button>
                </div>
            </div>
            <div className="mt-2">
                <div className="mb-2">
                    <strong>- OR -</strong>
                </div>
                <div>
                    <FacebookLoginButton />
                </div>
            </div>

        </div>
    )
}

export default LoginConsole;