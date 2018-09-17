import React, { PureComponent } from 'react';
import { graphql } from 'react-apollo';
import PropTypes from 'prop-types';
import queryNodes from './queries';

const NO_FOUND = 'No found';
const LABEL_NAME = 'Label is ';

const findLabel = (node, id) => {
  if (node && node.id === id) {
    return node.label;
  }

  let label = NO_FOUND;
  const { children } = node;

  if (children) {
    const { length } = children;
    let i = 0;

    for (i; i < length; i += 1) {
      label = findLabel(children[i], id);

      if (label !== NO_FOUND) {
        return label;
      }
    }
  }

  return label;
};

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
