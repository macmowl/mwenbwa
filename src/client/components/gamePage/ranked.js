import React, {useState, forwardRef, useImperativeHandle} from "react";
import Modal from "react-modal";
import {getRanks} from "../../hooks/api-user";

const customStyles = {
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
    },
    overlay: {zIndex: 1000},
};

const Ranked = forwardRef((props, ref) => {
    const [modalShown, setModalShown] = useState(false);
    const [ranks, setRanks] = useState(null);
    const [error, setError] = useState(null);
    const showModal = () => {
        getRanks().then(result => {
            if (result.succeed) {
                setRanks(result.data.ranks);
            } else {
                setError(
                    `An error occurs while retrieving data :${result.error}`,
                );
            }
        });

        setModalShown(true);
    };

    const hideModal = () => {
        setModalShown(false);
    };

    useImperativeHandle(ref, () => ({
        showModal,
    }));

    return (
        <div>
            <Modal
                ariaHideApp={false}
                isOpen={modalShown}
                onRequestClose={hideModal}
                style={customStyles}
                contentLabel={"Example Modal"}>
                <h1>{"Ranks"}</h1>
                <div>
                    {(() => {
                        if (ranks) {
                            return ranks.map(el => (
                                <p key={el._id}>
                                    {el.username}
                                    {": "} {el.leaves}{" "}
                                </p>
                            ));
                        } else if (error) {
                            return <p>{error}</p>;
                        }

                        return <p>{"Loading data..."}</p>;
                    })()}
                </div>

                <button type={"button"} onClick={hideModal}>
                    {"Close"}
                </button>
            </Modal>
        </div>
    );
});

//ReactDOM.render(<Ranked />,appElement);

export default Ranked;
