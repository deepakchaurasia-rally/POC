import styled from 'styled-components'
import styles from './Modal.styles'
import * as React from 'react';
// import { CommonJson } from '../../../cs.constants';
// import { queueEvent } from '../Interactions/Interactions';
// import { $amplitudeService } from '../../../DEPRECATED_cs.angularExports';
// import { captureEventTrigger } from '@rally/analytics';
// import { logModalPageNav, logPageNav } from '../../../helpers/analytics/migrationHelpers';
// import { WizardImplementationTypes } from '../../../util/services/cs.util.wizardNavigation';
// import ModalHeader from './ModalHeader';
// import ModalBody from './ModalBody';
// import { getSprite } from '../../../util/helpers/AssetHelpers';
// import { stringToKeywordFormat } from '@rally/analytics';

interface Props {
    analyticsTriggerName?: string; // name required for amplitude modal open/close tracking on normal state change.  No tracking will happen if not provided.
    header?: any;
    subHeader?: string;
    headerContent?: any;
    showLink?: boolean;
    isFullScreen?: boolean;
    tag?: string;
    linkText?: string;
    linkClass?: string;
    show?: boolean;
    shouldCloseOnOverlayClick?: boolean;
    modalPageTrackName?: string; // modalPageName on an amplitude event, not required for state change and will fallback to header value.  Also strangely used for when props.show drives modal opening and closing
    className?: string;
    closed?: () => void;
    children?: React.ReactNode;
    visuallyHiddenText?: string;
    customWidth?: boolean;
    contentPadding?: boolean;
}

interface State {
    showModal: boolean;
    closeButton?: string;
}
const fullScreenStyles = {
    overlay: {
        zIndex: 1000,
    },
};

const noScrollbarClass = 'no-scrollbar';

class CsModal extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            showModal: props.show || false,
        };
        if (props.show) {
            this.queueAnalyticsEvent('open');

            if (props.isFullScreen) {
                document.body.classList.add(noScrollbarClass);
            }
        }
    }

    componentDidUpdate(oldProps: Props) {
        const { show, isFullScreen } = this.props;

        if (oldProps.show === show) {
            return;
        }
        if (show) {
            this.setState({ showModal: true });
            this.queueAnalyticsEvent('open');

            if (isFullScreen) {
                document.body.classList.add(noScrollbarClass);
            }
        } else {
            this.setState({ showModal: false });
            this.queueAnalyticsEvent('close');
            document.body.classList.remove(noScrollbarClass);
        }
    }

    async componentDidMount() {
        const closeButton = await getSprite('closeButton');
        this.setState({ closeButton });
    }

    queueAnalyticsEvent(action: 'open' | 'close') {
        const { modalPageTrackName, header } = this.props;
        const pageName = modalPageTrackName || header;
        if (action === 'open') {
            logModalPageNav(pageName, [], {}, WizardImplementationTypes.modal);
        } else {
            logPageNav();
        }
        $amplitudeService.logEvent({
            noRoutingStateChange: true,
            actionName: `modal-${action}`,
            analyticsName: pageName,
            isModal: true,
        });
    }

    closeModal = () => {
        const { closed } = this.props;
        this.setState({ showModal: false });
        if (closed) {
            closed();
        }
    };

    clickedOpen = (event) => {
        const { analyticsTriggerName, modalPageTrackName, header } = this.props;
        this.setState({ showModal: true });
        const pageName = modalPageTrackName || header;
        if (analyticsTriggerName) {
            captureEventTrigger(event);
            queueEvent(event, event.target);
        }
        logModalPageNav(pageName, [], {}, WizardImplementationTypes.modal);
    };

    clickedClose = (event) => {
        const { analyticsTriggerName } = this.props;
        this.closeModal();
        if (analyticsTriggerName) {
            captureEventTrigger(event);
            queueEvent(event, event.target);
        }
        logPageNav();
    };

    renderLink() {
        const { linkText, linkClass, show } = this.props;
        if (!linkText || show !== undefined) {
            return '';
        }
        return (
            <button
                className={linkClass || 'link'}
                data-ui-element-name={this.props.analyticsTriggerName}
                data-test-id={
                    typeof linkText === 'string' ? stringToKeywordFormat(linkText) : this.props.analyticsTriggerName
                }
                onClick={this.clickedOpen}
            >
                {linkText}
                <p className="visuallyHidden">{this.props.visuallyHiddenText}</p>
            </button>
        );
    }

    render() {
        const {
            showLink,
            children,
            isFullScreen,
            className,
            shouldCloseOnOverlayClick,
            header,
            subHeader,
            show,
            headerContent,
            customWidth,
            contentPadding,
        } = this.props;
        const { showModal, closeButton } = this.state;
        const { ctas } = CommonJson.keys;

        if (!show && showLink === false) {
            return null;
        }
        return (
            <>
                {this.renderLink()}
                <ReactModal
                    className={`generic modal ${isFullScreen ? 'fullscreen-modal' : 'small-modal'} ${className || ''}`}
                    isOpen={showModal}
                    onRequestClose={this.closeModal}
                    overlayClassName="ngdialog-overlay"
                    shouldCloseOnOverlayClick={shouldCloseOnOverlayClick}
                    style={fullScreenStyles}
                    role="dialog"
                    aria={{
                        modal: 'true',
                        labelledby: 'modalHeading',
                    }}
                >
                    <CsModalActionsContext.Provider value={this.closeModal}>
                        <div className="modal-wrapper">
                            <ModalHeader headingText={header} subHeadingText={subHeader}>
                                {headerContent}
                                <button
                                    className="close-btn"
                                    data-test-id="close-btn"
                                    data-ui-element-name={'modal-close'}
                                    onClick={this.clickedClose}
                                    aria-label={ctas && ctas.close}
                                >
                                    <img src={closeButton} alt={ctas && ctas.close} />
                                </button>
                            </ModalHeader>
                            <ModalBody customWidth={customWidth} contentPadding={contentPadding}>
                                {children}
                            </ModalBody>
                        </div>
                    </CsModalActionsContext.Provider>
                </ReactModal>
            </>
        );
    }
}

export default CsModal;


