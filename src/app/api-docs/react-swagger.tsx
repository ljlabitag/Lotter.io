'use client';

import React, { Component } from 'react';
import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';

type Props = {
    spec: Record<string, any>;
};

type State = {
    spec: Record<string, any>;
};

class ReactSwagger extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            spec: props.spec,
        };
    }

    componentDidUpdate(prevProps: Props) {
        if (this.props.spec !== prevProps.spec) {
            // Update the state when the spec prop changes
            this.setState({ spec: this.props.spec });
        }
    }

    render() {
        return <SwaggerUI spec={this.state.spec} />;
    }
}

export default ReactSwagger;