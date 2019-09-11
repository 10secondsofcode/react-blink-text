import React from 'react';
import PropTypes from 'prop-types';
import './ReactBlinkText.css'

class ReactBlinkText extends React.Component {
    render() {
        const { color, fontSize, text } = this.props;

        return (
            <div>
                 <span className="blink" style={{ color: color, fontSize: fontSize }}>
                    {text}
                </span>
            </div>
        );
    }
}

ReactBlinkText.propTypes = {
    /** hex color */
    color: PropTypes.string
}

ReactBlinkText.defaultProps = {
    color: '#7f58af',
    fontSize: 55,
    text: 'React Blink'
}

export default ReactBlinkText;
