import React from "react";
import { Form, Button } from "react-bootstrap";
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

function ReviewForm({handleSubmit, revText, labelText, defaultValue}){
    const [value, setValue] = React.useState();
    return (
        <Form style={{align:"center"}}>
            <Form.Group className = 'mb-3' controlid ='exampleForm.controltextarea1' style={{width:"40%", align:"center"}}>
                <Form.Label>
                    {labelText}
                </Form.Label>
                <Form.Control ref={revText} as ='textarea' rows={3} defaultValue={defaultValue} >
                </Form.Control>
                <Typography component="legend">Controlled</Typography>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
            </Form.Group>
            <Button variant = 'outline-info' onClick={handleSubmit} >
                Submit
            </Button>

        </Form>
    )
}

export default ReviewForm