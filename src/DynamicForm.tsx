import React, {useState} from 'react';
import {Button, Container, Form} from "react-bootstrap";


const DynamicForm = () => {
    const [inp, setInp] = useState<number>(0)
    const [text, setText] = useState<number>(0)
    const [check, setCheck] = useState<number>(0)

    const [isLoad, setIsLoad] = useState<boolean>(false);
    const [isConfirm, setConfirm] = useState<boolean>(false);

    return (
        <>
            {!isLoad ?
                (
                    <Container className="d-flex align-items-center justify-content-center p-4 flex-column">
                        <Form>
                            <Form.Group className="mb-3" controlId="inp">
                                <Form.Label>Input:</Form.Label>
                                <Form.Control type="number"
                                              placeholder="count"
                                              onChange={(e) => setInp(Number(e.target.value))}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3 " controlId="text">
                                <Form.Label>Textarea:</Form.Label>
                                <Form.Control type="number"
                                              placeholder="count"
                                              onChange={(e) => setText(Number(e.target.value))}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="check">
                                <Form.Label>Checkbox:</Form.Label>
                                <Form.Control type="number"
                                              placeholder="count"
                                              onChange={(e) => setCheck(Number(e.target.value))}
                                />
                            </Form.Group>
                        </Form>
                        <Button onClick={() => setIsLoad(true)}>Build</Button>
                    </Container>
                ) : (
                    <Container className="d-flex align-items-center justify-content-center p-4 flex-column">
                        <Form>
                            {
                                Array(inp).fill(0).map((_, index) =>
                                    <Form.Group key={index} className="m-1">
                                        <Form.Control/>
                                    </Form.Group>
                                )
                            }
                            {
                                Array(text).fill(0).map((_, index) =>
                                    <Form.Group  key={index}  className="m-1">
                                        <Form.Control as="textarea" rows={3} />
                                    </Form.Group>
                                )
                            }
                            {
                                Array(check).fill(0).map((_, index) =>
                                    <Form.Check  key={index}  className="m-1"></Form.Check>
                                )
                            }
                        </Form>
                        {
                            !isConfirm &&
                            <div className="d-flex p-1">
                                <Button onClick={() => setIsLoad(false)} className="m-1">Back</Button>
                                <Button onClick={() => setConfirm(true)} className="m-1">Confirm</Button>
                            </div>
                        }

                    </Container>
                )
            }
        </>
    );
};

export default DynamicForm;
