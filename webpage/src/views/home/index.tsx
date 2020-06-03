import React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { Button } from 'antd'

type Props = RouteComponentProps<any>

const Home: React.FC<Props> = () => {
  console.log(1)

  return <Button type="primary">按钮</Button>
}

export default Home;
