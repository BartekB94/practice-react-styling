import React, { useState } from "react";

import { StyledTabs } from "./styles/Tab.styled";

function Tabs({ tabsList }) {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <StyledTabs>
      {tabsList &&
        tabsList.map((tab) => {
          <a href="#">{tab.title}</a>;
        })}
    </StyledTabs>
  );
}

export default Tabs;
