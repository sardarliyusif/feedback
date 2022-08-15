import React, {useCallback, useEffect, useState} from 'react'
import {RiLightbulbFlashLine} from "react-icons/ri";
import {Typography, Card, Dropdown, Button, Chip} from "./components";
import categories from './data/categories.json'

function App() {
    const [feedbacks, setFeedbacks] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState(['enhancement']);

    useEffect(() => {
        fetch('/data.json')
            .then(d => d.json())
            .then((json) => {
                setFeedbacks(json.productRequests);
            });
    }, []);

    const handleSelectCategory = useCallback((value) => {
        if (value === undefined) {
            setSelectedCategories([]);
        } else if (selectedCategories.includes(value)) {
            setSelectedCategories((prevState) => prevState.filter(c => c !== value));
        } else {
            setSelectedCategories((prevState) => [...prevState, value]);
        }
    }, [selectedCategories]);

    return (
        <div
            className="product-feedback container"
            style={{
                display: 'grid',
                gridTemplateColumns: '255px 1fr',
                gap: '24px',
            }}>
            <div>
                <Card
                    mode="colored"
                    justify="end"
                    style={{
                        height: '150px',
                        flexDirection: 'column'
                    }}
                >
                    <Typography.Title>Front end mentor</Typography.Title>
                    <Typography>Something else</Typography>
                </Card>
                <Card
                    mode="light"
                    style={{
                        flexWrap: 'wrap',
                        columnGap: '8px',
                        rowGap: '14px',
                    }}
                >
                    <Chip
                        selected={selectedCategories.length === 0}
                        onClick={() => handleSelectCategory()}
                    >
                        All
                    </Chip>
                    {categories.map(({label, value}, index) => (<Chip
                        key={index}
                        selected={selectedCategories.includes(value)}
                        onClick={() => handleSelectCategory(value)}
                    >
                        {label}
                    </Chip>))}
                </Card>
            </div>

            <div>

                <Card
                    mode="dark"
                    align="center"
                    justify="between"
                    padding="small"
                >
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px'
                    }}>
                        <RiLightbulbFlashLine color="#ffffff" style={{margin: '8px'}}/>
                        <Typography size="large" weight="bold">{feedbacks.length} Suggestion</Typography>
                        <Dropdown/>
                    </div>

                    <Button><Typography size="small" weight="bold">+ Add new feedback</Typography></Button>
                </Card>

                {feedbacks
                    .filter(({category}) => selectedCategories.length === 0 || selectedCategories.includes(category))
                    .map(({id, title, category, description, comments, upvotes}) => (
                        <Card key={id} padding="large" mode="light">
                            <div>{upvotes}</div>
                            <div>
                                <Typography.Title>{title}</Typography.Title>
                                <Typography>{description}</Typography>
                                <Chip>{categories.find(c => c.value === category)?.label}</Chip>
                            </div>
                            <div>{comments?.length}</div>
                        </Card>
                    ))}
            </div>

        </div>
    );
}

export default App;
