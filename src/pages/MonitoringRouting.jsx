import React, {Fragment} from 'react';
import {Switch, Route} from 'react-router-dom';

import Menu from 'src-components/Menu';
import Institute from "./Settings/Institute";
import Groups from "./Settings/Groups";
import Monitoring from "./Monitoring";

const MonitoringRouting = () => (
    <Fragment>
        <Menu/>
        <div style={{ width: 'calc(100% - 200px)' }}>
            <Switch>
                <Route exact path='/atm/monitoring' component={Monitoring}/>
                <Route path='/atm/monitoring/settings/institute' component={Institute}/>
                <Route path='/atm/monitoring/settings/groups' component={Groups}/>
            </Switch>
        </div>
    </Fragment>
);

export default MonitoringRouting;
