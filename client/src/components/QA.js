import React from 'react'
import styled from 'styled-components'
import Modal from './Modal.js'

const Wrapper = styled.div`
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const TopRow = styled.div`
    display: flex;
    justify-content: space-between;
`

class QA extends React.Component {
    componentDidMount() {
        this.props.fetchQA(this.props.url)
    }
    render() {
        let url = new URL(this.props.url)
        return (
            <Wrapper>
                {Array.isArray(this.props.qa) ? (
                    <div>
                        <br />
                        <br />
                        <TopRow>
                            <div>
                                <b>Site:&nbsp;</b>{url.hostname}
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                <b>Page:&nbsp;</b>{url.pathname}
                            </div>
                            <button
                                onClick={() => this.props.toggleModal()}
                            >
                                Voice it!
                            </button>
                        </TopRow>
                        <br />
                        <br />
                        <table>
                            <thead>
                                <tr>
                                    <th>Select&nbsp;&nbsp;</th>
                                    <th>Question</th>
                                    <th>Answer</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.props.qa.map((qa, i) => (
                                    <tr key={i}>
                                        <td>
                                            &nbsp;&nbsp;
                                            <input
                                                type="checkbox"
                                                name={i}
                                                onClick={(e) => this.props.updateQASelection(e.target.name)}
                                            />
                                        </td>
                                        <td>{qa.question}</td>
                                        <td>{qa.answer}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <Modal
                            show={this.props.modal}
                            toggleModal={this.props.toggleModal}
                        >
                            <p><b>Where would you like to publish to?</b></p>
                            <input
                                type="checkbox"
                                name="amazon"
                                checked={this.props.vendors.amazon}
                                onChange={(e) => this.props.updateVendorSelection(e.target.name)}
                            /><span>Amazon Echo / Alexa</span>
                            <br />
                            <br />
                            <input
                                type="checkbox"
                                name="google"
                                checked={this.props.vendors.google}
                                onChange={(e) => this.props.updateVendorSelection(e.target.name)}
                            /><span>Google Home</span>
                            <br />
                            <br />
                            <input
                                type="checkbox"
                                name="apple"
                                checked={this.props.vendors.apple}
                                onChange={(e) => this.props.updateVendorSelection(e.target.name)}
                            /><span>Apple Home</span>
                            <br />
                            <br />
                            <button>Publish</button>
                            <br />
                            <br />
                        </Modal>
                    </div>
                ) : (
                    null
                )}

                {this.props.qa === 'requesting' ? (
                    <p>requesting...</p>
                ) : (
                    null
                )}
            </Wrapper>
        );
    }
}

export default QA
