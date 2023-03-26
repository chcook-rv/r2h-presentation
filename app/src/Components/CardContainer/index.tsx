import { FC, useState } from 'react'
import Card, { CardInfo } from '../Card'
import { testOffers } from '../../data/testOffers'
import './CardContainer.scss'

const CardContainer: FC = () => {
  const [checkedList, setCheckedList] = useState<string[]>([])

  const handleCheckedClick = (info: CardInfo) => {
    const currentCheckedIdList = [...checkedList]

    const clickedIndex = currentCheckedIdList.findIndex((checkedId) => checkedId === info.id)

    clickedIndex > -1
      ? currentCheckedIdList.splice(clickedIndex, 1)
      : currentCheckedIdList.push(info.id)

    setCheckedList(currentCheckedIdList)
  }

  return <div className="cardContainer">
    <h2 className="header">Check out your top offers</h2>
  </div>
}

export default CardContainer
