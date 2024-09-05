import React, { useState, Children } from "react";

import { StyledTabs } from "./styles/Tabs.styled";
import { StyledTab } from "./styles/Tab.styled";

function Tabs({ children, defaultActiveKey }) {
  const [activeTab, setActiveTab] = useState(defaultActiveKey);

  return (
    <StyledTabs>
      <StyledTab>
        {Children.map(children, (child) => (
          <a href="#" onClick={() => setActiveTab(child.props.name)}>
            {child}
          </a>
        ))}
      </StyledTab>

      {Children.map(children, (child) =>
        activeTab === child.props.name ? <p>{child.props.children}</p> : ""
      )}
    </StyledTabs>
  );
}

export default Tabs;
