import './index.css'

const TabItem = props => {
  const {tabDetails, updateActiveTabId, isActive} = props
  const {displayText, tabId} = tabDetails

  const onClickTabItem = () => updateActiveTabId(tabId)

  // Writting condition of Styling Tabs When user Click on it
  const activeTabClassName = isActive ? 'active' : ''

  return (
    <li className="tab-item-container ">
      <button
        onClick={onClickTabItem}
        type="button"
        className={`tab-btn ${activeTabClassName}`}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
