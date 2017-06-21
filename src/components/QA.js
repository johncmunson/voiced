import React from 'react'

class QA extends React.Component {
    componentDidMount() {
        this.props.fetchQA(this.props.url)
    }
    render() {
        return (
            <div>
                {Array.isArray(this.props.qa) ? (
                    <div>
                        {this.props.qa.map((qa, i) => (
                            <div key={i}>
                                Q:<p>{qa.question}</p>
                                A:<p>{qa.answer}</p>
                            </div>
                        ))}
                    </div>
                ) : (
                    null
                )}

                {this.props.qa === 'requesting' ? (
                    <p>requesting</p>
                ) : (
                    null
                )}
            </div>
        );
    }
}

export default QA
