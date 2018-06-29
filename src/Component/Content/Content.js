import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from '../Login/Login';
import Users from '../Users/Users';
import UserDetail from '../Users/UserDetail';

const Content = (props) => {
    return (
        <div className="Content" onClick={props.onCloseSidebar}>
            <Switch>
                <Route path='/' exact component={Login} />
                <Route path='/users/:id' component={UserDetail} />
                <Route path='/users' component={Users} />
            </Switch>
        </div>
    );

}

export default Content;
