import React, { useState, useEffect } from 'react';
import { Container, Header, ListContainer, AddButton } from './style';
import AddProject from '../../components/AddProject';
import { Card, Typography, Button } from '@phork/phorkit'
import Description from '../../components/Description/Description'
import ToolBar from '../../components/ToolBar';

const MyProjects = () => {

  const URL = "https://jsonplaceholder.typicode.com/posts";
  const [data, getData] = useState([]);
  const [content, setContent] = useState();

  


  useEffect(() => {
    fetchData();
     setContent(data[0]);
    //  console.log(data[0])
  }, []);

  const fetchData = () => {
    fetch(URL)
      .then((res) => res.json())

      .then((response) => {
        // console.log(response);
        getData(response);
      });
  };



  return (
    <>
      <div>
        <Container>
          <ToolBar length={data.length} isAdmin  />
          <ListContainer>

            {data.map((task) =>
              <Card
                hoverable
                raised={10}
                key={task?.id}
                id={task?.id}
                style={{
                  marginLeft: "50px", 
                  marginBottom: "50px", 
                  width: "25%"
                }}
                onClick={() => setContent(task)}
              >
                <Typography
                  as="h1"
                  color="primary"
                  style={{
                    alignItems: 'center',
                    display: 'flex',
                    justifyContent: 'center',
                    fontWeight:'bold'
                  }}
                >
                  {`${task?.title?.substring(0, 20)}...`}
                </Typography>
                <Typography
                  as="div"
                  color="primary"
                  style={{
                    alignItems: 'center',
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
                  {`${task?.body?.substring(0, 100)}...`}
                </Typography>
              </Card>
            )}
          </ListContainer>
{content && <Description content={content}  />}
        </Container>
      </div>
    </>
  )
}
export default MyProjects;