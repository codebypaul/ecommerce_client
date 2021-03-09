import styled from 'styled-components'
import {Form,Button} from 'react-bootstrap'
export default function Home() {
    return (
        <PageWrapper>
            <div className="row m-0 home-img">
                <div className="col-md-8 left-img">
                    this will be a flush image carousel
                </div>
                <div className="col-md-4 right-img">
                    <div className="row m-0 top-right">
                        static image
                    </div>
                    <div className="row m-0 bottom-right">
                        static image
                    </div>
                </div>
            </div>
            <div className="row m-0 promo-area p-5 bg-primary">
                <h3 className='mx-auto'>Enter code 'abc123' at checkout for 10% off your order</h3>
            </div>
            <div className="row m-0">
                <div className="col-md-4"></div>
                <div className="col-md-4"></div>
                <div className="col-md-4"></div>
            </div>
            <div className="row m-0 p-5   ">
                <h1 className='mx-auto'>Sign up for our news letter!</h1>
                <h3 className='mx-auto'>Get updates on our newest products, coupon codes and more!</h3>
                <Form className='w-75 mx-auto'>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="text" placeholder="Enter your name" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter your email" />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </PageWrapper>
    )
}

const PageWrapper = styled.div`
    .left-img {
        width: 100%;
        height: 30rem;
        background: blue;
    }
    .right-img {
        height: 100%;
        padding: 0;
    }
    .top-right {
        background: red;
        height: 15rem;
        width: 100%;
    }
    .bottom-right {
        background: green;
        height: 15rem;
        width: 100%;
    }
`