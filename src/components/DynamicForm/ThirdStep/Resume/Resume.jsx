import { Button, Card, CardGroup, Modal } from "react-bootstrap"
import CardResume from './CardResume/CardResume'
import CardResumeHobbies from "./CardResume/CardResumeHobbies"

function Resume({showModal, setStep, setModal}) {

    const favouriteFruit = localStorage.getItem('fruitName')
    const fruitIcon = localStorage.getItem('iconFruit')
    const hobbiesStorage = JSON.parse(localStorage.getItem('hobbies'))
    const adittionalHobbie = localStorage.getItem('adittionalHobbie')
    const comment = localStorage.getItem('comment')


    const clearForm = () => {
        localStorage.clear()
        setModal(false)
        setStep(1)
    }



    return (
        <Modal show={showModal} size="lg" arial-labelledby="contained-modal-title-vcenter" centered onHide={clearForm}>
            <Modal.Header closeButton>
                <Modal.Title>Congratulations! 🥳🎉</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4 >Here you are your resume</h4>
                <CardGroup className="mt-4 text-center justify-content-center">
                    {favouriteFruit && fruitIcon && (
                        <CardResume title={fruitIcon} subtitle="Your favorite fruit is" text={favouriteFruit}/>
                    )}
                    {hobbiesStorage && (
                        <CardResumeHobbies subtitle="Your hobbies" text={adittionalHobbie} hobbiesStorage={hobbiesStorage} />
                    )}
                    {comment && (
                        <CardResume subtitle="And for the last this is the comment" text={comment} />
                    )}
                </CardGroup>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={clearForm} variant="outline-dark">Exit and clear form</Button>
            </Modal.Footer>
        </Modal>

    )
}

export default Resume