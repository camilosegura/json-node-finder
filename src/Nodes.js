import React, { PureComponent } from 'react';
import { graphql } from 'react-apollo';
import PropTypes from 'prop-types';
import queryNodes from './queries';
import findLabel from './findLabel';
import { NO_FOUND, LABEL_NAME } from './constants';

class Nodes extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      label: NO_FOUND,
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange({ target: { value } }) {
    const { data: { nodes } } = this.props;
    const label = findLabel(nodes, Number(value));

    this.setState({
      label,
    });
  }

  render() {
    const { label } = this.state;
    return (
      <div>
        <input type="number" onChange={this.onChange} />
        <p>
          { LABEL_NAME }
          <strong>{ label }</strong>
        </p>
      </div>
    );
  }
}

Nodes.propTypes = {
  data: PropTypes.object.isRequired,
};

export default graphql(queryNodes)(Nodes);
