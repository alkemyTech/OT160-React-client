import React from 'react'

export default function ActivitiesContent({ activities }) {
    return (
        <>
            {activities.map(activity => {
                return (
                    <>
                        <Container>
                            <Row className="justify-content-md-center">
                                <Col xs lg="12">
                                    <img src={activity.image} />
                                </Col>
                                <Col md="auto">
                                    {activity.title}
                                </Col>
                                <Col xs lg="8">
                                    {activity.description}
                                </Col>
                            </Row>

                        </Container>

                    </>
                )
            })}

        </>
    )
}
