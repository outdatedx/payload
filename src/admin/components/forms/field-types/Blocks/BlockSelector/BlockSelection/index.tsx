import React from 'react';
import PropTypes from 'prop-types';

import DefaultBlockImage from '../../../../../graphics/DefaultBlockImage';

import './index.scss';

const baseClass = 'block-selection';

const BlockSelection = (props) => {
  const {
    addRow, addRowIndex, block, close,
  } = props;

  const {
    labels, slug, blockImage, blockImageAltText,
  } = block;

  const handleBlockSelection = () => {
    close();
    addRow(addRowIndex, slug);
  };

  return (
    <button
      className={baseClass}
      tabIndex={0}
      type="button"
      onClick={handleBlockSelection}
    >
      <div className={`${baseClass}__image`}>
        {blockImage
          ? (
            <img
              src={blockImage}
              alt={blockImageAltText}
            />
          )
          : <DefaultBlockImage />}
      </div>
      <div className={`${baseClass}__label`}>{labels.singular}</div>
    </button>
  );
};

BlockSelection.defaultProps = {
  addRow: undefined,
  addRowIndex: 0,
};

BlockSelection.propTypes = {
  addRow: PropTypes.func,
  addRowIndex: PropTypes.number,
  block: PropTypes.shape({
    labels: PropTypes.shape({
      singular: PropTypes.string,
    }),
    slug: PropTypes.string,
    blockImage: PropTypes.string,
    blockImageAltText: PropTypes.string,
  }).isRequired,
  close: PropTypes.func.isRequired,
};

export default BlockSelection;