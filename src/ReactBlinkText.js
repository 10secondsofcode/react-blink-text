import React from 'react';
import PropTypes from 'prop-types';
import './ReactBlinkText.css'

class ReactBlinkText extends React.Component {
    render() {
        const { color, fontSize, text, background, opacity } = this.props;

        return (
            <div style={{backgroundColor: background, opacity: opacity }}>
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
    text: 'React Blink',
    background: 'transparent',
    opacity: 1
}

export default ReactBlinkText;
