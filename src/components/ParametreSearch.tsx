import React, { Fragment } from 'react';
import { inject, observer } from 'mobx-react';

interface MyProps {
    FetchAllCards?: any,
    SearchSingleCard?: any,
    SearchByParametres?: any
}

interface MyState { }

@inject('SearchByParametres')
@observer
class ParametreSeach extends React.Component<MyProps, MyState> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <Fragment>
                <div className="parametres-wrapper">
                    <h1 onClick={this.props.SearchByParametres.test}>Hello</h1>
                </div>
            </Fragment>
        )
    }
}

export default ParametreSeach;